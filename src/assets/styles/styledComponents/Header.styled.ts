import styled from 'styled-components';

export const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0rem 1rem;
	background-color: ${(props) => props.theme.colors.primary};
	height: 4rem;

	& > a {
		text-decoration: none;
	}

	h2 {
		font-family: 'Koulen';
		font-size: 2rem;
		letter-spacing: 0.25rem;
		color: ${(props) => props.theme.colors.secondary};
		display: flex;
		align-items: center;
	}

	h2 > span {
		font-size: 1.5rem;
	}

	.shopping-cart {
		font-size: 2rem;
		color: ${(props) => props.theme.colors.secondary};
	}

	@media (min-width: 900px) {
		padding: 0rem 3.2rem;
		height: 6rem;

		h2 {
			font-family: 'Koulen';
			font-size: 3rem;
		}

		h2 > span {
			font-size: 2.5rem;
		}

		.shopping-cart {
			font-size: 3rem;
		}
	} ;
`;
