import {StyleSheet} from 'react-native';

export const styles = (
  color: string,
  fontSize: number | undefined,
  lineHeight: number | undefined,
  letterSpacing: number | undefined,
) =>
  StyleSheet.create({
    textStyle: {
      fontSize: fontSize,
      textTransform: 'uppercase',
      letterSpacing: letterSpacing,
      fontFamily: 'BarlowSemiCondensed_700Bold',
      lineHeight: lineHeight,
      color: `${color}`,
      fontWeight: '700',
    },
  });

export const containerStyles = (
  alignItems: any,
  backgroundColor?: string | undefined,
) =>
  StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      alignItems: alignItems,
      alignSelf: 'center',
      padding: 8,
      backgroundColor: `${backgroundColor ? backgroundColor : 'transparent'}`,
      borderColor: 'transparent',
      borderRadius: 10,
      borderWidth: 2,
    },
  });
