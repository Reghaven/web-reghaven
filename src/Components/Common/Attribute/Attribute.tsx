import React from 'react';
import { Chip } from '@mui/material';
import { Attribute as LibAttribute } from 'lib-storyteller';

export function Attribute(props: { attribute: LibAttribute }) {
	return <Chip label={props.attribute.name} />;
}
