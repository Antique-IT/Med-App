import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Pages/screens/HomeScreen';
import RequestScreen from './Pages/screens/RequestScreen';
import StatusScreen from './Pages/screens/StatusScreen';
import { Touchable, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, Button, StyleSheet, Image, Dimensions, } from 'react-native';
import Results from './Pages/screens/Results';


export type RootStackParamList = {
  Home: undefined;
  Request: undefined;
  Status: undefined;
};

const styles = StyleSheet.create({
  dropdown: {
    position: 'relative',
    right: 10
  },

  home: {
    left: 290,
    position: 'relative',
    padding: 5,
    borderRadius: 50,

  },

  homeT: {
    position: 'relative',
    color: '#000000',
    fontWeight: 'bold'
  },

  headstyle: {
    right: 25,
  }

});

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home"
          component={HomeScreen}

          options={() => ({
            title: 'Search',
            headerTitleStyle: styles.headstyle,
            headerRight: () => (
              <TouchableOpacity><MaterialCommunityIcons
                style={styles.dropdown}
                name="dots-grid" size={35}
                color="black" />
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <TouchableOpacity style={styles.home}><Text style={styles.homeT}>Home</Text>

              </TouchableOpacity>
            ),
          })

          }
        />
        {/* <Stack.Screen name="Request" component={RequestScreen} options={{ title: 'Request Documents' }} /> */}
        <Stack.Screen name="Status" component={StatusScreen} options={{ title: 'Check Status' }} />
      </Stack.Navigator>
    </NavigationContainer>


  );
}
