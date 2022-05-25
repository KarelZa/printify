import { styled } from '@mui/material';
import Box from '@mui/material/Box';

export const EmptyCartStyled = styled(Box)({
	height: 'calc(100vh - 4rem)',
	textAlign: 'center',

	'& .MuiButton-root': {
		color: '#1a1a1d',
		borderColor: '#1a1a1d',
		'&:hover': {
			backgroundColor: '#1a1a1d',
			color: `#f5f5f5`,
			borderColor: '#f5f5f5',
		},
	},
});
