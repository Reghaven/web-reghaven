import * as React from 'react';
import { Typography, Paper, Stack, Box } from '@mui/material';
import { Character as LibCharacter } from 'lib-storyteller';
import { CharacterAttribute } from '../CharacterAttribute/CharacterAttribute';

export function Character(props: {
	character: LibCharacter;
}): React.ReactElement {
	return (
		<Paper elevation={2} sx={{ padding: 2 }}>
			<Typography variant={'h5'}>{props.character.name}</Typography>

			<Stack spacing={4}>
				<Box>
					<Typography variant={'h6'}>Attributes</Typography>
					<Stack direction={'row'} spacing={2}>
						{props.character.attributes.map((attribute) => (
							<CharacterAttribute
								key={attribute.attribute.uuid}
								characterAttribute={attribute}
							/>
						))}
					</Stack>
				</Box>

				<Box>
					<Typography variant={'h6'}>Belongings</Typography>
					{props.character.assetInstances.map((instance) => (
						<Box key={instance.asset.uuid} />
					))}
				</Box>
			</Stack>
		</Paper>
	);
}
