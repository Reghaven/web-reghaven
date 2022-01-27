import React, { useState } from 'react';
import {
	Alert,
	Typography,
	Box,
	Paper,
	TextField,
	Button,
	Stack,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

export interface LoginBoxLoginResult {
	username: string;
	password: string;
}

export interface LoginBoxRegisterResult {
	username: string;
	email: string;
	password: string;
}

export function LoginBox(props: {
	loginErrorText?: string;
	loading?: boolean;
	onLogin?: (result: LoginBoxLoginResult) => unknown;
	onRegister?: (result: LoginBoxRegisterResult) => unknown;
}) {
	enum Modes {
		LOGIN,
		REGISTER,
	}

	const [mode, setMode] = useState<Modes>(Modes.LOGIN);

	const [loginCredentials, setLoginCredentials] = useState({
		username: '',
		password: '',
	});
	const [registerCredentials, setRegisterCredentials] = useState({
		username: '',
		password: '',
		email: '',
	});

	const Login = (
		<Stack spacing={2}>
			<Typography variant={'h5'} align={'center'}>
				Login
			</Typography>
			{props.loginErrorText && (
				<Alert severity={'error'}>{props.loginErrorText}</Alert>
			)}
			<TextField
				value={loginCredentials.username}
				onChange={(event) =>
					setLoginCredentials((prev) => ({
						...prev,
						username: event.target.value,
					}))
				}
				variant={'outlined'}
				label={'Username'}
				sx={{ width: '100%' }}
			/>
			<TextField
				value={loginCredentials.password}
				onChange={(event) =>
					setLoginCredentials((prev) => ({
						...prev,
						password: event.target.value,
					}))
				}
				type={'password'}
				variant={'outlined'}
				label={'Password'}
				sx={{ width: '100%' }}
			/>
			<LoadingButton
				loading={props.loading || false}
				variant={'contained'}
				onClick={() =>
					props.onLogin &&
					props.onLogin({
						username: loginCredentials.username,
						password: loginCredentials.password,
					})
				}
			>
				Login
			</LoadingButton>
			<Button variant={'text'} onClick={() => setMode(Modes.REGISTER)}>
				new account
			</Button>
		</Stack>
	);

	const Register = (
		<Stack spacing={2}>
			<Typography variant={'h5'} align={'center'}>
				Create new account
			</Typography>
			<TextField
				value={registerCredentials.username}
				onChange={(event) =>
					setRegisterCredentials((prev) => ({
						...prev,
						username: event.target.value,
					}))
				}
				variant={'outlined'}
				label={'Username'}
				sx={{ width: '100%' }}
			/>
			<TextField
				value={registerCredentials.email}
				onChange={(event) =>
					setRegisterCredentials((prev) => ({
						...prev,
						email: event.target.value,
					}))
				}
				variant={'outlined'}
				label={'Email-Address'}
				sx={{ width: '100%' }}
			/>
			<TextField
				value={registerCredentials.password}
				onChange={(event) =>
					setRegisterCredentials((prev) => ({
						...prev,
						password: event.target.value,
					}))
				}
				type={'password'}
				variant={'outlined'}
				label={'Password'}
				sx={{ width: '100%' }}
			/>
			<LoadingButton
				onClick={() =>
					props.onRegister &&
					props.onRegister({
						username: registerCredentials.username,
						password: registerCredentials.password,
						email: registerCredentials.email,
					})
				}
				loading={props.loading || false}
				variant={'contained'}
			>
				Register
			</LoadingButton>
			<Button variant={'text'} onClick={() => setMode(Modes.LOGIN)}>
				already have an account
			</Button>
		</Stack>
	);

	return (
		<Box
			sx={{
				width: 400,
			}}
		>
			<Paper
				elevation={4}
				sx={{
					padding: 2,
				}}
			>
				{mode === Modes.LOGIN && Login}
				{mode === Modes.REGISTER && Register}
			</Paper>
		</Box>
	);
}
