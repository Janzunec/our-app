import React from 'react';
import Slider from '../../components/Slider';

interface SkillsMarkProps {}

const SkillsMark: React.FC<SkillsMarkProps> = () => {
	return (
		<div className=' w-screen pt-4 tablet:pt-20'>
			<div className='flex justify-center items-center'>
				<Slider site='skills' />
			</div>
		</div>
	);
};

export default SkillsMark;
