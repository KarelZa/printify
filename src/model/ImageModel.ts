class ImageModel {
	url: string; // Image url
	id: string; // Image id
	isFavorite: boolean; // Image being favorite
	price: number; // Image price
	quantity: number; // Image quantity
	name: string; // Image description

	// Defining attribs
	constructor(
		imageUrl: string,
		imageId: string,
		imageFavorite: boolean,
		imagePrice: number,
		imageQuantity: number,
		imageName: string
	) {
		this.url = imageUrl;
		this.id = imageId;
		this.isFavorite = imageFavorite;
		this.price = imagePrice;
		this.name = imageName;
		this.quantity = imageQuantity;
	}
}

export { ImageModel };
