import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'hoc/layout/layout';

import SplitWise from 'features/splitwise/component/splitwise';
import MemberList from 'features/splitwise/component/memberList';
import AddExpense from 'features/splitwise/component/addExpense';
import ExpenseDetails from 'features/splitwise/component/expenseDetails';
import SettleUp from 'features/splitwise/component/settleUp';

const App: React.FC = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<SplitWise />} />
				<Route key={1} path='/expense' element={<AddExpense key={1} />} />
				<Route key={2} path='/expense/:id' element={<AddExpense />} />
				<Route path='/member-list' element={<MemberList />} />
				<Route path='/:name/:id' element={<ExpenseDetails />} />
				<Route path='/settle' element={<SettleUp />} />
			</Routes>
		</Layout>
	);
};

export default App;
