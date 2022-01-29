import React from 'react';
import { CharacterAttribute as LibCharacterAttribute } from 'lib-storyteller';
import { Paper, Typography } from '@mui/material';

export function CharacterAttribute(props: {
	characterAttribute: LibCharacterAttribute;
}): React.ReactElement {
	return (
		<Paper
			variant={'outlined'}
			elevation={1}
			sx={{
				height: 80,
				width: 80,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				alignContent: 'center',
				justifyContent: 'center',
			}}
		>
			<Typography variant={'h4'} align={'center'}>
				{props.characterAttribute.pointsCollected}
			</Typography>
			<Typography variant={'body2'} align={'center'}>
				{props.characterAttribute.attribute.name}
			</Typography>
		</Paper>
	);
}
