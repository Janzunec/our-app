import React from 'react';
import { useLanyard } from 'use-lanyard';
import { DiscordUser as DiscordUserType } from 'use-lanyard';
import { Spotify as SpotifyType } from 'use-lanyard';

interface ActivityJanProps {}

const ActivityJan: React.FC<ActivityJanProps> = () => {
	const { data: activity } = useLanyard('409386496878182401', {
		refreshInterval: 5000,
		revalidateOnFocus: false,
		refreshWhenHidden: true
	});
	const spotify = activity?.spotify;
	return (
		<div className=' w-96 h-auto flex flex-row border-2 border-gray-500 rounded-lg gap-0 text-white'>
			<div className=''>
				{spotify && (
					<img
						src={spotify?.album_art_url}
						className='rounded-l-lg w-20 h-20'
					/>
				)}
			</div>
			<div className='w-5/6 grid grid-rows-2 border-l-2 border-gray-500 text-xl'>
				<div className='w-full h-auto border-b-2 border-gray-500 flex items-center pl-2 font-bold'>
					{spotify?.song}
				</div>
				<div className='w-full h-auto flex items-center pl-2'>
					{spotify?.artist}
				</div>
			</div>
		</div>
	);
};

export default ActivityJan;
