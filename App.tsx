import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Pages/screens/HomeScreen';
import RequestScreen from './Pages/screens/RequestScreen';
import StatusScreen from './Pages/screens/StatusScreen';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { View, Text, StyleSheet, Platform } from 'react-native';

export type RootStackParamList = {
  Home: undefined;
  Request: undefined;
  Status: undefined;
  FindDoctor: undefined;
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  headerLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    maxWidth: '60%', // Limit width to prevent overlap
  },
  headerButtonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10, // Reduced padding
    borderRadius: 20,
    marginRight: 6, // Reduced margin
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  homeButton: {
    backgroundColor: '#e6f2ff',
  },
  findDoctorButton: {
    backgroundColor: '#d4edda',
  },
  headerButtonText: {
    color: '#2a4d69',
    fontWeight: '600',
    fontSize: 12, // Smaller font size
    marginLeft: 4, // Reduced margin
  },
  headerTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: -1, // Ensure title stays behind buttons
  },
  headerTitle: {
    color: '#2a4d69',
    fontWeight: 'bold',
    fontSize: 18, // Adjusted size
    textAlign: 'center',
    maxWidth: '60%', // Prevent title from being too wide
  },
  headerStyle: {
    backgroundColor: '#ffffff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    height:100, // Platform-specific height
  },
  menuButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  backButton: {
    marginLeft: 10,
    padding: 6,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: '#2a4d69',
    fontWeight: 'bold',
    fontSize: 16, // Adjusted size
    marginLeft: 8,
    textAlign: 'center',
  },
  logoIcon: {
    color: '#4b86b4',
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
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerTitle: () => (
              <View style={styles.headerTitleContainer}>
                <View style={styles.logoContainer}>
                  <FontAwesome name="medkit" size={20} style={styles.logoIcon} />
                  <Text style={styles.logoText}>Antique Medical Society</Text>
                </View>
              </View>
            ),
            headerLeft: () => (
              <View style={styles.headerLeftContainer}>
                <View style={styles.headerButtonGroup}>
                  <TouchableOpacity
                    style={[styles.headerButton, styles.homeButton]}
                    onPress={() => navigation.navigate("Home")}
                    activeOpacity={0.7}
                  >
                    <MaterialIcons name="home" size={18} color="#4b86b4" />
                    <Text style={styles.headerButtonText}>Home</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.headerButton, styles.findDoctorButton]}
                    onPress={() => navigation.navigate("FindDoctor")}
                    activeOpacity={0.7}
                  >
                    <FontAwesome name="user-md" size={16} color="#28a745" />
                    <Text style={styles.headerButtonText}>Find Doctor</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ),
            headerRight: () => (
              <TouchableOpacity 
                style={styles.menuButton}
                activeOpacity={0.7}
              >
                <MaterialCommunityIcons
                  name="dots-grid"
                  size={22}
                  color="#4b86b4"
                />
              </TouchableOpacity>
            ),
            headerTitleContainerStyle: {
              left: 0,
              right: 0,
            },
          })}
        />
        <Stack.Screen 
          name="Request" 
          component={RequestScreen} 
          options={{ 
            title: 'Request Documents',
            headerBackTitleVisible: false,
            headerTitleStyle: styles.headerTitle,
            headerBackImage: () => (
              <TouchableOpacity style={styles.backButton}>
                <MaterialIcons 
                  name="arrow-back" 
                  size={24} 
                  color="#4b86b4" 
                />
              </TouchableOpacity>
            ),
          }} 
        />
        <Stack.Screen 
          name="Status" 
          component={StatusScreen} 
          options={{ 
            title: 'Check Status',
            headerBackTitleVisible: false,
            headerTitleStyle: styles.headerTitle,
            headerBackImage: () => (
              <TouchableOpacity style={styles.backButton}>
                <MaterialIcons 
                  name="arrow-back" 
                  size={24} 
                  color="#4b86b4" 
                />
              </TouchableOpacity>
            ),
          }} 
        />
        <Stack.Screen 
          name="FindDoctor" 
          component={HomeScreen}
          options={{ 
            title: 'Find a Doctor',
            headerBackTitleVisible: false,
            headerTitleStyle: styles.headerTitle,
            headerBackImage: () => (
              <TouchableOpacity style={styles.backButton}>
                <MaterialIcons 
                  name="arrow-back" 
                  size={24} 
                  color="#4b86b4" 
                />
              </TouchableOpacity>
            ),
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}