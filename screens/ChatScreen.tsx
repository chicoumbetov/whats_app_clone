import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat</Text>

    </View>
  );
}

//  default ChatScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
