import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Round: undefined;
};

export type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Round'
>;

export type Props = {
  navigation: ProfileScreenNavigationProp;
};
