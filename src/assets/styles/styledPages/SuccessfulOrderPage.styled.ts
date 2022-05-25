import { styled } from '@mui/material';
import Box from '@mui/material/Box';

export const StyledSuccessPage = styled(Box)(({ theme }) => ({
	height: 'calc(100vh - 4rem)',
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	rowGap: '2rem',
	padding: '0 1rem',
	alignItems: 'center',
	backgroundColor: theme.palette.background.default,
	color: 'black',
	fontSize: '5rem',
	'& > h4': {
		fontSize: '1.4rem',
	},
	[theme.breakpoints.up('sm')]: {
		'& > svg': {
			width: '11rem',
			height: '11rem',
		},
		'& > h4': {
			fontSize: '2rem',
		},
		'& > h6': {
			fontSize: '1.5rem',
		},
	},
}));
