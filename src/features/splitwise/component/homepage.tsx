import { FC, useEffect, useState } from 'react';
import { IExpense } from 'features/auth/interface/auth';
import { useNavigate } from 'react-router-dom';
import { PlusIcon } from 'shared/components/icons/icons';

const HomePage: FC = () => {
	const navigate = useNavigate();

	const oweArray: any = [];
	const borrowArray: any = [];

	const [totalOwe, setTotalOwe] = useState<number>(0);
	const [totalBorrow, setTotalBorrow] = useState<number>(0);

	// const expense = useSelector((state: IState) => state.expense);
	const getExpenseData: any = localStorage.getItem('expenseData');

	const expense = JSON.parse(getExpenseData);

	expense &&
		expense.map((data: IExpense) => {
			const { amount, people_name, paid_by } = data;

			let finalA;
			let totalA;

			if (people_name?.includes('you') && paid_by?.value === 'you') {
				totalA = Number(amount) / people_name.length;
				finalA = Number(amount) - Number(totalA);
				oweArray.push(finalA);
			}

			if (!people_name?.includes('you') && paid_by?.value === 'you') {
				finalA = Number(amount);
				oweArray.push(finalA);
			}

			if (people_name?.includes('you') && paid_by?.value !== 'you') {
				finalA = Number(amount) / people_name.length;
				borrowArray.push(finalA);
			}
		});
	const oweSum = oweArray.reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0);

	const borrowSum = borrowArray.reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0);

	const getTotalExpenseForYou = () => {
		setTotalOwe(Math.round(oweSum));
		setTotalBorrow(Math.round(borrowSum));
	};

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

					{getExpenseData?.length > 0 && totalOwe && (
						<>
							<p
								className={`font-size--sm font--regular line-height--20 mt--15  ${
									totalOwe < 0 && 'text--red-600'
								}`}
							>
								You owe ${Math.abs(totalOwe)} overall
							</p>
						</>
					)}

					{getExpenseData?.length > 0 && totalBorrow && (
						<>
							<p
								className={`font-size--sm font--regular line-height--20 mt--15  ${
									totalBorrow > 0 && 'text--red-600'
								}`}
							>
								You borrowed ${Math.abs(totalBorrow)} overall
							</p>
						</>
					)}

					<button
						className='settle-up__btn text--white border-radius--22 bg--success-1000 text--white mt--15 mb--15'
						onClick={() => navigate('/settle')}
					>
						Settled Data
					</button>
				</div>
				<div className='activity-box bg--white position--relative text--black overflow--scroll-y border-radius--xxl'>
					<div className='mt--20'>
						{getExpenseData?.length > 0 && (
							<>
								{expense &&
									expense?.map((data: IExpense, index: number) => {
										const { name, paid_by, amount, people_name, id } = data;

										let finalAmount;
										let totalAmount;

										if (people_name?.includes('you') && paid_by?.value === 'you') {
											totalAmount = Number(amount) / people_name.length;
											finalAmount = Number(amount) - Number(totalAmount);
										}

										if (!people_name?.includes('you') && paid_by?.value === 'you') {
											finalAmount = amount;
										}

										if (people_name?.includes('you') && paid_by?.value !== 'you') {
											finalAmount = Number(amount) / people_name.length;
										}

										return (
											<div
												className='flex justify-content--between align-items--center p--10 mb--15 cursor--pointer'
												key={index}
												onClick={() => navigate(`/${name}/${id}`)}
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
															{paid_by.value} paid ${amount}
														</p>
													</div>
												</div>
												<div className='flex flex--column'>
													<p
														className={`mb--5 text--right font-size--sm font--regular ${
															paid_by.value === 'you'
																? 'text--success-600'
																: paid_by.value !== 'you' &&
																  !people_name.includes('you')
																? 'text--black'
																: 'text--red-600'
														}`}
													>
														{paid_by.value === 'you'
															? 'you lent'
															: paid_by.value !== 'you' && !people_name.includes('you')
															? 'not involved'
															: 'you borrowed'}
													</p>
													{!(paid_by.value !== 'you' && !people_name.includes('you')) && (
														<h6
															className={`no--margin text--right text--grey-800 ${
																paid_by.value === 'you'
																	? 'text--success-600'
																	: 'text--red-600'
															}`}
														>
															${Math.round(Number(finalAmount))}
														</h6>
													)}
												</div>
											</div>
										);
									})}
							</>
						)}
					</div>
					<div
						className='position--sticky flex justify-content--end plus-icon__btn cursor--pointer  '
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
