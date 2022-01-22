import React from 'react';
import Slider from '../../components/Slider';

interface ContactMarkProps {}

const ContactMark: React.FC<ContactMarkProps> = () => {
	return (
		<div className=' w-screen pt-4 tablet:pt-20 z-10'>
			<div className='flex justify-center items-center'>
				<Slider site='contact' />
			</div>
		</div>
	);
};

export default ContactMark;
