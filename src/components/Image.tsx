import React, { useContext } from 'react';
import { PrintifyContext } from '../store/PrintifyContext';
import { ImageModel } from '../model/ImageModel';
import useHover from '../hooks/useHover';
// 3rd party libs
import { BsFillCartPlusFill, BsFillCartDashFill } from 'react-icons/bs';
import {
	FaRegHeart,
	FaHeart,
	FaTwitterSquare,
	FaFacebookSquare,
	FaInstagramSquare,
} from 'react-icons/fa';
import { TiSocialDribbble, TiSocialInstagram, TiSocialTwitter } from 'react-icons/ti';
import { AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai';
import { StyledImageWrapper } from '../assets/styles/styledComponents/Image.styled';
import ImageListItem from '@mui/material/ImageListItem';
import useWindowSize from '../hooks/useWindowSize';
import { Fade, Grow, Zoom } from '@mui/material';

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
				{isHovered && (
					<Fade in={isHovered} style={{ transitionDelay: '80ms' }}>
						<div className='hoverin'>
							{<span className='title'>{img.name}</span>}
							<div className='icons'>
								<TiSocialInstagram size={29} className='icon instagram' />
								<TiSocialDribbble size={29} className='icon dribble' />
								<TiSocialTwitter size={29} className='icon twitter' />
							</div>
						</div>
					</Fade>
				)}
			</StyledImageWrapper>
		</ImageListItem>
	);
};

export default Image;
