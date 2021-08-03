import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Score from '../Score';
import GameCore from '../GameCore';
import globalStyle from '../../globalStyle';

export default function Game() {
  return (
    <View style={globalStyle.container}>
      <Score />
      <GameCore />
      <TouchableOpacity
        onPress={() => console.log('wip')}
        style={globalStyle.buttonStyleSecondary}>
        <Text style={{textAlign: 'center', color:'whitesmoke'}}>RULES</Text>
      </TouchableOpacity>
    </View>
  );
}
