import * as T from '../../Typography';
import * as S from './style';

import { Row, Col } from '../../Grid';

const Options = ({
  options,
  multi,
  color,
  handleChange,
  error,
  disabled,
  w = '100%',
  selected = [],
}) => {
  const decideColor = () => {
    if (error) return 'error';
    if (color) return color;
    return 'teal';
  };

  const isSelected = (option) =>
    selected &&
    selected.filter((item) => item.label === option.label).length > 0;

  const selectOption = (option) => {
    const alreadySelected = isSelected(option);

    if (multi) {
      if (!alreadySelected) return handleChange([...selected, option]);
      const removed = selected.filter((item) => item.value !== option.value);
      return handleChange(removed);
    }
    return alreadySelected ? handleChange([]) : handleChange([option]);
  };

  return (
    <S.Field w={w} disabled={disabled} mb="3">
      <Row style={{ alignItems: 'stretch' }}>
        {options.map((option, i) => (
          <Col w={[4, 6, 4]} mb="4" key={i}>
            <S.Option
              selected={isSelected(option)}
              color={decideColor()}
              onClick={() => selectOption(option)}
              disabled={disabled}
              key={i}
            >
              <T.Body16 m="0" color={isSelected(option) ? 'white' : 'black'}>
                {option.label}
              </T.Body16>
            </S.Option>
          </Col>
        ))}
      </Row>
      {error && (
        <T.Body16 color="error" m="0" mt="1" ml="3">
          {error}
        </T.Body16>
      )}
    </S.Field>
  );
};

export default Options;
