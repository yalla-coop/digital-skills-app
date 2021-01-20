import * as T from '../../Typography';
import * as S from './style';

const Options = ({
  options,
  multi,
  color,
  handleChange,
  error,
  disabled,
  w,
  selected = [],
}) => {
  const decideColor = () => {
    if (error) return 'error';
    if (color) return color;
    return 'teal';
  };

  const isSelected = (option) =>
    selected.filter((item) => item.value === option.value).length > 0;

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
      {options.map((option) => (
        <S.Option
          selected={isSelected(option)}
          color={decideColor()}
          onClick={() => selectOption(option)}
          disabled={disabled}
          key={option.label}
        >
          <T.Body16 m="0" color={isSelected(option) ? 'white' : 'black'}>
            {option.label}
          </T.Body16>
        </S.Option>
      ))}
      {error && (
        <T.Body16 color="error" m="0" mt="1">
          {error}
        </T.Body16>
      )}
    </S.Field>
  );
};

export default Options;
