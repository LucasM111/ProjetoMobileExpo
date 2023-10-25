import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider, Button, MD3LightTheme as DefaulTheme } from 'react-native-paper';
import UsersList from './src/page/UsersList';
import { colors } from './src/styles/colors';



const theme = {
  ...DefaulTheme,
  myOwnProperty: true,
  colors: {
    primary: colors.primary,
    secundary: colors.secundary,
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


