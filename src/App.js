import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components

// https://docs.google.com/spreadsheets/d/1OI43dJZlv8oFR7UFSlKvmi6XhVInossahW3zY8KQU7s/edit#gid=1110285012

// ----------------------------------------------------------------------

export default function App() {

  return (
    <HelmetProvider>
      <BrowserRouter basename='/assetSearch'>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
