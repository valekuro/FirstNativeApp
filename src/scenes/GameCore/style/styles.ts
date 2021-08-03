import {StyleSheet} from 'react-native';
import theme from '../../Theme';
const gameCoreStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },

  triangleBig: {
    marginTop: 310,
    width: 0,
    height: 40,
    borderLeftWidth: 90,
    borderRightWidth: 90,
    borderBottomWidth: 150,
    transform: [{rotate: '180deg'}],
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#00254d',
  },
  triangleSlim: {
    position: 'absolute',
    top: 100,
    width: 0,
    height: 40,
    borderLeftWidth: 60,
    borderRightWidth: 60,
    borderBottomWidth: 90,
    transform: [{rotate: '180deg'}],
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: `${theme.backgroundColors.primary}`,
  },
  elementContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
  },
});

export default gameCoreStyles;
