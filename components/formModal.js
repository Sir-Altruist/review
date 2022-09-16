import React, { useState } from 'react';
import {
  Modal,
  View,
  Alert,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { globalStyles } from '../styles';
import { MaterialIcons } from '@expo/vector-icons';
import { validateField } from '../lib';

const FormModal = ({ close, toggleModal, addReview }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [rating, setRating] = useState('');
  const changeTitle = (val) => {
    setTitle(val);
  };
  const changeBody = (val) => {
    setBody(val);
  };
  const changeRating = (val) => {
    setRating(val);
  };

  const reviewTest = () => {
    const message = validateField(['title', 'body', 'rating'], {
      title,
      body,
      rating,
    });
    if (message) {
      Alert.alert('Error!', message, [
        {
          text: 'Close',
        },
      ]);
    } else {
      addReview(title, body, rating);
      setTitle('');
      setBody('');
      setRating('');
      Alert.alert('Congratulations!', 'Review Created Successfully', [
        {
          text: 'Close',
          onPress: () => close(),
        },
      ]);
    }
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={toggleModal} animationType='slide'>
        <MaterialIcons
          name='close'
          size={24}
          onPress={close}
          style={{
            ...globalStyles.toggleModal,
            ...globalStyles.closeModal,
          }}
        />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={globalStyles.modalContent}>
            <TextInput
              onChangeText={changeTitle}
              style={globalStyles.input}
              placeholder='Review title'
              value={title}
            />
            <TextInput
              onChangeText={changeBody}
              style={globalStyles.input}
              multiline
              placeholder='Review body'
              value={body}
            />
            <TextInput
              style={globalStyles.input}
              placeholder='Rating (1-5)'
              keyboardType='numeric'
              onChangeText={changeRating}
              value={rating}
            />
            <View style={globalStyles.formButton}>
              <Button title='submit' onPress={reviewTest} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default FormModal;
