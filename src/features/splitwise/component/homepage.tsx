import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { IExpense } from 'features/auth/interface/auth';
import { useNavigate } from 'react-router-dom';
import { PlusIcon } from 'shared/components/icons/icons';

const HomePage: FC = () => {
	const navigate = useNavigate();

	const totalDue: any = useMemo(() => [], []);

	const [finalTotalDue, setFinalTotalDue] = useState<number>(2);

	// const expense = useSelector((state: IState) => state.expense);
	const getExpenseData: any = localStorage.getItem('expenseData');

	const getTotalExpenseForYou = useCallback(() => {
		JSON.parse(getExpenseData) &&
			JSON.parse(getExpenseData).map((data: IExpense) => {
				const { paid_by, amount, people_name } = data;

				const totalAmount = Number(amount) / (people_name.length + 1);
				let finalAmount = Number(amount) - totalAmount;

				if (paid_by === 'you') {
					finalAmount = Number(finalAmount);
				} else {
					finalAmount = -Number(finalAmount);
				}
				totalDue.push(finalAmount);
				console.log('totalDue:', totalDue);

				const sum = totalDue.reduce(
					(accumulator: number, currentValue: number) => accumulator + currentValue,
					0
				);
				setFinalTotalDue(sum);
			});
	}, [getExpenseData, totalDue]);

	useEffect(() => {
		getTotalExpenseForYou();
	}, []);

	return (
		<div className='p--20'>
			<div className='display-flex-center flex--column'>
				<div className='display-flex-center flex--column mt--20'>
					<div className='display-flex-center group-name border-radius--half bg--white text--primary font-size--40'>
						G
					</div>
					<p className='font-size--browser-default font--medium line-height--20 mt--15'>Group Name</p>

					{getExpenseData?.length === 0 && (
						<p className='font-size--sm font--regular line-height--20 mt--15'>
							You are all settled up in this group.
						</p>
					)}

					{getExpenseData?.length > 0 && finalTotalDue && (
						<>
							<p
								className={`font-size--sm font--regular line-height--20 mt--15  ${
									finalTotalDue < 0 && 'text--red-600'
								}`}
							>
								You owe ${Math.abs(finalTotalDue)} overall
							</p>
						</>
					)}

					<button className='settle-up__btn text--white border-radius--22 bg--success-1000 text--white mt--15 mb--15'>
						Settle Up
					</button>
				</div>
				<div className='activity-box bg--white position--relative text--black overflow--scroll-y'>
					<div className='mt--20'>
						{getExpenseData?.length > 0 && (
							<>
								{JSON.parse(getExpenseData) &&
									JSON.parse(getExpenseData)?.map((data: IExpense, index: number) => {
										const { name, paid_by, amount, people_name } = data;

										let finalAmount;
										const totalAmount = Number(amount) / people_name.length;

										if (paid_by === 'you') {
											finalAmount = Number(amount) - totalAmount;
										} else {
											finalAmount = totalAmount;
										}

										return (
											<div
												className='flex justify-content--between align-items--center p--10 mb--15 cursor--pointer'
												key={index}
												onClick={() => navigate(`/${name}/${index}`)}
											>
												<div className='flex width--50 align-items--center'>
													<div className='items display-flex-center border-radius--xl font-size--xxl font--semi-bold text--grey-800 text--uppercase'>
														{name.charAt(0)}
													</div>
													<div className='flex flex--column ml--20'>
														<h5 className='no--margin font-size--xxl font--medium mb--5 text--grey-800'>
															{name.charAt(0).toUpperCase() + name.slice(1)}
														</h5>
														<p className='font-size--sm font--regular text--grey-800'>
															{paid_by} paid ${amount}
														</p>
													</div>
												</div>
												<div className='flex flex--column '>
													<p
														className={`mb--5 font-size--sm font--regular ${
															paid_by === 'you' ? 'text--success-600' : 'text--red-600'
														}`}
													>
														{paid_by === 'you' ? 'you lent' : 'you borrowed'}
													</p>
													<h6
														className={`no--margin text--right text--grey-800 ${
															paid_by === 'you' ? 'text--success-600' : 'text--red-600'
														}`}
													>
														{finalAmount}
													</h6>
												</div>
											</div>
										);
									})}
							</>
						)}
					</div>
					<div
						className='position--absolute plus-icon__btn cursor--pointer  '
						onClick={() => navigate('/expense')}
					>
						<PlusIcon height='50px' width='50px' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
