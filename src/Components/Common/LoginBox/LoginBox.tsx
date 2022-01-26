import React from 'react';
import { Typography, Box, Paper, TextField } from '@mui/material';

export function LoginBox() {
	return (
		<Box
			sx={{
				width: 400,
			}}
		>
			<Paper
				elevation={1}
				sx={{
					padding: 1,
				}}
			>
				<Typography variant={'h5'}>Login</Typography>
				<TextField variant={'outlined'} label={'Username'} />
			</Paper>
		</Box>
	);
}
