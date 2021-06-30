import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    highlight: '#FFBA08',
    dark: {
      black: '#000',
      heading: '#47585B',
      text: '#47585B',
      info: '#999999'
    },
    light: {
      white: '#fff',
      heading: '#F5F8FA',
      text: '#F5F8FA',
      info: '#DADADA'
    },
  },
  fonts: {
    heading: 'Poppins ',
    body: 'Poppins',
    card: 'Barlow',
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'light.white'
      }
    }
  }
});