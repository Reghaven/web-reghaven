import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Character } from './Character';
import { AssetType, UsableAsset } from 'lib-storyteller';

export default {
	component: Character,
} as ComponentMeta<typeof Character>;

export const Primary = () => (
	<Character
		character={{
			assetInstances: [
				{
					count: 1,
					asset: {
						uuid: 'a2dc1337-007a-46a5-b273-f786e60e8c89',
						name: 'Job: Café',
						type: AssetType.Normal,
					},
				},
				{
					count: 10,
					asset: {
						uuid: 'a2dc1337-007a-46a5-b273-f786e60e8c89',
						name: 'Cigarettes',
						type: AssetType.Usable,
					} as UsableAsset,
				},
			],
			attributes: [
				{
					attribute: {
						name: 'strength',
						uuid: 'bd23766b-3c3a-45f4-ba93-3034dc21056a',
					},
					pointsCollected: 10,
				},
				{
					attribute: {
						name: 'intelligence',
						uuid: '32cd4e89-af6b-4473-952f-e9d7d151c816',
					},
					pointsCollected: 12,
				},
			],
			equipment: {
				head: undefined,
				body: undefined,
				necklace: undefined,
				wrist: undefined,
				shoes: undefined,
			},
			map: {
				currentLocation: {
					uuid: 'f23eb139-bd44-464e-87b9-bd5ea99a007a',
					isVisibleOnMap: true,
					isUnlockedFromBeginning: true,
					characterCanLeaveAnytime: true,
					name: 'Bus To Reghaven',
				},
				unlockedLocations: [],
			},
			name: 'John Doe',
			uuid: 'f25465ad-9e14-47a5-9c65-75a096ccf704',
		}}
	/>
);
