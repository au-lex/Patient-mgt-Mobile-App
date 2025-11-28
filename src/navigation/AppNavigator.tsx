import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '../utils/colors';
import { FONTS } from '../utils/font';

// Import Screens
import { PatientsScreen } from '../screens/PatientsScreen';
import HomeScreen from '../screens/HomeScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import ReportsScreen from '../screens/ReportsScreen';
import ProfileScreen from '../screens/ProfileScreen';

// Import Custom SVGs
import HomeSvg from '../assets/svg/home'; 
import PatientsSvg from '../assets/svg/patients';
import ScheduleSvg from '../assets/svg/schedule';
import RecordSvg from '../assets/svg/record';
import ProfileSvg from '../assets/svg/profile';

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
            fontFamily: FONTS.regular,
            fontSize: 12,
          },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            tabBarIcon: ({ color }) => <HomeSvg color={color} />,
          }} 
        />
        <Tab.Screen 
          name="Patients" 
          component={PatientsScreen} 
          options={{ 
            tabBarIcon: ({ color }) => <PatientsSvg color={color} />,
          }} 
        />
        <Tab.Screen 
          name="Schedule" 
          component={ScheduleScreen} 
          options={{ 
            tabBarIcon: ({ color }) => <ScheduleSvg color={color} />,
          }} 
        />
        <Tab.Screen 
          name="Reports" 
          component={ReportsScreen} 
          options={{ 
            tabBarIcon: ({ color }) => <RecordSvg color={color} />,
          }} 
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ 
            tabBarIcon: ({ color }) => <ProfileSvg color={color} />,
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};