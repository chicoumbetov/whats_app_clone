import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ChatListItem from '../components/ChatListItem';
import NewMessageButton from '../components/NewMessageButton.tsx/NewMessageButton';
import { View } from '../components/Themed';

import chatRooms from '../data/ChatRooms'

export const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
          style={{ flex: 1 }}
          data={chatRooms}
          renderItem={({ item }) => <ChatListItem chatRoom={item} />}
          keyExtractor={(item) => item.id}
      />
      <NewMessageButton/>
    </View>
  );
}

//  default ChatScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
});
