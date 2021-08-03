import React from 'react';
import {Text, View} from 'react-native';
import {styles, containerStyles} from '../style/styles';
import {useGlobalContext} from '../GlobalScoreContext';

export default function AvailableElements() {
  const {availableGameElements, theme} = useGlobalContext();

  return (
    <View style={containerStyles('flex-start', 'transparent').container}>
      {availableGameElements.map((element, key) => {
        return (
          <Text
            style={styles(theme.colors.primary, 16, 18, 0.3).textStyle}
            key={key}>
            {element}
          </Text>
        );
      })}
    </View>
  );
}
