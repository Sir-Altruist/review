import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontFamily: 'nunito-bold',
    fontSize: 18,
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  homeContainer: {
    padding: 24,
  },
  button: {
    marginTop: 20,
  },
  toggleModal: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  closeModal: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
  input: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 8,
    marginHorizontal: 20,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  formButton: {
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
    textDecorationStyle: 'none',
  },
  deleteReview: {
    marginTop: 10,
  },
  homeCard: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
