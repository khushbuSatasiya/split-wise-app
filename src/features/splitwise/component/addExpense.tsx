import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ErrorMessage, Formik, FormikValues } from 'formik';
import Select from 'react-select';
import * as actionTypes from 'store/actionTypes';

import { LeftArrowIcon, RightIcon } from 'shared/components/icons/icons';
import { CUSTOM_STYLE } from 'shared/constants/constants';
import { settleUpFormValidationSchema } from 'shared/constants/validation-schema';
import { useDispatch } from 'react-redux';
import { createAction } from 'shared/util/utility';
import { notify } from 'shared/components/notification/notification';

const options: any = [
	{ value: 'you', label: 'You' },
	{ value: 'peter', label: 'Peter' },
	{ value: 'justin', label: 'Justin' },
	{ value: 'jack', label: 'Jack' },
	{ value: 'lisa', label: 'Lisa' },
	{ value: 'joe', label: 'Joe' }
];

const peopleArray = ['you', 'peter', 'justin', 'jack', 'lisa', 'joe'];

const AddExpense: FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [selectedOption, setSelectedOption] = useState<any>(options[0]);
	const [selectedValues, setSelectedValues] = useState<string[]>([]);

	const handleSelectedOptions = (selectedValue: string) => {
		setSelectedOption(selectedValue);
	};

	const handleCheckValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		let updatedValues: string[] = [];
		const prevSelectedValues = selectedValues;
		if (event.target.checked) {
			updatedValues = [...prevSelectedValues, value];
		} else {
			updatedValues = prevSelectedValues.filter((selectedValue) => selectedValue !== value);
		}
		setSelectedValues(updatedValues);
		return updatedValues;
	};

	return (
		<>
			<div className='mt--15 ml--15 cursor--pointer' onClick={() => navigate(-1)}>
				<LeftArrowIcon />
			</div>
			<div className='position--relative'>
				<Formik
					initialValues={{
						name: '',
						amount: '',
						paid_by: 'you',
						people_name: []
					}}
					validationSchema={settleUpFormValidationSchema}
					onSubmit={(values: FormikValues) => {
						localStorage.setItem('settleData', JSON.stringify(values));
						dispatch(createAction(actionTypes.GET_SETTLE_VALUE, values));
						notify('save successfully', 'success');
						navigate('/');
					}}
				>
					{({ setFieldValue, values, handleSubmit }) => {
						return (
							<form className='p--25' onSubmit={handleSubmit}>
								<div className='flex flex--column'>
									<input
										type='text'
										name='name'
										id='name'
										onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
											setFieldValue('name', event.target.value)
										}
										value={values.name}
										className='input-field no--bg text--white mt--40 p--10 font-size--xxl font--regular line-height--20'
										placeholder='Expense Name'
										autoComplete='off'
									/>
									<p className='text--red-100 mt--10'>
										<ErrorMessage name='name' />
									</p>

									<input
										type='number'
										name='amount'
										id='amount'
										onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
											setFieldValue('amount', event.target.value)
										}
										value={values.amount}
										className='input-field no--bg text--white mt--40 p--10 font-size--xxl font--regular line-height--20'
										placeholder='Enter amount'
										autoComplete='off'
									/>
									<p className='text--red-100 mt--10'>
										<ErrorMessage name='amount' />
									</p>

									<div className='mt--40'>
										<div className='flex align-items--center'>
											<p className='text--grey-200 font-size--xxl font--regular line-height--20'>
												Paid by:
											</p>
											<div className='input-select'>
												<Select
													value={selectedOption}
													onChange={(value: any) => {
														console.log(value.value);

														handleSelectedOptions(value);
														setFieldValue('paid_by', value.value);
													}}
													options={options}
													styles={CUSTOM_STYLE}
													placeholder='Paid by...'
												/>
											</div>
										</div>
									</div>

									<div className='mt--40'>
										<p className='text--grey-200 font-size--xxl font--regular line-height--20'>
											How many people part of expense?
										</p>
										<div className='flex flex--wrap justify-content--between'>
											{peopleArray.map((data: string, index: number) => {
												return (
													<div className='mt--15 width--30' key={index}>
														<label
															htmlFor={`people${index}`}
															className='check-wrapper flex width--full font-size--browser-default font--regular line-height--20'
														>
															<input
																type='checkbox'
																id={`people${index}`}
																name='people_name'
																value={data}
																onChange={(
																	event: React.ChangeEvent<HTMLInputElement>
																) => {
																	const updatedData = handleCheckValue(event);
																	setFieldValue('people_name', updatedData);
																}}
															/>

															<span className='checkmarks' />
															<p className='ml--25'>{data}</p>
														</label>
													</div>
												);
											})}
										</div>
									</div>
								</div>

								<button className='position--absolute no--bg save-btn' type='submit'>
									<RightIcon />
								</button>
							</form>
						);
					}}
				</Formik>
			</div>
		</>
	);
};

export default AddExpense;
