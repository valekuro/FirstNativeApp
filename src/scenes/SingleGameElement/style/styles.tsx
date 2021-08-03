import {StyleSheet} from 'react-native';

export const styles = (borderColor: string) =>
  StyleSheet.create({
    buttonStyle: {
      shadowColor: '#fff',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,

      elevation: 7,
      borderColor: borderColor,
      borderRadius: 100,
      borderWidth: 13,
      padding: 20,
      backgroundColor: 'white',
    },
  });

export default styles;
