import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PatientsScreen } from '../screens/PatientsScreen';
import { HomeScreen, ScheduleScreen, ReportsScreen, ProfileScreen } from '../screens/index'; 
import { Home, Users, Calendar, FileText, User } from 'lucide-react-native';
import { COLORS } from '../utils/colors';

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.textSecondary,
          tabBarStyle: { height: 60, paddingBottom: 10, paddingTop: 10 },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ tabBarIcon: ({ color }) => <Home size={24} color={color} /> }} 
        />
        <Tab.Screen 
          name="Patients" 
          component={PatientsScreen} 
          options={{ tabBarIcon: ({ color }) => <Users size={24} color={color} /> }} 
        />
        <Tab.Screen 
          name="Schedule" 
          component={ScheduleScreen} 
          options={{ tabBarIcon: ({ color }) => <Calendar size={24} color={color} /> }} 
        />
        <Tab.Screen 
          name="Reports" 
          component={ReportsScreen} 
          options={{ tabBarIcon: ({ color }) => <FileText size={24} color={color} /> }} 
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ tabBarIcon: ({ color }) => <User size={24} color={color} /> }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};