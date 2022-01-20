import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { Route, Routes, useNavigate } from 'react-router-dom';

interface SliderProps {
	site: string;
}

const Slider: React.FC<SliderProps> = ({ site }) => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const [isChecked, setIsChecked] = useState(
		pathname === `/${site}/Jan` ? false : true
	);

	const handleOnChange = () => {
		setIsChecked(!isChecked);
		setTimeout(() => {
			pathname === `/${site}/Jan`
				? navigate(`/${site}/Mark`)
				: navigate(`/${site}/Jan`);
		}, 160);
	};

	return (
		<div className='form-control flex align-middle items-center justify-center flex-row z-10'>
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
		</div>
	);
};

export default Slider;
