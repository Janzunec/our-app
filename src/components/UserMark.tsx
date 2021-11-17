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
		<>
			<div className='border-2'>{user?.username}</div>
			<Custom custom={activity?.activities[0] ?? undefined} />
		</>
	);
};

export default UserMark;
