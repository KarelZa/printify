import GridLabel from './GridLabel';
// styling
import Grid from '@mui/material/Grid';

const CheckoutLabels = () => {
	return (
		<Grid
			mb={2}
			item
			container
			sx={{ display: { xs: 'none', sm: 'inline-list-item' }, textAlign: 'center' }}
			component='ul'
		>
			<GridLabel item={true} xs={5} fontWeight={100} variant='h6' text='Item' />
			<GridLabel item={true} xs={3} md={2} fontWeight={100} variant='h6' text='Price' />
			<GridLabel item={true} xs={3} md={2} fontWeight={100} variant='h6' text='Quantity' />
			<GridLabel
				item={true} // eslint-disable-next-line
				xs={3}
				md={2}
				fontWeight={100}
				variant='h6'
				sx={{ display: { xs: 'none', md: 'block' } }}
				text='Subtotal'
			/>
			<GridLabel item></GridLabel>
		</Grid>
	);
};

export default CheckoutLabels;
