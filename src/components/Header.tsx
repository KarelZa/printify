import React, { useContext } from 'react';
import { PrintifyContext } from '../store/PrintifyContext';
// 3rd party
import { RiShoppingCartLine, RiShoppingCartFill } from 'react-icons/ri';
import { Link } from 'react-router-dom'; // React Router
// Styled components
import { StyledHeader } from '../assets/styles/styledComponents/Header.styled';

export const Header = () => {
	const { cartArr } = useContext(PrintifyContext);
	return (
		<StyledHeader id='back-to-top-anchor'>
			<Link to='/'>
				<h2>
					P<span>rintif</span>y
				</h2>
			</Link>
			<Link to='/printify/cart'>
				{cartArr.length > 0 ? (
					<RiShoppingCartFill className='shopping-cart' />
				) : (
					<RiShoppingCartLine className='shopping-cart' />
				)}
			</Link>
		</StyledHeader>
	);
};
