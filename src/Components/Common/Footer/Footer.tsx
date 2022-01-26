import React from 'react';
import { Box, Grid, Stack, Typography, Link } from '@mui/material';

export function Footer() {
	return (
		<Box
			sx={{
				backgroundColor: 'primary.light',
				minHeight: 100,
				flexGrow: 1,
				padding: 2,
			}}
		>
			<Grid container spacing={12}>
				<Grid item xs={4}>
					<Stack spacing={2}>
						<Typography variant={'h6'}>Links</Typography>
						<Link href={'#'} color={'inherit'}>
							Impressum
						</Link>
					</Stack>
				</Grid>
				<Grid item xs={4}>
					<Stack spacing={2}>
						<Typography variant={'h6'}>About</Typography>
						<Typography variant={'body1'}>
							Made by CodingVampyre
						</Typography>
					</Stack>
				</Grid>
				<Grid item xs={4}>
					<Typography>Social Media</Typography>
				</Grid>
			</Grid>
		</Box>
	);
}
