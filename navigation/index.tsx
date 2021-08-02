/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {ColorSchemeName, View} from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import Colors from "../constants/Colors";
import {MaterialCommunityIcons, Octicons} from "@expo/vector-icons";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: Colors.light.background
        },
        headerTintColor: Colors.light.tint,
        headerTitleAlign: "left",
        headerTitleStyle: {
            fontWeight: "bold"
        }
    }}>
      <Stack.Screen name="Root" component={BottomTabNavigator}
      options={{
          title: "WhatsApp",
          headerRight: () => (
              <View style={{ flexDirection: "row",width: 60, justifyContent: "space-between", marginRight: 10}}>
                  <Octicons name={"search"} size={24} color={"white"}/>
                  <MaterialCommunityIcons name={"dots-vertical"} size={24} color={"white"} />
              </View>
          )
      }}/>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
