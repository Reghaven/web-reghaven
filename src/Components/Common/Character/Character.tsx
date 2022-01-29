import * as React from 'react';
import { Typography, Paper, Stack, Box } from '@mui/material';
import { Character as LibCharacter } from 'lib-storyteller';
import { CharacterAttribute } from '../CharacterAttribute/CharacterAttribute';
import { AssetInstance } from '../AssetInstance/AssetInstance';

export function Character(props: {
	character: LibCharacter;
}): React.ReactElement {
	return (
		<Paper sx={{ padding: 4 }} variant={'outlined'}>
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
					<Stack direction={'row'} spacing={1}>
						{props.character.assetInstances.map((instance) => (
							<AssetInstance
								key={instance.asset.uuid}
								assetInstance={instance}
							/>
						))}
					</Stack>
				</Box>
			</Stack>
		</Paper>
	);
}
