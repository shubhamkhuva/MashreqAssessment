import * as React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FC760C',
    accent: '#f1c40f',
    surface: '#FC760C',
  },
};

export {PaperProvider, theme};
