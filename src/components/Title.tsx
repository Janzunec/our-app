import React from 'react';
import LightUpString from './LightUpString';

export default function Title() {
	const members = ['Jan', 'Mark'];
	const first = Math.floor(Math.random() * 2);
	const membersString = `const x = ["${members.splice(first, 1)}", "${
		members[0]
	}"];`;

	return (
		<div className='w-screen h-auto laptop:h-screen text-left flex flex-col tablet:ml-6 border-0 pt-4 tablet:pt-20 gap-4 pl-4 z-10'>
			<div className='text-lg tablet:text-xl laptop:text-2xl font-lba italic text-secondary'>
				<LightUpString content='<script>' color='tocyan' />
			</div>
			<div className='font-main text-md tablet:text-xl laptop:text-2xl text-secondary laptop:pl-6'>
				<div>
					<LightUpString
						content={`${membersString}`}
						color='tocyan'
					/>
				</div>
				<div>
					<LightUpString
						content='this.website = "Portfolio";'
						color='tocyan'
					/>{' '}
				</div>
			</div>
			<div className='font-sm text-4xl tablet:text-5xl laptop:text-6xl desktop:text-8xl leading-tight font-main text-primary flex flex-col items-left tablet:p-4 laptop:p-8'>
				<div>
					<LightUpString content='`Just ' color='topurple' />
					<span className='font-jtm text-4xl tablet:text-5xl laptop:text-6xl'>
						<LightUpString content='${x.length}' color='topurple' />
					</span>
				</div>
				<div>
					<LightUpString
						content='guys, being junior'
						color='topurple'
					/>
				</div>
				<div>
					<LightUpString
						content='web developers`;'
						color='topurple'
					/>
				</div>
			</div>
			<div className='text-lg tablet:text-xl laptop:text-2xl font-lba italic text-secondary'>
				<LightUpString content='</script>' color='tocyan' />
			</div>
		</div>
	);
}
