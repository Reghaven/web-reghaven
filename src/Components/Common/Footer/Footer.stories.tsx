import React from 'react';
import { Footer } from './Footer';
import { ComponentMeta } from '@storybook/react';

export default {
	component: Footer,
} as ComponentMeta<typeof Footer>;

export const Primary = () => <Footer />;
