import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'hoc/layout/layout';

import SplitWise from 'features/splitwise/component/splitwise';

const App: React.FC = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<SplitWise />} />
			</Routes>
		</Layout>
	);
};

export default App;
