import {StyleSheet} from 'react-native';

const modalstyle = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 132,
  },
  modalView: {
    marginTop: 90,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    marginTop: 30,
  },
  buttonClose: {
    backgroundColor: 'transparent',
  },
});
export default modalstyle;
