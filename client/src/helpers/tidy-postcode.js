const decide2ndPart = (strLength) => {
  switch (strLength) {
    case 7:
      return 4;
    case 6:
      return 3;
    case 5:
      return 2;
    default:
      return 4;
  }
};

const tidyPostcode = (string) => {
  if (!string) return string;

  const trimStr = string.replace(/ /g, '');

  const firstPart = trimStr
    .substring(0, decide2ndPart(trimStr.length))
    .toUpperCase();
  const secondPart = trimStr
    .substring(decide2ndPart(trimStr.length), trimStr.length)
    .toUpperCase();

  return `${firstPart} ${secondPart}`;
};

export default tidyPostcode;
