// Original module declarations
import 'styled-components';

// Extend
declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			primary: string;
			secondary: string;
			background: string;
			text: string;
		};
	}
}
