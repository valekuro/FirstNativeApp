import enemiesCalculation from './enemiesCalculation';
export default function gameSchema(gamer: string, pc: string) {
  const enemy = enemiesCalculation(gamer);
  let score;
  pc !== gamer ? (pc === enemy ? (score = -1) : (score = 1)) : (score = 0);

  return score;
}
