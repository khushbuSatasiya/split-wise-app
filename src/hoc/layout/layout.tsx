import { PropsWithChildren } from 'react';

import '../../features/splitwise/style/splitWise.scss';

const Layout: React.FC<PropsWithChildren> = (props) => {
	return (
		<div id='wrapper' className='flex justify-content--center align-items--center height--full-viewport'>
			<div id='page-wrapper' className='full--width box bg--primary border-radius--xxl'>
				{props.children}
			</div>
		</div>
	);
};

export default Layout;
