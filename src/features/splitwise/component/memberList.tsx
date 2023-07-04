import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { LeftArrowIcon } from 'shared/components/icons/icons';

const MemberList: FC = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className='mt--15 ml--15 cursor--pointer' onClick={() => navigate(-1)}>
				<LeftArrowIcon />
			</div>
			<div className='flex flex--column p--30 mt--30'>
				<div className='flex align-items--center mb--15'>
					<div className='profile display-flex-center border-radius--half bg--white text--primary font-size--default '>
						Y
					</div>
					<p className='ml--10'>You</p>
				</div>
				<div className='flex align-items--center mb--15'>
					<div className='profile display-flex-center border-radius--half bg--white text--primary font-size--default '>
						J
					</div>
					<p className='ml--10'>John Doe</p>
				</div>
				<div className='flex align-items--center mb--15'>
					<div className='profile display-flex-center border-radius--half bg--white text--primary font-size--default '>
						P
					</div>
					<p className='ml--10'>Peter</p>
				</div>
				<div className='flex align-items--center mb--15'>
					<div className='profile display-flex-center border-radius--half bg--white text--primary font-size--default '>
						P
					</div>
					<p className='ml--10'>Peter</p>
				</div>
				<div className='flex align-items--center mb--15'>
					<div className='profile display-flex-center border-radius--half bg--white text--primary font-size--default '>
						P
					</div>
					<p className='ml--10'>Peter</p>
				</div>
				<div className='flex align-items--center mb--15'>
					<div className='profile display-flex-center border-radius--half bg--white text--primary font-size--default '>
						P
					</div>
					<p className='ml--10'>Peter</p>
				</div>
			</div>
		</>
	);
};

export default MemberList;
