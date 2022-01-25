import React from 'react';
import {
	AppBar,
	Button,
	createTheme,
	CssBaseline,
	ThemeProvider,
	Toolbar,
	Typography,
} from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { Footer } from './Common/Footer/Footer';

const theme = createTheme({
	palette: {
		mode: 'dark',
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppBar position={'static'}>
				<Toolbar>
					<Typography component={'div'} sx={{ flexGrow: 1 }}>
						Reghaven
					</Typography>
					<Button>Login</Button>
				</Toolbar>
			</AppBar>
			<Routes>
				<Route path={'/'} element={<Home />} />
				<Route path={'/app'} />
				<Route path={'/imprint'} />
			</Routes>
			<Footer />
		</ThemeProvider>
	);
}

export default App;
