import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyles from './styles/globalStyles.js';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from './hooks/index.jsx';
import { ThemeProvider } from 'styled-components';
import { standardTheme } from './styles/themes/standard.js';
import { Router } from './routes/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProvider>
        <GlobalStyles />
        <BrowserRouter>
        <Router />
        </BrowserRouter>
        <ToastContainer />
      </AppProvider>
    </ThemeProvider>
  </StrictMode>,
);
