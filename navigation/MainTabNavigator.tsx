/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Fontisto, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import {BottomTabParamList} from '../types';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

import {ChatNavigator, StatusNavigator} from "./StackNavigators/StackNavigators";

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
const TabBarIcon = (props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) => {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// const Tab = createBottomTabNavigator<BottomTabParamList>();
const Tab = createMaterialTopTabNavigator<BottomTabParamList>()

const MainTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      initialRouteName="Chats"
      tabBarOptions={{
          activeTintColor: Colors[colorScheme].tint,
          style: {
              backgroundColor: Colors[colorScheme].background
          },
          indicatorStyle: {
            backgroundColor: Colors[colorScheme].tint,
            height: 4,
          },
          labelStyle: {
            fontWeight: 'bold'
          },
          showIcon: true,
      }}>
        <Tab.Screen
        name="Camera"
        component={ChatNavigator}
        options={{
          tabBarIcon: ({ color }) => <Fontisto name="camera" size={20} color={color} />,
          tabBarLabel: () => null
        }}
      />
      <Tab.Screen
        name="Chats"
        component={ChatNavigator}
      />
      <Tab.Screen
        name="Status"
        component={StatusNavigator}
      />
      <Tab.Screen
        name="Calls"
        component={ChatNavigator}
      />
    </Tab.Navigator>
  );
}

export default MainTabNavigator
