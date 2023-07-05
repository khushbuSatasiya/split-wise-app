import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'hoc/layout/layout';

import SplitWise from 'features/splitwise/component/splitwise';
import MemberList from 'features/splitwise/component/memberList';
import AddExpense from 'features/splitwise/component/addExpense';

const App: React.FC = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<SplitWise />} />
				<Route path='/expense' element={<AddExpense />} />
				<Route path='/member-list' element={<MemberList />} />
			</Routes>
		</Layout>
	);
};

export default App;
