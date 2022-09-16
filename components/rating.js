import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View, StyleSheet, Text } from 'react-native';

const Rating = ({ rating }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Rating:</Text>
      <View style={styles.container}>
        <View>
          <MaterialIcons
            name={
              rating >= 1 ? 'star' : rating >= 0.5 ? 'star-half' : 'star-border'
            }
            size={24}
            color='#f8e825'
          />
        </View>
        <View>
          <MaterialIcons
            name={
              rating >= 2 ? 'star' : rating >= 1.5 ? 'star-half' : 'star-border'
            }
            size={24}
            color='#f8e825'
          />
        </View>
        <View>
          <MaterialIcons
            name={
              rating >= 3 ? 'star' : rating >= 2.5 ? 'star-half' : 'star-border'
            }
            size={24}
            color='#f8e825'
          />
        </View>
        <View>
          <MaterialIcons
            name={
              rating >= 4 ? 'star' : rating >= 3.5 ? 'star-half' : 'star-border'
            }
            size={24}
            color='#f8e825'
          />
        </View>
        <View>
          <MaterialIcons
            name={
              rating >= 5 ? 'star' : rating >= 4.5 ? 'star-half' : 'star-border'
            }
            size={24}
            color='#f8e825'
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    marginRight: 5,
    marginTop: 2,
  },
});
export default Rating;
