import React, { useContext, useState, useEffect } from 'react';
import { PrintifyContext } from '../store/PrintifyContext';
import CheckoutPrice from './CheckoutPrice';
import CheckoutLabels from './CheckoutLabels';
// 3rd party
import { useNavigate } from 'react-router-dom';
// Styling
import { StyledButton } from '../assets/styles/styledComponents/Button.styled';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

type Props = {
	cartElements: JSX.Element[];
};

const Checkout = (props: Props) => {
	const [isProcessing, setIsProcessing] = useState<boolean>(false);
	const { emptyCart, setIsOrderCompleted } = useContext(PrintifyContext);
	const navigate = useNavigate();

	// Redirect user after 200ms
	useEffect(() => {
		let timeout: NodeJS.Timeout;
		if (isProcessing) {
			timeout = setTimeout(() => {
				emptyCart();
				navigate('/printify/cart/successfulOrder', { replace: true });
			}, 200);
		}
		return () => clearTimeout(timeout);
	}, [isProcessing, emptyCart, navigate]);

	const orderHandler = () => {
		setIsProcessing(true);
		setIsOrderCompleted(true);
	};

	return (
		<Grid container direction={'column'}>
			<Grid item>
				<Typography
					component='h2'
					variant='h2'
					my={3}
					fontWeight={600}
					sx={{ textAlign: 'center' }}
				>
					Check Out
				</Typography>
			</Grid>
			<CheckoutLabels />
			<Grid item component='section'>
				{props.cartElements}
			</Grid>
			<Grid item component='section'>
				<CheckoutPrice />
			</Grid>
			<Grid
				item
				container
				gap={2}
				mb={5}
				sx={{ justifyContent: { xs: 'center', md: 'flex-end' } }}
			>
				<StyledButton variant='outlined' size='large' onClick={emptyCart}>
					Clear cart
				</StyledButton>
				<StyledButton variant='outlined' size='large' onClick={orderHandler}>
					Place Order
				</StyledButton>
			</Grid>
		</Grid>
	);
};

export default Checkout;
