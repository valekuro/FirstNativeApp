/**
 * @author: Valentina D'Orazio
 */
import enemiesCalculation from './enemiesCalculation';
/**
 * the function sets the score and it establishes who is the winner
 * @param gamer - gamer hand
 * @param pc - pc hand
 * @return score(number)
 */
export default function gameSchema(gamer: string, pc: string) {
  const enemy = enemiesCalculation(gamer);
  let score;
  pc !== gamer ? (pc === enemy ? (score = -1) : (score = 1)) : (score = 0);

  return score;
}
