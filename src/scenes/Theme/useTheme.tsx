/**
 * @author: Valentina D'Orazio
 */
/**
 * the most common app settings (text color, background color, elements color, url...)
 */
export function useTheme() {
  const theme = {
    colors: {
      primary: 'whitesmoke',
      secondary: 'hsl(229, 64%, 46%)',
      tertiary: 'hsl(229, 25%, 31%)',
    },
    font: {
      primary: `${'Verdana'}`,
    },
    backgroundColors: {
      primary: 'hsl(214, 47%, 23%) to hsl(237, 49%, 15%)',
      secondary: 'white',
    },
    elementColor: {
      scissors: 'hsl(39, 89%, 49%) to hsl(40, 84%, 53%)',
      paper: 'hsl(230, 89%, 62%) to hsl(230, 89%, 65%)',
      rock: 'hsl(349, 71%, 52%) to hsl(349, 70%, 56%)',
    },
    url: {
      scissors: require('../../image/scissors.png'),
      paper: require('../../image/paper.png'),
      rock: require('../../image/rock.png'),
    },
  };
  return theme;
}
