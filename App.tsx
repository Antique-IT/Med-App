import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Pages/screens/HomeScreen';
import RequestScreen from './Pages/screens/RequestScreen';
import StatusScreen from './Pages/screens/StatusScreen';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export type RootStackParamList = {
  Home: undefined;
  Request: undefined;
  Status: undefined;
};

const styles = StyleSheet.create({
  dropdown: {
    position: 'relative',
    right: 10,
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#f5f5f5'
  },
  home: {
    left: 290,
    position: 'relative',
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#f0f8ff',
    flexDirection: 'row',
    alignItems: 'center'
  },
  homeT: {
    position: 'relative',
    color: '#2a4d69',
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 4
  },
  headstyle: {
    right: 25,
    color: '#2a4d69',
    fontWeight: 'bold',
    fontSize: 18
  },
  headerStyle: {
    backgroundColor: '#ffffff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4
  }
});

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: styles.headerStyle,
          headerTintColor: '#2a4d69',
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Antique Medical Society',
            headerTitleStyle: styles.headstyle,
            headerRight: () => (
              <TouchableOpacity 
                style={styles.dropdown}
                activeOpacity={0.7}
              >
                <MaterialCommunityIcons
                  name="dots-grid"
                  size={28}
                  color="#4b86b4"
                />
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <TouchableOpacity
                style={styles.home}
                onPress={() => navigation.navigate("Home")}
                activeOpacity={0.7}
              >
                <MaterialIcons name="home" size={18} color="#4b86b4" />
                <Text style={styles.homeT}>Home</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen 
          name="Status" 
          component={StatusScreen} 
          options={{ 
            title: 'Check Status',
            headerBackTitleVisible: false,
            headerBackImage: () => (
              <MaterialIcons 
                name="arrow-back" 
                size={24} 
                color="#4b86b4" 
                style={{ marginLeft: 10 }}
              />
            ),
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}