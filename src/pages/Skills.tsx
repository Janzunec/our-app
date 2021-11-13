import React, { useState } from 'react';

const Skills: React.FC = () => {
	const first = Math.floor(Math.random() * 2) === 1 ? true : false;

	const [isChecked, setIsChecked] = useState(first);

	const handleOnChange = () => {
		setIsChecked(!isChecked);
		console.log(isChecked);
	};

	return (
		<div className='w-screen h-screen pt-20'>
			<div className='form-control flex align-middle items-center justify-center flex-row'>
				{/* <label className='cursor-pointer label'> */}
				<span className='label-text text-3xl mr-6'>Jan</span>
				<input
					type='checkbox'
					className='toggle toggle-primary toggle-lg bg-opacity-100 border-opacity-100'
					checked={isChecked}
					onChange={handleOnChange}
				></input>
				<span className='label-text text-3xl ml-6 text-secondary'>
					Mark
				</span>
				{/* </label> */}
			</div>
		</div>
	);
};

export default Skills;
