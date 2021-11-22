import React from 'react';
import Slider from '../../components/Slider';

interface ContactJanProps {}

const ContactJan: React.FC<ContactJanProps> = () => {
	return (
		<div className=' w-screen pt-4 tablet:pt-20'>
			<div className='flex justify-center items-center'>
				<Slider site='contact' />
			</div>
		</div>
	);
};

export default ContactJan;
