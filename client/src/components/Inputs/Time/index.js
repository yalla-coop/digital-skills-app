import * as T from '../../Typography';
import * as CS from '../style';
import * as S from './style';

const Time = ({
  name = 'timeInput',
  placeholder = '',
  label,
  error,
  value,
  handleChange,
  isOptional,
  time = 'minutes',
  color = 'navy',
  w,
  disabled,
  margins = {},
  ...props
}) => {
  const decideColor = () => {
    if (error) return 'error';
    return color;
  };

  const _handleChange = (e) => {
    if (e.target && e.target.value) {
      e.target.value = Math.floor(Number(e.target.value));
    }
    return handleChange(e);
  };

  return (
    <CS.Field w={w} disabled={disabled} {...props}>
      {label && (
        <CS.Label htmlFor={label}>
          <T.BodyB color={decideColor()} m="0" mb="1" ml="1">
            {label}
          </T.BodyB>
          {isOptional && (
            <T.Body16 color="liteGray" m="0" mb="1" ml="1">
              (optional)
            </T.Body16>
          )}
        </CS.Label>
      )}
      <S.InputWrapper>
        <S.Input
          type="number"
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={_handleChange}
          color={decideColor()}
          disabled={disabled}
          mr="3"
          min={0}
        />
        <T.Body16B color="gray" mb="1">
          {time}
        </T.Body16B>
      </S.InputWrapper>

      {error && (
        <T.Body16 color="error" m="0" mt="1">
          {error}
        </T.Body16>
      )}
    </CS.Field>
  );
};

export default Time;
