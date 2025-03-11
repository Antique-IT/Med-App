import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Pages/screens/HomeScreen';
import RequestScreen from './Pages/screens/RequestScreen';
import StatusScreen from './Pages/screens/StatusScreen';
import APPC from './Appcarousel';

export type RootStackParamList = {
  Home: undefined;
  Request: undefined;
  Status: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'BarangayDocs' }} />
        <Stack.Screen name="Request" component={RequestScreen} options={{ title: 'Request Documents' }} />
        <Stack.Screen name="Status" component={StatusScreen} options={{ title: 'Check Status' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
