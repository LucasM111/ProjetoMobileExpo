import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Countries from "./src/screens/Countries";


const Stack = createNativeStackNavigator();

const App = () => {
    return (


        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Countries' component={Countries} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;