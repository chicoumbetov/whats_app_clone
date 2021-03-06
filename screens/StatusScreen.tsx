import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export const StatusScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Status</Text>
    </View>
  );
}

// export default StatusScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
