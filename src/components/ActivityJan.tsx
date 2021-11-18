import React from 'react';
import { useLanyard } from 'use-lanyard';
import { DiscordUser as DiscordUserType } from 'use-lanyard';
import { Spotify as SpotifyType } from 'use-lanyard';
import LightUpString from './LightUpString';

interface ActivityJanProps {}

const ActivityJan: React.FC<ActivityJanProps> = () => {
	const { data: activity } = useLanyard('409386496878182401', {
		refreshInterval: 5000,
		revalidateOnFocus: false,
		refreshWhenHidden: true
	});
	const user = `${activity?.discord_user.username}#${activity?.discord_user.discriminator}`;
	const spotify =
		activity?.activities[0]?.name === 'Spotify' ? activity?.spotify : '';

	const firstActivity =
		activity?.activities[0]?.name !== 'Spotify'
			? activity?.activities[0]
			: '';

	return (
		<div className=' max-w-activityTable tablet:max-w-lg h-auto flex flex-col'>
			<div className='w-auto h-10 text-center text-2xl text-primary border-2 border-b-0 border-gray-500 rounded-t-lg'>
				<LightUpString content={user} color='topurple' />
			</div>
			{activity?.activities[0] && (
				<div className='w-full h-22 grid grid-cols-4 border-2 border-gray-500 rounded-b-lg gap-0 text-white'>
					<div className=''>
						{spotify && (
							<img
								src={spotify?.album_art_url}
								title={spotify.album}
								className='w-22 h-22 rounded-bl-lg  cursor-help'
							/>
						)}
						{firstActivity && (
							<img
								src={`https://cdn.discordapp.com/app-assets/${firstActivity.application_id}/${firstActivity.assets?.large_image}.png`}
								title={firstActivity.assets?.large_text}
								className='w-22 h-22 rounded-bl-lg  cursor-help'
							/>
						)}
					</div>
					<div className='w-auto col-span-3 flex flex-col gap-0 border-l-2 border-gray-500 text-xl'>
						<div className='w-auto h-11 border-b-2 border-gray-500 flex items-center px-2 font-bold'>
							{spotify && (
								<div className='w-auto truncate ... hover:underline'>
									<a
										href={`https://open.spotify.com/track/${spotify.track_id}`}
										target='blank'
									>
										{spotify.song}
									</a>
								</div>
							)}
							{firstActivity && firstActivity?.name}
						</div>
						<div className='w-auto h-11 flex items-center px-2'>
							{spotify && (
								<div className='  truncate ...'>
									{spotify?.artist}
								</div>
							)}
							{firstActivity && (
								<div className='  truncate ...'>
									{firstActivity?.details}
								</div>
							)}
						</div>
					</div>
				</div>
			)}
			{!activity?.activities[0] && (
				<div className='text-white text-center w-full h-12 border-2 rounded-b-lg border-gray-500 px-2'>
					Currently not at my computer...
				</div>
			)}
		</div>
	);
};

export default ActivityJan;
