/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {View} from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';


import Colors from "../constants/Colors";
import {
    FontAwesome5,
    MaterialCommunityIcons,
    MaterialIcons,
    Octicons
} from "@expo/vector-icons";
import MainTabNavigator from "./MainTabNavigator";
import ChatRoomScreen from "../screens/ChatRoomScreen";

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="WhatsApp" component={MainTabNavigator}
      options={{
          title: "WhatsApp",
          headerStyle: {
              shadowOpacity: 0,
              elevation: 0,
              backgroundColor: Colors.light.tint
          },
          headerTintColor: Colors.light.background,
          headerTitleAlign: "left",
          headerTitleStyle: {
              fontWeight: "bold"
          },
          headerRight: () => (
              <View style={{ flexDirection: "row",width: 60, justifyContent: "space-between", marginRight: 10}}>
                  <Octicons name={"search"} size={24} color={"white"}/>
                  <MaterialCommunityIcons name={"dots-vertical"} size={24} color={"white"} />
              </View>
          )
      }}/>
        <Stack.Screen
            name="ChatRoomScreen"
            component={ChatRoomScreen}
            options={ ({route}) => ({
                title: route.params.name,
                headerRight: () => (
                    <View
                        style={{
                            flexDirection: 'row',
                            width: 100,
                            justifyContent: 'space-between',
                            marginRight: 10
                        }}
                    >
                        <FontAwesome5 name={'video'} size={22} color={'white'} />
                        <MaterialIcons name={'call'} size={22} color={'white'} />
                        <MaterialCommunityIcons name={'dots-vertical'} size={22} color={'white'} />
                    </View>
                )
            })}
        />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
