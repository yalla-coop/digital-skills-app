import * as T from '../../Typography';
import * as CS from '../style';
import * as S from './style';

const BasicInput = ({
  type = 'text',
  name = 'input',
  placeholder = 'Type here...',
  label,
  error,
  value,
  handleChange,
  isOptional,
  helper,
  color,
  w,
  disabled,
}) => {
  const decideColor = () => {
    if (error) return 'error';
    return color;
  };

  return (
    <CS.Field w={w} disabled={disabled} mb="3">
      {label && (
        <CS.Label htmlFor={label}>
          <T.Body16B color={decideColor()} m="0" mb="1" ml="1">
            {label}
          </T.Body16B>
          {helper && (
            <T.Body16 color={decideColor()} m="0" mb="1" ml="1">
              {helper}
            </T.Body16>
          )}
          {isOptional && (
            <T.Body16 color="liteGray" m="0" mb="1" ml="1">
              (optional)
            </T.Body16>
          )}
        </CS.Label>
      )}
      <S.Input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        color={decideColor()}
        disabled={disabled}
      />
      {error && (
        <T.Body16 color="error" m="0" mt="1">
          {error}
        </T.Body16>
      )}
    </CS.Field>
  );
};

export default BasicInput;
