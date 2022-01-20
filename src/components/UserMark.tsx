import * as React from 'react';
import { DiscordUser as DiscordUserType } from 'use-lanyard';
import { useLanyard } from 'use-lanyard';
import Custom from './customStatus';

interface UserMarkProps {
	user?: DiscordUserType;
}

const UserMark: React.FC<UserMarkProps> = ({ user }) => {
	const { data: activity } = useLanyard('290867016468791297', {
		refreshInterval: 2000,
		revalidateOnFocus: false,
		refreshWhenHidden: true
	});

	return (
		<div className='min-w-screen flex flex-col items-center text-3xl tablet:items-left'>
			<div className='justify-center items-center py-3 flex flex-row w-screen  border-4 border-gray-600 rounded-3xl bg-gradient-to-br from-transparent to-darkblue tablet:w-max px-12 py-6'>
				<div className='text-4xl ml-2 tablet:text-5xl'>
					{user?.username}
				</div>
				<div className='mb-4'>{'#' + user?.discriminator}</div>
				<img
					alt='pfp'
					src={
						'https://cdn.discordapp.com/avatars/290867016468791297/' +
						user?.avatar +
						'.jpg'
					}
					className='w-auto h-20 ml-2 border-4 border-gray-500 rounded-2xl tablet:h-28'
				></img>
			</div>
			<Custom custom={activity?.activities[0] ?? undefined} />
		</div>
	);
};

export default UserMark;
