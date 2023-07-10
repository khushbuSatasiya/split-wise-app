import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { LeftArrowIcon } from 'shared/components/icons/icons';

import { IExpense } from 'features/auth/interface/auth';

const SettleUp: FC = () => {
	const navigate = useNavigate();

	const getSettledData = localStorage.getItem('settledData') as string;

	const expense = JSON.parse(getSettledData);

	return (
		<div>
			<div className='mt--15 ml--15 cursor--pointer' onClick={() => navigate(-1)}>
				<LeftArrowIcon />
			</div>
			<div className='settle-activity_box position--relative text--black overflow--scroll-y border-radius--xxl'>
				<div className='mt--20'>
					{getSettledData?.length > 0 && (
						<>
							{expense &&
								expense?.map((data: IExpense, index: number) => {
									const { name, paid_by, amount, people_name } = data;

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
											className='flex justify-content--between align-items--center p--10 m--10 border-radius--lg cursor--pointer border--white'
											key={index}
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
															: paid_by.value !== 'you' && !people_name.includes('you')
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
			</div>
		</div>
	);
};

export default SettleUp;
