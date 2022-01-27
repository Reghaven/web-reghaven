import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { LoginBox } from './LoginBox';

export default {
	component: LoginBox,
} as ComponentMeta<typeof LoginBox>;

export const Primary = () => <LoginBox />;

export const InvalidCredentials = () => (
	<LoginBox loginErrorText={'invalid credentials'} />
);

export const IsLoading = () => <LoginBox loading />;
