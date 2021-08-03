/**
 * @author: Valentina D'Orazio
 */
import {View, Pressable, GestureResponderEvent} from 'react-native';
import React from 'react';
import styles from './style/styles';
interface SingleGameElementProps {
  icon: JSX.Element | HTMLImageElement;
  color: string;
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
  elevation?: number;
}
/**
 * A single circle game element.
 * @param icon (mandatory) the game element image
 * @param color (mandatory) circle color around the element
 * @param onPress (mandatory) event handler
 */
export default function SingleGameElement({
  icon,
  color,
  onPress,
  elevation,
}: SingleGameElementProps) {
  let shadow: number;
  elevation ? (shadow = elevation) : (shadow = 7);
  return (
    <View>
      <Pressable style={styles(color, shadow).buttonStyle} onPress={onPress}>
        {icon}
      </Pressable>
    </View>
  );
}
