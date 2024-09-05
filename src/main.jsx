import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import theme from './theme.jsx'
import { ChakraProvider } from '@chakra-ui/react';

createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
)
