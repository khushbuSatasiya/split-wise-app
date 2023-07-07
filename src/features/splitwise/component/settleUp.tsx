import { FC } from 'react';

import { useNavigate } from 'react-router-dom';
import { LeftArrowIcon } from 'shared/components/icons/icons';

const SettleUp: FC = () => {
	const navigate = useNavigate();
	return (
		<div>
			<div className='mt--15 ml--15 cursor--pointer' onClick={() => navigate(-1)}>
				<LeftArrowIcon />
			</div>
		</div>
	);
};

export default SettleUp;
