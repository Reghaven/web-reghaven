import React from 'react';
import App from './App';
import { ComponentMeta } from '@storybook/react';

export default {
	component: App,
} as ComponentMeta<typeof App>;

export const Primary = () => <App />;
