import {StyleSheet} from 'react-native';

export const styles = (borderColor: string) =>
  StyleSheet.create({
    buttonStyle: {
      borderColor: borderColor,
      borderRadius: 100,
      borderBottomWidth: 8,
      borderTopWidth: 8,
      borderLeftWidth: 8,
      borderRightWidth: 8,
      padding: 10,
      backgroundColor: 'white',
    },
  });

export default styles;
