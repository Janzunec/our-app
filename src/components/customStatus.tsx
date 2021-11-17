import * as React from 'react';
import { Activity as ActivityType } from 'use-lanyard';
import { useLanyard } from 'use-lanyard';

interface CustomProps {
	custom?: ActivityType;
}

const Custom: React.FC<CustomProps> = ({ custom }) => {
	return <>{custom?.state}</>;
};

export default Custom;
