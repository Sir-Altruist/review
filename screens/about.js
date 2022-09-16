import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles';

function AboutScreen() {
  return (
    <View style={globalStyles.homeContainer}>
      <Text style={globalStyles.paragraph}>About Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
export default AboutScreen;
