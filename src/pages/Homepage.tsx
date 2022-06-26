import React, { useContext } from 'react';
import { PrintifyContext } from '../store/PrintifyContext';
import Image from '../components/Image';
import ScrollTop from '../components/ScrollTop';
import { RiArrowUpSLine } from 'react-icons/ri';
import { Masonry } from '@mui/lab';
import { Fab } from '@mui/material';

export const Homepage = () => {
	const { imgArr } = useContext(PrintifyContext); // Pulled imgArr from Context
	const imgElements = imgArr.map((item) => <Image key={item.id} img={item} />);

	return (
		<>
			<Masonry
				columns={{ xs: 2, sm: 3, md: 3, lg: 4, xl: 5 }}
				spacing={1}
				sx={{
					margin: '0 auto',
					width: { xs: '100%' },
					padding: { md: '.3rem .4rem' },
				}}
				component={'section'}
			>
				{imgElements}
			</Masonry>
			<ScrollTop>
				<Fab
					sx={{
						backgroundColor: '#b60000db',
						':hover': {
							backgroundColor: '#b60000',
						},
					}}
					size='medium'
					aria-label='scroll back to top'
				>
					<RiArrowUpSLine size={37} color='white	' />
				</Fab>
			</ScrollTop>
		</>
	);
};
