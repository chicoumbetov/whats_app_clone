/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
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
      initialRouteName="Chat"
      tabBarOptions={{
          activeTintColor: Colors[colorScheme].tint,
          style: {
              backgroundColor: Colors[colorScheme].background
          },
      }}>
      <Tab.Screen
        name="Chat"
        component={ChatNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <Tab.Screen
        name="Status"
        component={StatusNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabNavigator
