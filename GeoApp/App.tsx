import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Beers from './src/screens/Beers';



const Stack = createNativeStackNavigator();

function App(): JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Beers" component={Beers} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;