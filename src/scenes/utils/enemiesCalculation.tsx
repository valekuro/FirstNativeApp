export default function enemiesCalculation(gamer: string) {
  let a = '';
  switch (gamer) {
    case 'rock':
      a = 'paper';
      break;
    case 'paper':
      a = 'scissors';
      break;
    case 'scissors':
      a = 'rock';
      break;
    default:
      a = '';
      break;
  }
  return a;
}
