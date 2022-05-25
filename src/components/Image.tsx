import React, { useContext } from 'react';
import { PrintifyContext } from '../store/PrintifyContext';
import { ImageModel } from '../model/ImageModel';
import useHover from '../hooks/useHover';
// 3rd party libs
import { BsFillCartPlusFill, BsFillCartDashFill } from 'react-icons/bs';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { StyledImageWrapper } from '../assets/styles/styledComponents/Image.styled';
import ImageListItem from '@mui/material/ImageListItem';
import useWindowSize from '../hooks/useWindowSize';

type Props = {
	img: ImageModel;
	className?: string;
};

export const Image = ({ img, className }: Props) => {
	const [isHovered, hoverRef] = useHover<HTMLDivElement>(); // pulled isHovered state & ref
	const { toggleFavorite, addImgIntoCart, removeImgFromCart, cartArr } =
		useContext(PrintifyContext);
	const size = useWindowSize();
	const breakpoint = 1200;

	function heartBadge() {
		if (img.isFavorite) {
			return <FaHeart className='favourite' onClick={() => toggleFavorite(img.id)} />;
		} else if (isHovered || size.width < breakpoint) {
			return (
				<FaRegHeart
					className='favourite'
					onClick={() => toggleFavorite(img.id)}
					style={{ WebkitTapHighlightColor: 'transparent' }}
				/>
			);
		}
	}

	// logic for cart badge
	function cartBadge() {
		const alreadyInCart = cartArr.some((item) => item.id === img.id);
		if (alreadyInCart) {
			return <BsFillCartDashFill className='cart' onClick={() => removeImgFromCart(img)} />;
		} else if (isHovered || size.width < breakpoint) {
			return (
				<BsFillCartPlusFill
					className='cart'
					onClick={() => addImgIntoCart(img)}
					style={{ WebkitTapHighlightColor: 'transparent' }}
				/>
			);
		}
	}

	return (
		<ImageListItem>
			<StyledImageWrapper ref={hoverRef}>
				<img
					src={`${img.url}?w=248&auto=format`}
					srcSet={`${img.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
					alt={`${img.name}`}
					loading='lazy'
				/>
				{heartBadge()}
				{cartBadge()}
				{isHovered && <span className='title'>{img.name}</span>}
			</StyledImageWrapper>
		</ImageListItem>
	);
};

export default Image;
