import React from 'react';
import {View, StyleSheet} from 'react-native';
import AvailableElements from './ScoreElements/AvailableElements';
import ScoreTable from './ScoreElements/ScoreTable';

export default function Score() {
  return (
    <View style={styles.container}>
      <AvailableElements />

      <ScoreTable />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    width: '80%',
    borderColor: '#d3d3d3',
    borderRadius: 10,
    borderWidth: 2,
    padding: 3,
  },
});
