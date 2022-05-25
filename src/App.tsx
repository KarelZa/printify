import React, { useContext } from 'react';
import './App.css';
import { PrintifyContext } from './store/PrintifyContext';
import { Header } from './components/Header';
// Pages
import { Homepage } from './pages/Homepage';
import Cartpage from './pages/Cartpage';
import SuccessfulOrderPage from './pages/SuccessfulOrderPage';
// 3rd party
// Router
import { Routes, Route, Navigate } from 'react-router-dom';
// StyledComponents
import { ThemeProvider as TPstyledcomp } from 'styled-components';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import { basicTheme } from './assets/styles/themes/themeBasic';
// MUI Theme
import { ThemeProvider as TPmui, createTheme, responsiveFontSizes } from '@mui/material';
let theme = createTheme();
theme = responsiveFontSizes(theme);

const App = () => {
	const { isOrderCompleted } = useContext(PrintifyContext);
	return (
		<TPmui theme={theme}>
			<TPstyledcomp theme={basicTheme}>
				<>
					<GlobalStyle />
					<Header />
					<Routes>
						<Route path={'/printify'} element={<Homepage />} />
						<Route path={'/printify/cart'} element={<Cartpage />} />
						<Route
							path='/printify/cart/successfulOrder'
							element={
								isOrderCompleted ? (
									<SuccessfulOrderPage />
								) : (
									<Navigate to='https://karelza.github.io/printify/' />
								)
							}
						/>
					</Routes>
				</>
			</TPstyledcomp>
		</TPmui>
	);
};

export default App;
