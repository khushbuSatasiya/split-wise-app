import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusIcon } from 'shared/components/icons/icons';

const HomePage: FC = () => {
	const navigate = useNavigate();
	return (
		<div className='p--20'>
			<div className='display-flex-center flex--column'>
				<div className='display-flex-center flex--column mt--20'>
					<div className='display-flex-center group-name border-radius--half bg--white text--primary font-size--40'>
						G
					</div>
					<p className='font-size--browser-default font--medium line-height--20 mt--15'>Group Name</p>
					<p className='font-size--sm font--regular line-height--20 mt--15'>
						You are all settled up in this group.
					</p>

					<button className='settle-up__btn text--white border-radius--22 bg--success-1000 text--white mt--15 mb--15'>
						Settle Up
					</button>
				</div>
				<div className='activity-box bg--white position--relative'>
					<div
						className='position--absolute plus-icon__btn cursor--pointer'
						onClick={() => navigate('/expense')}
					>
						<PlusIcon height='50px' width='50px' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
