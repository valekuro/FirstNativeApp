import {StyleSheet} from 'react-native';
import {useTheme} from './scenes/Theme';
const theme = useTheme();
const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'hsl(214, 47%, 23%) to hsl(237, 49%, 15%)',
  },
  buttonStylePrimary: {
    borderRadius: 10,
    borderWidth: 0,
    padding: 13,
    backgroundColor: 'white',
    color: `${theme.colors.secondary}`,
    borderColor: 'transparent',
    marginTop: 18,
  },
  buttonStyleSecondary: {
    borderRadius: 10,
    borderWidth: 2,
    padding: 13,
    width: 143,
    backgroundColor: 'transparent',
    color: `${theme.colors.primary}`,
    borderColor: `${theme.colors.primary}`,
    marginTop: 18,
  },
});

export default globalStyle;
