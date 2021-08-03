import {StyleSheet} from 'react-native';

export const styles = (borderColor: string, elevation: number) =>
  StyleSheet.create({
    buttonStyle: {
      shadowColor: '#fff',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.5,
      shadowRadius: 10.5,

      elevation: elevation,
      borderColor: borderColor,
      borderRadius: 100,
      borderWidth: 13,
      padding: 20,
      backgroundColor: 'white',
    },
  });

export default styles;
