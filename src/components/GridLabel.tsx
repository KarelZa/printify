import React from 'react';
// styling
import { SxProps, Theme } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

type Props = {
	fontWeight?: number;
	variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline' | 'inherit';
	text?: string;
	item?: boolean;
	xs?: number;
	md?: number;
	sx?: SxProps<Theme>;
};

const GridLabel = (props: Props) => {
	return (
		<Grid item xs={props.xs} md={props.md} sx={props.sx} component='li'>
			<Typography fontWeight={props.fontWeight} variant={props.variant}>
				{props.text}
			</Typography>
		</Grid>
	);
};

export default GridLabel;
