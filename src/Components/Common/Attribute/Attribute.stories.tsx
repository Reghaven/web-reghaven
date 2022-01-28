import React from 'react';
import { Attribute } from './Attribute';
import { ComponentMeta } from '@storybook/react';

export default {
	component: Attribute,
} as ComponentMeta<typeof Attribute>;

export const Primary = () => (
	<Attribute
		attribute={{
			uuid: '2f21f80c-5369-4dd1-ae6a-b40044c802d4',
			name: 'Strength',
		}}
	/>
);
