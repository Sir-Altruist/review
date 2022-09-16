import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = ({ children }) => {
  return (
    <View style={styles.card}>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 6,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 5,
  },
  content: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
});
export default Card;
