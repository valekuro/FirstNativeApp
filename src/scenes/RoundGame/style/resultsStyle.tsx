import {StyleSheet} from 'react-native';
export const handsStyle = StyleSheet.create({
  handsStyle: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
  },
});
export const resultsStyle = (color: string) =>
  StyleSheet.create({
    results: {
      fontSize: 40,
      color: `${color}`,
      fontWeight: '900',
      fontFamily: 'BarlowCondensed-BoldItalic',
      textTransform: 'uppercase',
    },
    choose: {
      fontSize: 15,
      color: `${color}`,
      textTransform: 'uppercase',
      marginTop: 23,
    },
  });
