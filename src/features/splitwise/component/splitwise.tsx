import { FC } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { MemberIcon } from 'shared/components/icons/icons';
import { IState } from 'shared/interface/state';

import HomePage from './homepage';

import '../style/splitwise.scss';

const SplitWise: FC = () => {
	const navigate = useNavigate();
	const settledData = useSelector((state: IState) => state.expense);

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
