import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
//import {Button} from 'react-native-elements';
import {useAppSelector, useAppDispatch} from '../../store/hook';
import {total} from '../../slice/ScoreStore';
import globalStyle from '../../globalStyle';
import SingleGameElement from '../SingleGameElement';
import {useTheme} from '../Theme';
import gameSchema from '../utils/gameSchema';
import Score from '../Score';
import {useNavigation} from '@react-navigation/native';

export default function RoundGame(/* {navigation}: Props */) {
  const handChoosen: any = useAppSelector(state => state.GameHand.hand);
  const theme = useTheme();
  type StatusColorHandGamer = keyof typeof theme.elementColor;
  type StatusImageHandGamer = keyof typeof theme.url;
  let elementGamerColor: StatusColorHandGamer = handChoosen;
  let elementImageGamer: StatusImageHandGamer = handChoosen;
  const pcHand: any = useAppSelector(state => state.GameHand.pcHand);
  type StatusColorHandPC = keyof typeof theme.elementColor;
  let elementPCColor: StatusColorHandPC = pcHand;
  let elementPCImage: StatusImageHandGamer = pcHand;
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  // const [loading, setLoading] = useState<string>('');
  const score = gameSchema(handChoosen, pcHand);
  dispatch(total(score));

  return (
    <View style={globalStyle.container}>
      <Score />
      <View style={handsStyle.handsStyle}>
        <View style={globalStyle.container}>
          <SingleGameElement
            icon={
              <Image
                style={{width: 40, height: 40}}
                source={theme.url[elementImageGamer]}
              />
            }
            onPress={() => console.log(elementImageGamer)}
            color={`${theme.elementColor[elementGamerColor]}`}
          />
          <Text style={resultsStyle(theme.colors.primary).choose}>
            {' '}
            HAI SCELTO{' '}
          </Text>
        </View>
        <View style={globalStyle.container}>
          <SingleGameElement
            icon={
              <Image
                style={{width: 40, height: 40}}
                source={theme.url[elementPCImage]}
              />
            }
            onPress={() => console.log(elementImageGamer)}
            color={`${theme.elementColor[elementPCColor]}`}
          />
          <Text style={resultsStyle(theme.colors.primary).choose}>
            IL PC HA SCELTO
          </Text>
        </View>
      </View>
      <View>
        <Text style={resultsStyle(theme.colors.primary).results}>
          {score === 1 ? 'hai vinto' : score < 0 ? 'hai perso' : 'patta'}
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={globalStyle.buttonStylePrimary}>
          <Text style={{textAlign: 'center'}}>PLAY AGAIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
