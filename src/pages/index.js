import 'react-native-gesture-handler';
import React from 'react';

import Home from './Home';
import Saved from './Saved';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
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

function SavedScreenStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Saved"
        component={Saved}
      />
    </Stack.Navigator>
  );
}

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                    screenOptions={({ route }) => ({
                      tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
            
                        if (route.name === 'Home') {
                          iconName = 'translate';
                        } else if (route.name === 'Saved') {
                          iconName = focused ? 'star' : 'star-outline';
                        }
            
                        return <Icon name={iconName} size={size} color={color} />;
                      },
                    })}
                    tabBarOptions={{
                      activeTintColor: '#fff',
                      inactiveTintColor: 'gray',
                      showLabel: false,
                      style: {
                        backgroundColor: '#000',
                      }
                    }}
            >
                <Tab.Screen name="Home" component={HomeScreenStackNavigator} />
                <Tab.Screen name="Saved" component={SavedScreenStackNavigator} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
