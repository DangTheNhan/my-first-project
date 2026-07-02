import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default () => {
  const [pressCount, setPressCount] = useState(0);

  return (
    <View style={{ alignItems: "center", marginTop: 100 }}>
      <Text>You've pressed the button: {pressCount} time(s)</Text>
      <Button title="Press me" onPress={() => setPressCount(pressCount + 1)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
