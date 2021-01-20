import * as T from '../../Typography';
import * as CS from '../style';
import * as S from './style';

const Cards = ({
  options,
  selected = {},
  disabled,
  w,
  error,
  handleChange,
}) => {
  const notSelected = (value) => selected.value && selected.value !== value;

  return (
    <CS.Field w={w} disabled={disabled} mb="3">
      {options.map((option) => (
        <S.Card
          notSelected={notSelected(option.value)}
          selected={selected.value === option.value}
          color={option.color}
          onClick={() => handleChange(option)}
          disabled={disabled}
          key={option.value}
        >
          <S.Header>
            <T.H5 color="white" m="0">
              {option.title}
            </T.H5>
          </S.Header>
          <S.Inner>
            <T.BodyR color="black" m="0" mb="4" mt="2">
              {option.description}
            </T.BodyR>
            {option.helper && (
              <T.Body16 color="liteGray" m="0" mb="4">
                {option.helper}
              </T.Body16>
            )}
          </S.Inner>
        </S.Card>
      ))}
      {error && (
        <T.Body16 color="error" m="0" mt="1">
          {error}
        </T.Body16>
      )}
    </CS.Field>
  );
};

export default Cards;
