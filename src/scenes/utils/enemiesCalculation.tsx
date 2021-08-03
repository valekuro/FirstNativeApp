/**
 * @author: Valentina D'Orazio
 */
/**
 * the function take in input the gamer choose and calculate who is the enemy
 * @param gamer - gamer move
 * @return enemy(string)
 */
export default function enemiesCalculation(gamer: string) {
  let enemy = '';
  switch (gamer) {
    case 'rock':
      enemy = 'paper';
      break;
    case 'paper':
      enemy = 'scissors';
      break;
    case 'scissors':
      enemy = 'rock';
      break;
    default:
      enemy = '';
      break;
  }
  return enemy;
}
