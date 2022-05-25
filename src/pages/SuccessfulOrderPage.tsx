import React, { useEffect } from 'react';
// 3rd party
import { BsFillBagCheckFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
// Own Styles
import { StyledSuccessPage } from '../assets/styles/styledPages/SuccessfulOrderPage.styled';

const SuccessfulOrderPage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const timeout = setTimeout(() => {
			navigate('/printify', { replace: true });
		}, 3700);
		return () => clearTimeout(timeout); // clean-up for component unmount
	}, [navigate]);

	return (
		<StyledSuccessPage>
			<BsFillBagCheckFill color='#139c3cee' size={'7.5rem'} />
			<Typography variant='h4' color='black' component={'h4'}>
				Your order has been completed !
			</Typography>
			<Typography variant='body1' color='black' component={'h6'}>
				Thank you for shopping with us ❤️
			</Typography>
		</StyledSuccessPage>
	);
};

export default SuccessfulOrderPage;
