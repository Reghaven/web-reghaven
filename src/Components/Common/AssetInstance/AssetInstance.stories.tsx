import React from 'react';
import { AssetType, UsableAsset } from 'lib-storyteller';
import { AssetInstance } from './AssetInstance';

export default {
	component: AssetInstance,
};

export const Normal = () => (
	<AssetInstance
		assetInstance={{
			count: 1,
			asset: {
				uuid: '7df885a3-3f06-46e2-8270-96a5ebfcaa74',
				name: 'Job: Café',
				type: AssetType.Normal,
			},
		}}
	/>
);

export const Usable = () => (
	<AssetInstance
		assetInstance={{
			asset: {
				uuid: 'd1f90c22-0853-4b45-b140-8f4a2893225f',
				name: 'Cigarettes',
				type: AssetType.Usable,
			} as UsableAsset,
			count: 10,
		}}
	/>
);
