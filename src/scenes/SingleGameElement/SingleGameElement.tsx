import {View, Pressable, GestureResponderEvent} from 'react-native';
import React from 'react';
import styles from './style/styles';

interface SingleGameElementProps {
  icon: JSX.Element | HTMLImageElement;
  color: string;
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
}
export default function SingleGameElement({
  icon,
  color,
  onPress,
}: SingleGameElementProps) {
  return (
    <View>
      <Pressable style={styles(color).buttonStyle} onPress={onPress}>
        {icon}
      </Pressable>
    </View>
  );
}
