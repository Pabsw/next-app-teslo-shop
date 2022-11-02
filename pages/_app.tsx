import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react'
import { lightTheme } from '../themes';
import { AuthProvider, UiProvider } from '../context';
import { CartProvider } from '../context/cart/CartProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig 
      value={{
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
      <AuthProvider>
        <CartProvider>
          <UiProvider>
            <ThemeProvider theme={lightTheme}>
              <CssBaseline/>
              <Component {...pageProps}/>
            </ThemeProvider>
          </UiProvider>
        </CartProvider>
      </AuthProvider>
    </SWRConfig>
  ) 
}
