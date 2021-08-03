/**
 * @author: Valentina D'Orazio
 */
import {View, Image} from 'react-native';
import gameCoreStyles from './style/styles';
import SingleGameElement from '../SingleGameElement';
import {useAppDispatch} from '../../store/hook';
import React from 'react';
import {hand, randomHand} from '../../slice/GameHand';
import {useNavigation} from '@react-navigation/native';
import theme from '../Theme';
/**
 * Component situated in 'Home'. It is the game core. Here there are two triangles 
 * to represents lines between game items.
 */
export default function GameCore() {
  //hook calls
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  //functions
  //this function allows to take a game hand. It sends to the store the gamer element choosen 
  //and allows to randomically choose the pc element to play.
  const handleSelectElement = (element: string) => {
    dispatch(hand(element));
    const gameElements: string[] = ['paper', 'scissors', 'rock'];
    dispatch(randomHand(gameElements[Math.floor(Math.random() * 3)]));
    navigation.navigate('Round');
  };
  return (
    <View style={{width: '100%', padding: 2}}>
      <View style={gameCoreStyles.container}>
        <View style={gameCoreStyles.triangleBig} />
        <View style={gameCoreStyles.triangleSlim} />
      </View>

      <View style={gameCoreStyles.elementContainer}>
        <SingleGameElement
          icon={
            <Image
              style={{width: 60, height: 60}}
              source={require('../../image/paper.png')}
            />
          }
          color={`${theme.elementColor.paper}`}
          onPress={() => handleSelectElement('paper')}
        />
        <SingleGameElement
          icon={
            <Image
              style={{width: 60, height: 60}}
              source={require('../../image/scissors.png')}
            />
          }
          color={`${theme.elementColor.scissors}`}
          onPress={() => handleSelectElement('scissors')}
        />
      </View>
      <View
        style={{
          width: '18.5%',
          display: 'flex',
          alignItems: 'center',
          alignSelf: 'center',
          paddingBottom: 50,
          paddingTop: 27,
        }}>
        <SingleGameElement
          icon={
            <Image
              style={{
                width: 60,
                height: 60,
              }}
              source={require('../../image/rock.png')}
            />
          }
          onPress={() => handleSelectElement('rock')}
          color={`${theme.elementColor.rock}`}
        />
      </View>
    </View>
  );
}
