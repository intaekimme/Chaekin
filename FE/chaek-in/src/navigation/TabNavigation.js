import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecomNavigation from './RecomNavigation';
import MeetingScreen from '../screens/MeetingScreen';
import HomeNavigation from './HomeNavigation';
import ReadScreen from '../screens/ReadScreen';
import RecordNavigation from './RecordNavigation';
// import LoginScreen from '../screens/signin/LoginScreen';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    // <NavigationContainer>
    <Tab.Navigator initialRouteName='Library'>
      <Tab.Screen name='Library' component={HomeNavigation} options={{ headerShown: false }} />
      <Tab.Screen name='Recommend' component={RecomNavigation} />
      <Tab.Screen name='Read' component={ReadScreen} />
      <Tab.Screen name='Meeting' component={MeetingScreen} />
      <Tab.Screen name='Record' component={RecordNavigation} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}

export default TabNavigation;
