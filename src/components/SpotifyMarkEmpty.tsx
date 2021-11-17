import * as React from 'react';
import { FaSpotify } from 'react-icons/fa';

const SpotifyMarkEmpty: React.FC = () => {
	return (
		<>
			<div className='font-ama text-4xl border-2 grid grid-cols-2 w-1/3'>
				<div className='font-pac text-5xl col-span-2 border-2 flex justify-center items-center'>
					<FaSpotify className='text-6xl border-2 text-spotify' />
					<div className='border-2'>Spotify</div>
				</div>
				<div className='border-2'>
					<div className='border-2'></div>
					<div className='border-2'>
						<div className='border-2'>
							<div className='border-2'>
								Mark is currently not listening to anything...
								or an ad
							</div>
						</div>
						<div className='artist'>asd</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SpotifyMarkEmpty;
