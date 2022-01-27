import React from 'react';
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { Footer } from './Common/Footer/Footer';

const theme = createTheme({
	palette: {
		mode: 'light',
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box
				sx={{
					width: '100%',
					minHeight: '100vh',
				}}
			>
				<Routes>
					<Route path={'/'} element={<Home />} />
					<Route path={'/app'} />
					<Route path={'/imprint'} />
				</Routes>
			</Box>
			<Footer />
		</ThemeProvider>
	);
}

export default App;
