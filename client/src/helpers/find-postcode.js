const findPostcode = (str) => {
  const testFullWithSpace = /\b(([a-z][0-9]{1,2})|(([a-z][a-hj-y][0-9]{1,2})|(([a-z][0-9][a-z])|([a-z][a-hj-y][0-9]?[a-z])))) [0-9][a-z]{2}\b/gi;
  const testFullNoSpace = /\b(([a-z][0-9]{1,2})|(([a-z][a-hj-y][0-9]{1,2})|(([a-z][0-9][a-z])|([a-z][a-hj-y][0-9]?[a-z]))))[0-9][a-z]{2}\b/gi;

  const fullPostcode =
    str.match(testFullWithSpace) || str.match(testFullNoSpace);
  return fullPostcode ? fullPostcode[0] : null;
};

export default findPostcode;
