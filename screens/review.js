import React from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';
import { globalStyles } from '../styles';
import { Card, Rating } from '../components';
import BgImage from '../assets/review.png';

function ReviewScreen({ route, navigation }) {
  const { title, rating, body } = route.params;
  return (
    <View style={globalStyles.homeContainer}>
      <ImageBackground source={BgImage} style={globalStyles.bg}>
        <Card>
          <Text style={globalStyles.paragraph}>{title}</Text>
          <Text style={globalStyles.paragraph}>{body}</Text>
          <Rating rating={rating} />
        </Card>
        <View style={globalStyles.button}>
          <Button onPress={() => navigation.goBack()} title='Go Back' />
        </View>
      </ImageBackground>
    </View>
  );
}

export default ReviewScreen;
