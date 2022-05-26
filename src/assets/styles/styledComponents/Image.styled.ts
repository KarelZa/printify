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
		'.hoverin': {
			display: 'flex',
			flexDirection: 'column',
			height: '7rem',
			justifyContent: 'center',
			alignItems: 'center',
			fontFamily: 'Koulen',
			position: 'absolute',
			fontSize: '2.4rem',
			fontWeight: '500',
			letterSpacing: '0.08rem',
			alignSelf: 'center',
			justifySelf: 'center',
			margin: '0 auto',
			color: '#FFF',
		},
		'.title': {
			fontFamily: 'Koulen',
			fontSize: '2.6rem',
			fontWeight: '500',
			letterSpacing: '0.08rem',
			margin: 'auto auto',
			color: '#FFF',
		},
		'.hoverin > .icons': {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-around',
			gap: '.5rem',
			transform: 'scale(1)',
		},
		'.icons > .icon': {
			transition: 'all .2s ease-in-out',
			cursor: 'pointer',
		},
		'.twitter:hover': {
			color: '#00acee',
			transform: 'scale(1.12)',
		},
		'.dribble:hover': {
			color: 'red',
			transform: 'scale(1.12)',
		},
		'.instagram:hover': {
			color: '#fb3958',
			transform: 'scale(1.12)',
		},
	},
}));
