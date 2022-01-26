import React, { useState } from 'react';
import { Typography, Box, Paper, TextField, Button, Grid } from '@mui/material';

export function LoginBox() {
	enum Modes {
		LOGIN,
		REGISTER,
	}

	const [mode, setMode] = useState<Modes>(Modes.LOGIN);

	const Login = (
		<Grid
			container
			direction={'column'}
			alignItems={'center'}
			justifyContent={'center'}
		>
			<Typography variant={'h5'} sx={{ marginBottom: 2 }}>
				Login
			</Typography>
			<TextField
				variant={'outlined'}
				label={'Username'}
				sx={{ width: '100%', marginBottom: 2 }}
			/>
			<TextField
				type={'password'}
				variant={'outlined'}
				label={'Password'}
				sx={{ width: '100%', marginBottom: 2 }}
			/>
			<Button variant={'contained'} sx={{ marginBottom: 1 }}>
				Login
			</Button>
			<Button variant={'text'} onClick={() => setMode(Modes.REGISTER)}>
				new account
			</Button>
		</Grid>
	);

	const Register = (
		<Grid
			container
			direction={'column'}
			alignItems={'center'}
			justifyContent={'center'}
		>
			<Typography variant={'h5'} sx={{ marginBottom: 2 }}>
				Create new account
			</Typography>
			<TextField
				variant={'outlined'}
				label={'Username'}
				sx={{ width: '100%', marginBottom: 2 }}
			/>
			<TextField
				variant={'outlined'}
				label={'Email-Address'}
				sx={{ width: '100%', marginBottom: 2 }}
			/>
			<TextField
				type={'password'}
				variant={'outlined'}
				label={'Password'}
				sx={{ width: '100%', marginBottom: 2 }}
			/>
			<Button variant={'contained'} sx={{ marginBottom: 1 }}>
				Login
			</Button>
			<Button variant={'text'} onClick={() => setMode(Modes.LOGIN)}>
				already have an account
			</Button>
		</Grid>
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
