/**
 * @author: Valentina D'Orazio
 */
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Score from '../Score';
import GameCore from '../GameCore';
import globalStyle from '../../globalStyle';
import {useState} from 'react';
import GameRules from '../GameRules';
/**
 * Game Home Page
 */
export default function Game() {
  //this state is used to set modal visibility
  const [visibilityModal, setVisibilityModal] = useState<boolean>(false);
  return (
    <View style={globalStyle.container}>
      <Score />
      <GameCore />
      <TouchableOpacity
        onPress={() => setVisibilityModal(!visibilityModal)}
        style={globalStyle.buttonStyleSecondary}>
        <Text style={{textAlign: 'center', color: 'whitesmoke'}}>RULES</Text>
      </TouchableOpacity>
      {visibilityModal && (
        <GameRules
          setVisibility={setVisibilityModal}
          visibility={visibilityModal}
        />
      )}
    </View>
  );
}
