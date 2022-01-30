import React, { useEffect, useState } from 'react';
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
import { useLogin } from '../../../Hooks/useLogin';
import { useRegister } from '../../../Hooks/useRegister';

enum Modes {
	LOGIN,
	REGISTER,
}

export function LoginBox(props: { onToken?: (token: string) => unknown }) {
	const [mode, setMode] = useState<Modes>(Modes.LOGIN);
	const [login, token, loginError] = useLogin();
	const [register, registerSuccess, registerError] = useRegister();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const [loginCredentials, setLoginCredentials] = useState({
		username: '',
		password: '',
	});
	const [registerCredentials, setRegisterCredentials] = useState({
		username: '',
		password: '',
		email: '',
	});

	// emit token
	useEffect(() => {
		if (props.onToken && token) {
			props.onToken(token);
		}
	}, [token]);

	const Login = (
		<Stack spacing={2}>
			<Typography variant={'h5'} align={'center'}>
				Login
			</Typography>
			{loginError && <Alert severity={'error'}>{loginError}</Alert>}
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
				loading={isLoading}
				variant={'contained'}
				onClick={async () => {
					if (
						loginCredentials.password &&
						loginCredentials.username
					) {
						setIsLoading(true);
						await login({
							username: loginCredentials.username,
							password: loginCredentials.password,
						});
						setIsLoading(false);
					}
				}}
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
			{registerError && <Alert severity={'error'}>{registerError}</Alert>}
			{registerSuccess && (
				<Alert severity={'success'}>Registration Successful</Alert>
			)}
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
				onClick={async () => {
					setIsLoading(true);
					await register({
						username: registerCredentials.username,
						password: registerCredentials.password,
						email: registerCredentials.email,
					});
					setIsLoading(false);
				}}
				loading={isLoading}
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
