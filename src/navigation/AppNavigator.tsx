import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PatientsScreen } from '../screens/PatientsScreen';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../utils/colors';
import { FONTS } from '../utils/font';
import HomeScreen from '../screens/HomeScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import ReportsScreen from '../screens/ReportsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.textSecondary,
          tabBarStyle: { 
            height: 60, 
            paddingBottom: 10, 
            paddingTop: 10 
          },
          tabBarLabelStyle: {
            fontFamily: FONTS.medium,
            fontSize: 12,
          },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={24} color={color} />,
          }} 
        />
        <Tab.Screen 
          name="Patients" 
          component={PatientsScreen} 
          options={{ 
            tabBarIcon: ({ color }) => <Ionicons name="people-outline" size={24} color={color} />,
          }} 
        />
        <Tab.Screen 
          name="Schedule" 
          component={ScheduleScreen} 
          options={{ 
            tabBarIcon: ({ color }) => <Ionicons name="calendar-outline" size={24} color={color} />,
          }} 
        />
        <Tab.Screen 
          name="Reports" 
          component={ReportsScreen} 
          options={{ 
            tabBarIcon: ({ color }) => <Ionicons name="document-text-outline" size={24} color={color} />,
          }} 
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ 
            tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={24} color={color} />,
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};