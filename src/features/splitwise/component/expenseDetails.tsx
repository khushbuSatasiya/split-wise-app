import { IExpense } from 'features/auth/interface/auth';
import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { DeleteIcon, EditIcon, LeftArrowIcon } from 'shared/components/icons/icons';
import { notify } from 'shared/components/notification/notification';

const ExpenseDetails: FC = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const [expenseDetail, setExpenseDetail] = useState<IExpense>({} as IExpense);

	const getExpenseData: any = localStorage.getItem('expenseData');

	const getExpenseDetail = () => {
		setExpenseDetail(JSON.parse(getExpenseData)[location.pathname.split('/')[2]]);
	};

	useEffect(() => {
		getExpenseDetail();
	}, []);

	const handleDelete = () => {
		const dummyExp = JSON.parse(getExpenseData);
		dummyExp.splice(location.pathname.split('/')[2], 1);
		localStorage.setItem('expenseData', JSON.stringify(dummyExp));
		notify('Data Deleted', 'success');
		navigate('/');
	};

	const handleEdit = () => {
		navigate(`/expense/${location.pathname.split('/')[2]}`);
	};

	return (
		<div>
			<div className='flex justify-content--between'>
				<div className='mt--15 ml--15 cursor--pointer' onClick={() => navigate(-1)}>
					<LeftArrowIcon />
				</div>
				<div className='flex'>
					<div className=' mr--20 mt--15 cursor--pointer' onClick={() => handleEdit()}>
						<EditIcon />
					</div>
					<div className=' mr--15 mt--15 cursor--pointer' onClick={() => handleDelete()}>
						<DeleteIcon />
					</div>
				</div>
			</div>

			<div className='mt--25 p--25'>
				<div>
					<h2 className='no--margin font-size--xxl font--medium mb--10 text--grey-800'>
						{expenseDetail && expenseDetail.name
							? expenseDetail?.name.charAt(0).toUpperCase() + expenseDetail?.name.slice(1)
							: ''}
					</h2>
					<h5 className='font-size--24 font--semi-bold mb--10'>${expenseDetail.amount}</h5>
					<p className='font-size--sm line-height--20 font-light'>added by {expenseDetail.paid_by}</p>

					<p className='font-size--sm line-height--20 mt--20 font--bold'>
						{expenseDetail.paid_by} paid ${expenseDetail.amount}
					</p>
					<>
						{expenseDetail?.people_name?.map((people: string, index: number) => {
							const totalAmount = Number(expenseDetail.amount) / expenseDetail?.people_name.length;

							return (
								<p className='font-size--sm line-height--20 mt--20 font--regular' key={index}>
									{people} owe ${totalAmount}
								</p>
							);
						})}
					</>
				</div>
			</div>
		</div>
	);
};

export default ExpenseDetails;
