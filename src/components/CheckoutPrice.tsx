import React, { useContext } from 'react';
import { PrintifyContext } from '../store/PrintifyContext';
// Styling
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

const CheckoutPrice = () => {
	const { cartArr } = useContext(PrintifyContext);
	// calculation of the total price
	const totalPrice = cartArr.reduce(
		(prevValue, currentValue) => prevValue + currentValue.price * currentValue.quantity,
		0
	);
	const shippingFee = 4.99;

	return (
		<Grid
			container
			item
			direction={'column'}
			rowGap={2}
			component={Paper}
			p={3}
			xs={10}
			sm={7}
			md={4}
			elevation={4}
			sx={{ margin: { xs: '.5rem auto 1.5rem auto', md: '1rem 0 1.5rem auto' } }}
		>
			<Grid item={true} display='grid' gridTemplateColumns={'130px 1fr'} alignSelf='center'>
				<Typography variant='h6' fontWeight={400} component='span'>
					Subtotal:
				</Typography>
				<Typography variant='h6' fontWeight={400} component='span'>
					<b>
						{totalPrice.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
					</b>
				</Typography>
			</Grid>
			<Grid item display='grid' gridTemplateColumns={'140px 1fr'} alignSelf='center'>
				<Typography variant='h6' fontWeight={300} component='span'>
					Shipping fee:
				</Typography>
				<Typography variant='h6' fontWeight={300} component='span'>
					{shippingFee.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
				</Typography>
			</Grid>
			<Divider sx={{ width: '80%', margin: 'auto', backgroundColor: 'silver' }} />
			<Grid item display='grid' gridTemplateColumns={'130px 1fr'} alignSelf='center'>
				<Typography variant='h6' fontWeight={600} component='span'>
					Order Total:
				</Typography>
				<Typography variant='h6' fontWeight={600} component='span'>
					<b>
						{(totalPrice + shippingFee).toLocaleString('de-DE', {
							style: 'currency',
							currency: 'EUR',
						})}
					</b>
				</Typography>
			</Grid>
		</Grid>
	);
};

export default CheckoutPrice;
