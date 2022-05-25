import React, { useContext } from 'react';
import { PrintifyContext } from '../store/PrintifyContext';
import Checkout from '../components/Checkout';
import EmptyCart from '../components/EmptyCart';
import CartItem from '../components/CartItem';
// Styling
import Container from '@mui/material/Container';

const Cartpage = () => {
	const { cartArr } = useContext(PrintifyContext);

	// map over cartArr to get display ordered items
	const cartElements = cartArr.map((item) => <CartItem key={item.id} item={item} />);

	return <Container component={'section'}>{cartArr.length === 0 ? <EmptyCart /> : <Checkout cartElements={cartElements} />}</Container>;
};

export default Cartpage;
