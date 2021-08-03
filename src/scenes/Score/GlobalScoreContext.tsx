/**
 * @author: Valentina D'Orazio
 */
import {createContext, useContext} from 'react';
interface Props {
  availableGameElements: string[];
  theme: any;
}
const GameElementsContext = createContext<Props>({
  availableGameElements: ['', '', ''],
  theme: {},
});
export const useGlobalContext = () => useContext(GameElementsContext);
export default GameElementsContext;
