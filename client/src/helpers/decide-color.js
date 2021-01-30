const colors = ['teal', 'blue', 'purple', 'navy', 'pink'];

/**
 * @author Fade
 */
const decideColor = (n) => {
  if (n < colors.length) {
    return colors[n];
  } else {
    return decideColor(n - colors.length);
  }
};

export default decideColor;
