import React from 'react';
import {Text, View} from 'react-native';
import {styles, containerStyles} from '../style/styles';
import {useGlobalContext} from '../GlobalScoreContext';
import {useAppSelector} from '../../../store/hook';

export default function ScoreTable() {
  const score = useAppSelector(state => state.ScoreStore.score);
  const {theme} = useGlobalContext();

  return (
    <View
      style={
        containerStyles('center', `${theme.backgroundColors.secondary}`)
          .container
      }>
      <Text style={styles(theme.colors.secondary, 8, undefined, 2).textStyle}>
        SCORE:
      </Text>
      <Text style={styles(theme.colors.tertiary, 26, undefined, 0.1).textStyle}>
        {score}
      </Text>
    </View>
  );
}
