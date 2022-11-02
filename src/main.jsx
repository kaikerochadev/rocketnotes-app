import React from 'react'
import ReactDOM from 'react-dom/client'

import {Details} from './pages/Details'
import { Home } from './pages/Home'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Profile } from './pages/Profile'
import { New } from './pages/New'

import {Routes} from "./routes"


import {ThemeProvider} from "styled-components"

import { AuthProvider } from './hooks/auth'
import GlobalStyles from "./styles/global"

import theme from "./styles/theme"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
