import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchLocation from "./src/screens/SearchLocation";
import WeatherDetails from "./src/screens/WeatherDetails";

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SearchLocation" />
        <Stack.Screen name="WeatherDetails" />
      </Stack.Navigator>
    </NavigationContainer>
  )
}