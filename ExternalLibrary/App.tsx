import React from 'react';
import {PaperProvider, MD3LightTheme as DefaultTheme} from 'react-native-paper';
import {colors} from './src/styles/colors';
import UsersList from './src/pages/UsersList';

const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
  colors: {
    primary: colors.primary,
    secondary: colors.secondary,
    surfaceVariant: colors.surfaceVariant,
  },
};

function App(): JSX.Element {
  return (
    <PaperProvider theme={theme}>
      <UsersList />
    </PaperProvider>
  );
}

export default App;
