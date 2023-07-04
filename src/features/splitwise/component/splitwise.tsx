import { FC } from 'react';

import '../style/splitwise.scss';
import HomePage from './homepage';
import { MemberIcon } from 'shared/components/icons/icons';
import { useNavigate } from 'react-router-dom';

const SplitWise: FC = () => {
	const navigate = useNavigate();
	return (
		<div>
			<div className='box bg--primary border-radius--xxl position--relative'>
				<h4 className='no--margin text--center mt--15 font-size--24 line-height--20 font--regular text--uppercase'>
					Splitwise
				</h4>
				<div
					className='member-icon__btn position--absolute cursor--pointer'
					onClick={() => navigate('/member-list')}
				>
					<MemberIcon />
				</div>
				<HomePage />
			</div>
		</div>
	);
};

export default SplitWise;
