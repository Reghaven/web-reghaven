import React from 'react';
import { Grid, Typography, Box, Link, Stack } from '@mui/material';
import { LoginBox } from '../../Common/LoginBox/LoginBox';
import Iceland from './iceland.jpeg';

export default function Home() {
	return (
		<Box
			sx={{
				backgroundColor: 'grey',
				backgroundImage: `url(${Iceland})`,
				backgroundSize: 'cover',
			}}
		>
			<Box
				sx={{
					padding: 2,
				}}
			>
				<Stack
					direction={'row'}
					spacing={4}
					sx={{
						justifyContent: 'center',
					}}
				>
					<Link underline={'hover'} color={'white'} href={'#'}>
						What is Reghaven?
					</Link>
					<Link underline={'hover'} color={'white'} href={'#'}>
						Pricing
					</Link>
					<Link underline={'hover'} color={'white'} href={'#'}>
						Attribution
					</Link>
				</Stack>
			</Box>
			<Grid
				container
				spacing={2}
				sx={{
					margin: 0,
					width: '100%',
					alignItems: 'center',
					minHeight: '100vh',
				}}
			>
				<Grid item xs={6}>
					<Typography
						variant={'h1'}
						sx={{ color: 'white' }}
						align={'center'}
					>
						Reghaven
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<LoginBox />
				</Grid>
			</Grid>
		</Box>
	);
}
