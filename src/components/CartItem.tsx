import React, { useContext } from 'react';
import { PrintifyContext } from '../store/PrintifyContext';
import { ImageModel } from '../model/ImageModel';
// 3rd party
import { ImBin } from 'react-icons/im';
import { FaPlus, FaMinus } from 'react-icons/fa';
// Styling
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { StyledCartItem } from '../assets/styles/styledComponents/CartItem.styled';

type Props = {
	item: ImageModel;
};

const CartItem = ({ item }: Props) => {
	const { removeImgFromCart, increaseQty, decreaseQty } = useContext(PrintifyContext);
	const itemTotalPrice = Math.round((item.price * item.quantity + Number.EPSILON) * 100) / 100;

	return (
		<StyledCartItem>
			<Grid
				container
				mb={2}
				alignItems={'center'}
				textAlign='center'
				py={2}
				sx={{ userSelect: 'none' }}
				component='article'
			>
				<Grid item xs={5} textAlign='center'>
					<img src={`${item.url}?fit=crop&w=150&h=150&auto=format`} alt='' />
				</Grid>
				<Grid item xs={3} md={2} component='span'>
					<Typography variant='h5'>
						{item.price.toString().replace('.', ',')} €
					</Typography>
				</Grid>
				<Grid
					container
					item
					xs={3}
					md={2}
					justifyContent='center'
					alignItems={'center'}
					sx={{ gap: { xs: 1, md: 3 } }}
				>
					<Grid
						item
						onClick={() => decreaseQty(item)}
						sx={{ cursor: 'pointer' }}
						component='span'
					>
						<FaMinus size={17} fontWeight={'500'} />
					</Grid>
					<Grid item component='span'>
						<Typography variant='h4' fontWeight={500}>
							{item.quantity}
						</Typography>
					</Grid>
					<Grid
						item
						onClick={() => increaseQty(item)}
						sx={{ cursor: 'pointer' }}
						component='span'
					>
						<FaPlus size={17} />
					</Grid>
				</Grid>
				<Grid
					item
					xs={3}
					md={2}
					sx={{ display: { xs: 'none', md: 'block' } }}
					component='span'
				>
					<Typography variant='h5'>
						{itemTotalPrice.toString().replace('.', ',')} €
					</Typography>
				</Grid>
				<Grid item xs={'auto'} margin='auto' component='span'>
					<Typography variant='h6' mt={0.5} sx={{ cursor: 'pointer' }}>
						<ImBin onClick={() => removeImgFromCart(item)} color={'#f50101cf'} />
					</Typography>
				</Grid>
			</Grid>
		</StyledCartItem>
	);
};

export default CartItem;
