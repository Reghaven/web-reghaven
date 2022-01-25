import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

export function Footer() {
	return (
		<Box
			sx={{
				backgroundColor: '#606060',
				minHeight: 100,
				flexGrow: 1,
			}}
		>
			<Grid container spacing={12}>
				<Grid item xs={4}>
					<Typography>Links</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography>Info</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography>Social Media</Typography>
				</Grid>
			</Grid>
		</Box>
	);
}
