import React from 'react';
import { CharacterAttribute } from './CharacterAttribute';

export default {
	component: CharacterAttribute,
};

export const Primary = () => (
	<CharacterAttribute
		characterAttribute={{
			attribute: {
				name: 'Strength',
				uuid: '0015afc5-4f75-426b-b405-ccbe3aa03346',
			},
			pointsCollected: 10,
		}}
	/>
);
