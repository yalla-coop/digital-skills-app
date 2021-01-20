import { Radio as AntdRadio } from 'antd';
import * as T from '../../Typography';
import * as S from './style';
import * as CS from '../style';

const { Group: AntdGroup } = AntdRadio;

const Radio = ({
  selected,
  label,
  error,
  helper,
  handleChange,
  color,
  disabled,
  defaultChecked,
  w,
  options,
  isOptional,
  horizontal,
}) => {
  const decideColor = () => {
    if (error) return 'error';
    return color;
  };

  return (
    <S.Field w={w} disabled={disabled} mb="3" color={color} error={error}>
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
      <AntdGroup
        onChange={handleChange}
        valued={selected}
        disabled={disabled}
        defaultChecked={defaultChecked}
        style={horizontal ? S.horizontalStyle : {}}
      >
        {options.map((opt) => (
          <AntdRadio value={opt.value} style={S.radioStyle} key={opt.value}>
            <T.Body16 m="0" ml="2" color={error ? 'error' : 'gray'}>
              {opt.label}
            </T.Body16>
          </AntdRadio>
        ))}
      </AntdGroup>
      {error && (
        <T.Body16 color="error" m="0" mt="1">
          {error}
        </T.Body16>
      )}
    </S.Field>
  );
};

export default Radio;
