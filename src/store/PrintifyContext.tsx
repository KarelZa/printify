import React, { useState, useEffect } from 'react';
import { ImageModel as Image } from '../model/ImageModel';

type Props = { children: React.ReactNode };

// Definition of Context object
interface PrintifyContextObj {
	imgArr: Image[];
	cartArr: Image[];
	isOrderCompleted: boolean;
	toggleFavorite: (id: string) => void;
	addImgIntoCart: (img: Image) => void;
	removeImgFromCart: (img: Image) => void;
	emptyCart: () => void;
	setIsOrderCompleted: (isOrderCompleted: boolean) => void;
	increaseQty: (img: Image) => void;
	decreaseQty: (img: Image) => void;
}

// CreatingContext -> setting Consumer default values
export const PrintifyContext = React.createContext<PrintifyContextObj>({
	imgArr: [],
	cartArr: [],
	isOrderCompleted: false,
	toggleFavorite: (id: string) => {},
	addImgIntoCart: (img: Image) => {},
	removeImgFromCart: (img: Image) => {},
	emptyCart: () => {},
	setIsOrderCompleted: () => {},
	increaseQty: (img: Image) => {},
	decreaseQty: (img: Image) => {},
});

const PrintifyContextProvider = (props: Props) => {
	const [imgArr, setImgArr] = useState<Image[]>(() => {
		return JSON.parse(localStorage.getItem('imgArr')!) || [];
	}); // img data
	const [cartItemsArr, setCartItemsArr] = useState<Image[]>(() => {
		return JSON.parse(localStorage.getItem('cartItems')!) || [];
	}); // cart items
	const [isOrderCompleted, setIsOrderCompleted] = useState<boolean>(false);

	// Pulling data
	useEffect(() => {
		if (imgArr.length === 0) {
			fetch(`https://raw.githubusercontent.com/KarelZa/projects-data/main/imgData.json`)
				.then((response) => response.json())
				.then((actualData) => setImgArr(actualData));
		}
	}, [imgArr.length]);
	// Favourite localstorage
	useEffect(() => {
		localStorage.setItem('imgArr', JSON.stringify(imgArr));
	}, [imgArr]);
	// Cart Items localstorage
	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItemsArr));
	}, [cartItemsArr]);

	// Favourite functionality
	// id ==> currect image.id
	function toggleFavorite(id: string) {
		const newImgArr = imgArr.map((prevArr) => {
			if (prevArr.id === id) {
				console.log(`Changed index ${prevArr.id}`);
				console.log(!prevArr.isFavorite);
				return { ...prevArr, isFavorite: !prevArr.isFavorite };
			} else {
				return { ...prevArr };
			}
		});
		setImgArr(newImgArr);
	}

	// Adds into Cart functionality
	// img ==> current img object
	function addImgIntoCart(img: Image) {
		setCartItemsArr((prevCartState) => [...prevCartState, img]);
	}

	// Removes from Cart functionality
	// img ==> current img object
	function removeImgFromCart(img: Image) {
		const updatedCart = cartItemsArr.filter((item) => item.id !== img.id);
		setCartItemsArr(updatedCart);
	}
	// Removes all items item from cart
	function emptyCart() {
		setCartItemsArr([]);
	}
	// Increase Qty of an image in the cart
	// img ==> current img object
	function increaseQty(img: Image) {
		const exist = cartItemsArr.find((item) => item.id === img.id);
		if (exist && exist.quantity < 9) {
			setCartItemsArr((prevCartItems) =>
				prevCartItems.map((item) =>
					item.id === img.id ? { ...exist, quantity: exist.quantity + 1 } : item
				)
			);
		}
	}
	// Decrease Qty of an image in the cart
	// img ==> current img object
	function decreaseQty(img: Image) {
		const exist = cartItemsArr.find((item) => item.id === img.id);
		if (exist && exist.quantity > 1) {
			setCartItemsArr((prevCartItems) =>
				prevCartItems.map((item) =>
					item.id === img.id ? { ...exist, quantity: exist.quantity - 1 } : item
				)
			);
		}
	}

	const contextValue = {
		imgArr: imgArr,
		cartArr: cartItemsArr,
		isOrderCompleted,
		toggleFavorite,
		addImgIntoCart,
		removeImgFromCart,
		emptyCart,
		setIsOrderCompleted,
		increaseQty,
		decreaseQty,
	};

	return (
		<PrintifyContext.Provider value={contextValue}>{props.children}</PrintifyContext.Provider>
	);
};

export default PrintifyContextProvider;
