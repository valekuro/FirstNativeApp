import {View, Image} from 'react-native';
import SingleGameElement from '../SingleGameElement';
import {useAppDispatch} from '../../store/hook';
import React from 'react';
import {hand, randomHand} from '../../slice/GameHand';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../Theme';
export default function GameCore() {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  //const digit = useAppSelector((state) => state.GameHand.hand);
  const navigation = useNavigation();
  const handleSelectElement = (element: string) => {
    dispatch(hand(element));
    const gameElements: string[] = ['paper', 'scissors', 'rock'];
    dispatch(randomHand(gameElements[Math.floor(Math.random() * 3)]));
    navigation.navigate('Round');
  };
  return (
    <View style={{width: '100%', padding: 2}}>
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
                width: 40,
                height: 40,
              }}
              source={require('../../image/paper.png')}
            />
          }
          onPress={() => handleSelectElement('paper')}
          color={`${theme.elementColor.paper}`}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          justifyContent: 'space-around',
        }}>
        <SingleGameElement
          icon={
            <Image
              style={{width: 40, height: 40}}
              source={require('../../image/rock.png')}
            />
          }
          color={`${theme.elementColor.rock}`}
          onPress={() => handleSelectElement('rock')}
        />
        <SingleGameElement
          icon={
            <Image
              style={{width: 40, height: 40}}
              source={require('../../image/scissors.png')}
            />
          }
          color={`${theme.elementColor.scissors}`}
          onPress={() => handleSelectElement('scissors')}
        />
      </View>
    </View>
  );
}
