import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { LoginBox } from './LoginBox';

export default {
	component: LoginBox,
} as ComponentMeta<typeof LoginBox>;

export const Primary = () => <LoginBox />;
