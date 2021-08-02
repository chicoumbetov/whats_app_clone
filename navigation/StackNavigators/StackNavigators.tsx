// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
import {createStackNavigator} from "@react-navigation/stack";
import {ChatParamList, StatusParamList} from "../../types";

import * as React from "react";
import {ChatScreen} from "../../screens/ChatScreen";
import {StatusScreen} from "../../screens/StatusScreen";

const ChatStack = createStackNavigator<ChatParamList>();

export const ChatNavigator = () => {
    return (
        <ChatStack.Navigator>
            <ChatStack.Screen
                name="ChatScreen"
                component={ChatScreen}
            />
        </ChatStack.Navigator>
    );
}

const StatusStack = createStackNavigator<StatusParamList>();

export  const StatusNavigator = () => {
    return (
        <StatusStack.Navigator>
            <StatusStack.Screen
                name="StatusScreen"
                component={StatusScreen}
            />
        </StatusStack.Navigator>
    );
}
