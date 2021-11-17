import React from 'react';
import Slider from '../../components/Slider';
import LightUpString from '../../components/LightUpString';
import { useLanyard } from 'use-lanyard';
import SpotifyMark from '../../components/SpotifyMark';
import UserMark from '../../components/UserMark';
import './temporary.css';

interface AboutMarkProps {}

const AboutMark: React.FC<AboutMarkProps> = () => {
	const { data: activity } = useLanyard('290867016468791297', {
		refreshInterval: 2000,
		revalidateOnFocus: false,
		refreshWhenHidden: true
	});

	return (
		<div className='min-w-screen min-h-screen pt-4 tablet:pt-20'>
			<Slider site={'about'} />
			<div className='w-screen flex flex-column text-white'>
				<UserMark user={activity?.discord_user ?? undefined} />
				{/* <SpotifyMark spotify={activity?.spotify ?? undefined} /> */}
			</div>
		</div>
	);
};

export default AboutMark;
