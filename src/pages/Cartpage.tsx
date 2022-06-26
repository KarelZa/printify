import React, { useContext } from 'react';
import { PrintifyContext } from '../store/PrintifyContext';
import Checkout from '../components/Checkout';
import EmptyCart from '../components/EmptyCart';
import CartItem from '../components/CartItem';
// Styling
import Container from '@mui/material/Container';

const Cartpage = () => {
	const { cartArr } = useContext(PrintifyContext);
	// Mapping cart items
	const cartElements = cartArr.map((item) => <CartItem key={item.id} item={item} />);

	return (
		<Container component={'section'}>
			{cartArr.length === 0 ? <EmptyCart /> : <Checkout cartElements={cartElements} />}
		</Container>
	);
};

export default Cartpage;
