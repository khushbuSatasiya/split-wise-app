import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'hoc/layout/layout';

import SplitWise from 'features/splitwise/component/splitwise';
import SettleUp from 'features/splitwise/component/settleUp';
import MemberList from 'features/splitwise/component/memberList';

const App: React.FC = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<SplitWise />} />
				<Route path='/settle-up' element={<SettleUp />} />
				<Route path='/member-list' element={<MemberList />} />
			</Routes>
		</Layout>
	);
};

export default App;
