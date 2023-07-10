import { IExpense } from 'features/auth/interface/auth';
import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { DeleteIcon, EditIcon, HansShakeIcon, LeftArrowIcon } from 'shared/components/icons/icons';
import { notify } from 'shared/components/notification/notification';

const ExpenseDetails: FC = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [expenseDetail, setExpenseDetail] = useState<IExpense>({} as IExpense);

	const settleData = JSON.parse(localStorage.getItem('settledData') as string) || [];

	const getExpenseData = localStorage.getItem('expenseData') as string;

	const getExpenseDetail = () => {
		const index = JSON.parse(getExpenseData).findIndex((item: IExpense) => item.id === parseInt(id as string));
		setExpenseDetail(JSON.parse(getExpenseData)[index as number]);
	};

	useEffect(() => {
		getExpenseDetail();
	}, []);

	const handleDelete = () => {
		const dummyExp = JSON.parse(getExpenseData);
		const index = dummyExp.findIndex((item: IExpense) => item.id === parseInt(id as string));

		dummyExp.splice(index, 1);

		dummyExp.splice(index, 1);
		localStorage.setItem('expenseData', JSON.stringify(dummyExp));

		notify('Data Deleted', 'success');
		navigate('/');
	};

	const handleEdit = () => {
		navigate(`/expense/${id}`);
	};

	const handleSettle = () => {
		const dummyExp: any = JSON.parse(getExpenseData);

		const index = dummyExp.findIndex((item: IExpense) => item.id === parseInt(id as string));
		settleData.push(dummyExp[index]);

		dummyExp.splice(index, 1);
		localStorage.setItem('expenseData', JSON.stringify(dummyExp));

		localStorage.setItem('settledData', JSON.stringify(settleData));
		navigate('/');
	};

	return (
		<div>
			<div className='flex justify-content--between'>
				<div className='mt--15 ml--15 cursor--pointer' onClick={() => navigate(-1)}>
					<LeftArrowIcon />
				</div>
				<div className='flex' title='edit'>
					<div className=' mr--20 mt--15 cursor--pointer' onClick={() => handleEdit()}>
						<EditIcon />
					</div>
					<div className=' mr--15 mt--15 cursor--pointer' onClick={() => handleDelete()} title='delete'>
						<DeleteIcon />
					</div>
					<div className=' mr--15 mt--15 cursor--pointer' onClick={() => handleSettle()} title='settle'>
						<HansShakeIcon width='24px' height='24px' />
					</div>
				</div>
			</div>

			{expenseDetail && (
				<div className='mt--25 p--25'>
					<div>
						<h2 className='no--margin font-size--xxl font--medium mb--10 text--white'>
							{expenseDetail && expenseDetail.name
								? expenseDetail?.name.charAt(0).toUpperCase() + expenseDetail?.name.slice(1)
								: ''}
						</h2>
						<h5 className='font-size--24 font--semi-bold mb--10 text--white'>${expenseDetail.amount}</h5>
						<p className='font-size--sm line-height--20 font-light'>
							added by {expenseDetail?.paid_by?.value}
						</p>

						<p className='font-size--lg line-height--20 mt--20 font--bold'>
							{expenseDetail?.paid_by?.value} paid ${expenseDetail.amount}
						</p>
						<>
							{expenseDetail?.people_name?.map((people: string, index: number) => {
								const totalAmount = Number(expenseDetail.amount) / expenseDetail?.people_name.length;

								return (
									<p
										className='text--grey-800 font-size--md line-height--20 mt--20 font--regular'
										key={index}
									>
										{people} owe ${Math.round(Number(totalAmount))}
									</p>
								);
							})}
						</>
					</div>
				</div>
			)}
		</div>
	);
};

export default ExpenseDetails;
