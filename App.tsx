import React from 'react';
import {ThemeProvider} from 'styled-components';
import { Signin } from './src/pages/Signin';
import {theme} from './src/global/styles/theme'

import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Signin />
    </ThemeProvider>
    
  );
}
