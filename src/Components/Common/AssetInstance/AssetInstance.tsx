import React from 'react';
import { AssetInstance as LibAssetInstance, AssetType } from 'lib-storyteller';
import { Chip } from '@mui/material';

export function AssetInstance(props: {
	assetInstance: LibAssetInstance;
	onUse?: (assetInstanceUuid: string) => unknown;
}): React.ReactElement {
	return (
		<Chip
			variant={
				props.assetInstance.asset.type === AssetType.Usable
					? 'filled'
					: 'outlined'
			}
			label={
				(props.assetInstance.count > 1
					? props.assetInstance.count
					: '') +
				' ' +
				props.assetInstance.asset.name
			}
			clickable={props.assetInstance.asset.type === AssetType.Usable}
			onClick={() => {
				if (
					props.assetInstance.asset.type === AssetType.Usable &&
					props.onUse !== undefined
				) {
					props.onUse(props.assetInstance.asset.uuid);
				}
			}}
		/>
	);
}
