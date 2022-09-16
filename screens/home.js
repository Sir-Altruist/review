import { useState } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import { globalStyles } from '../styles';
import { Card, FormModal } from '../components';
import BgImage from '../assets/review.png';
import { MaterialIcons } from '@expo/vector-icons';

function HomeScreen({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: 'Avatar, The Last Air Bender',
      rating: 5,
      body: 'lorem ipsum',
      key: '1',
    },
    { title: 'House of Dragon', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'The Rings of Power', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);
  const [toggleModal, setToggleModal] = useState(false);
  const closeModal = () => {
    setToggleModal(false);
  };
  const openModal = () => {
    setToggleModal(true);
  };

  const addReview = (title, body, rating) => {
    setReviews((prevState) => [
      { title, rating, body, key: Math.random().toString() },
      ...prevState,
    ]);
  };

  const removeReview = (key) => {
    setReviews((prevState) => prevState.filter((item) => item.key != key));
  };
  return (
    <ImageBackground source={BgImage} style={globalStyles.bg}>
      <View style={globalStyles.homeContainer}>
        <MaterialIcons
          name='add'
          size={24}
          onPress={openModal}
          style={globalStyles.toggleModal}
        />
        <FormModal
          addReview={addReview}
          close={closeModal}
          toggleModal={toggleModal}
        />
        <FlatList
          data={reviews}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Review', item)}
            >
              <Card>
                <View style={globalStyles.homeCard}>
                  <Text style={globalStyles.paragraph}>{item.title}</Text>
                  <MaterialIcons
                    name='delete'
                    size={24}
                    onPress={() => removeReview(item.key)}
                    style={globalStyles.deleteReview}
                  />
                </View>
              </Card>
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
}

export default HomeScreen;
