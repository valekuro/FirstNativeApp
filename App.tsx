/**
 * @author: Valentina D'Orazio
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import theme from './src/scenes/Theme';
import GameElementsContext from './src/scenes/Score/GlobalScoreContext';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {createStackNavigator} from '@react-navigation/stack';
import Game from './src/scenes/Game';
import RoundGame from './src/scenes/RoundGame';
import {RootStackParamList} from './typeNav/type';
const Stack = createStackNavigator<RootStackParamList>();
export default function App() {
  const gameElem = ['sasso', 'carta', 'forbici'];
  return (
    <Provider store={store}>
      <GameElementsContext.Provider
        value={{theme: theme, availableGameElements: gameElem}}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Game}
              options={{title: 'Game'}}
            />
            <Stack.Screen
              name="Round"
              component={RoundGame}
              options={{title: 'first round'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GameElementsContext.Provider>
    </Provider>
  );
}
