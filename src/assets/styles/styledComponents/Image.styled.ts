// import styled from 'styled-components';
import { Box, styled } from '@mui/material';

export const StyledImageWrapper = styled(Box)(({ theme }) => ({
	position: 'relative',
	width: '100%',
	display: 'flex',
	justifyContent: 'center',

	img: {
		width: '100%',
		height: '100%',
		objectFit: 'cover',
		backgroundColor: 'rgba(171, 171, 171, 0.266)',
	},
	'.cart': {
		color: '#F1F2EE',
		fontSize: '1.5rem',
		position: 'absolute',
		top: '6px',
		right: '6px',
		cursor: 'pointer',
		WebkitTapHighlightColor: 'transparent',
	},
	'.favourite': {
		color: '#f50101cf',
		fontSize: '1.5rem',
		position: ' absolute',
		top: '6px',
		left: '6px',
		cursor: 'pointer',
		WebkitTapHighlightColor: 'transparent',
	},
	[theme.breakpoints.up('lg')]: {
		'&:hover::before': {
			position: 'absolute',
			top: '0',
			width: '100%',
			height: '100%',
			background: 'rgba(0, 0, 0, 0.5)',
			content: "''",
		},
		'.cart': {
			fontSize: '1.8rem',
			top: '8px',
			right: '10px',
		},
		'.favourite': {
			fontSize: '1.8rem',
			top: '8px',
			left: '10px',
		},
		'.title': {
			position: 'absolute',
			fontSize: '2rem',
			fontWeight: '500',
			letterSpacing: '0.05rem',
			alignSelf: 'center',
			justifySelf: 'center',
			margin: '0 auto',
			color: '#FFF',
		},
	},
}));
