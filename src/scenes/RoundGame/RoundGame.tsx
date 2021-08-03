/**
 * @author: Valentina D'Orazio
 */
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {handsStyle, resultsStyle} from './style/resultsStyle';
import {useAppSelector, useAppDispatch} from '../../store/hook';
import {total} from '../../slice/ScoreStore';
import globalStyle from '../../globalStyle';
import SingleGameElement from '../SingleGameElement';
import theme from '../Theme';
import gameSchema from '../utils/gameSchema';
import Score from '../Score';
import {useNavigation} from '@react-navigation/native';
/**
 * It is Round page. The component manages the round game. It shows the gamer hand and
 * the pc hand.
 */
export default function RoundGame() {
  //hook calls
  const handChoosen: any = useAppSelector(state => state.GameHand.hand);
  const pcHand: any = useAppSelector(state => state.GameHand.pcHand);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  //types
  type StatusColorHandGamer = keyof typeof theme.elementColor;
  type StatusImageHandGamer = keyof typeof theme.url;
  type StatusColorHandPC = keyof typeof theme.elementColor;
  //variables
  let elementGamerColor: StatusColorHandGamer = handChoosen;
  let elementImageGamer: StatusImageHandGamer = handChoosen;
  let elementPCColor: StatusColorHandPC = pcHand;
  let elementPCImage: StatusImageHandGamer = pcHand;
  //functions
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
