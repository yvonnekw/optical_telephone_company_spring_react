
import React from 'react'
import './assets/global.css';
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Landing } from './pages/Landing';
import { Theme } from './features/register/utils/GlobalInterfaces';

//modify our theme and use it across the app
const theme: Theme = {
  colors: {
    blue: '#1DA1F2',
    black: '#14171a',
    darkGray: '#657786',
    gray: '#AAB8C2',
    lightGray: '#E1E8ED',
    white: '#F5F8FA',
    error: 'red'
  }
}

const GlobalStyle = createGlobalStyle `
*{
  font-family: 'IFM Flex Sans', sans-serif;
  font-weight: 500;
}
`
export const App = () => {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Landing></Landing>
      </ThemeProvider>
    )
}

