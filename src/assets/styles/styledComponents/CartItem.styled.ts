import { styled } from '@mui/material';
import Paper from '@mui/material/Paper';

export const StyledCartItem = styled(Paper)(({ theme }) => ({
	color: '#1a1a1d',
	borderColor: '#1a1a1d',
	img: {
		maxWidth: '100px',
		height: '100px',
		borderRadius: '8px',
		padding: '0',
		margin: '0',
		'&:hover': {},
	},
	[theme.breakpoints.up('sm')]: {
		img: { maxWidth: '160px', height: '160px' },
	},
}));
