import 'react-native-gesture-handler';
import React from 'react';

import Home from './Home';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeScreenStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        // options={{title: 'Home', headerStyle: {backgroundColor: '#222831'}}}
        component={Home}
      />
      {/* <Stack.Screen name="Details" options={({ route }) => ({ title: route.params.movie.title })} component={Details} /> */}
    </Stack.Navigator>
  );
}

// export default function App() {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator>
//                 <Tab.Screen name="Home" component={HomeScreenStackNavigator} />
//             </Tab.Navigator>
//         </NavigationContainer>
//     );
// }

export default function App() {
  return (
    <NavigationContainer>{HomeScreenStackNavigator()}</NavigationContainer>
  );
}
