/**
 * @author: Valentina D'Orazio
 */
import React from 'react';
import {View, Text, Modal, Pressable, Image} from 'react-native';
import modalstyle from './style/modalStyle';
/**
 * Game Rules Props
 */
interface GameRulesProps {
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  visibility: boolean;
}
/**
 * The component manages the game rules modal.
 * @param setVisibility (mandatory): setState to set modal visibility
 * @param visibility (mandatory): state for modal visibility
 */
export default function GameRules({setVisibility, visibility}: GameRulesProps) {
  return (
    <View style={modalstyle.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visibility}
        onRequestClose={() => {
          setVisibility(!visibility);
        }}>
        <View style={modalstyle.modalView}>
          <Text style={{marginBottom: 30, fontSize: 25}}>RULES</Text>
          <Image
            style={{width: 340, height: 300}}
            source={require('../../image/rules.png')}
          />
          <Pressable
            style={[modalstyle.button, modalstyle.buttonClose]}
            onPress={() => setVisibility(!visibility)}>
            <Text style={{color: 'grey'}}>X</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}

