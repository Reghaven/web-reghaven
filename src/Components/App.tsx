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
		</ThemeProvider>
	);
}

export default App;
