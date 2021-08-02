import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ChatListItem from '../components/ChatListItem';
import NewMessageButton from '../components/NewMessageButton.tsx/NewMessageButton';
import { Text, View } from '../components/Themed';

import chatRooms from '../data/ChatRooms'

export const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList 
          style={{ width: '100%' }}
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
    alignItems: 'center',
    justifyContent: 'center',
  }  
});
