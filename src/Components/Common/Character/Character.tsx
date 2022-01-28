import * as React from 'react';
import { Typography, Paper } from '@mui/material';
import { Character as LibCharacter } from 'lib-storyteller';

export function Character(props: {
	character: LibCharacter;
}): React.ReactElement {
	return (
		<Paper elevation={2} sx={{ padding: 2 }}>
			<Typography variant={'h5'}>{props.character.name}</Typography>
			<Typography variant={'h6'}>Stats</Typography>
			{props.character.attributes.map((attribute) => (
				<Typography key={attribute.attribute.uuid}>
					{attribute.attribute.name}
				</Typography>
			))}
		</Paper>
	);
}
