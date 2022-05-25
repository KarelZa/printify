// 3rd party
import { Link as RouterLink } from 'react-router-dom';
// styling
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { EmptyCartStyled } from '../assets/styles/styledComponents/EmptyCart.styled';

const EmptyCart = () => {
	return (
		<EmptyCartStyled>
			<Typography variant='h3' gutterBottom pt={5} mb={5} component='h3'>
				Your Cart is empty
			</Typography>
			<Button component={RouterLink} to={'/printify'} variant='outlined' size='large'>
				<Typography variant='h4'>FILL IT</Typography>
			</Button>
		</EmptyCartStyled>
	);
};

export default EmptyCart;
