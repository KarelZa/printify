import { styled } from '@mui/material';
import Button from '@mui/material/Button';

export const StyledButton = styled(Button)(({ theme }) => ({
	color: '#1a1a1d',
	borderColor: '#1a1a1d',
	'&:hover': {
		backgroundColor: '#1a1a1d',
		color: `#f5f5f5`,
		borderColor: '#f5f5f5',
	},
	[theme.breakpoints.up('sm')]: {
		fontSize: '1.3rem',
	},
}));
