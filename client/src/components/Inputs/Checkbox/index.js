import { Checkbox as AntdCheckbox } from 'antd';
import * as T from '../../Typography';
import * as S from './style';

const Checkbox = ({
  checked,
  label,
  error,
  helper,
  handleChange,
  color,
  disabled,
  defaultChecked,
  w,
}) => {
  return (
    <S.Field w={w} disabled={disabled} mb="3" color={color} error={error}>
      <AntdCheckbox
        onChange={handleChange}
        checked={checked}
        disabled={disabled}
        defaultChecked={defaultChecked}
      >
        {typeof label === 'string' ? (
          <T.Body16 m="0" ml="2" color={error ? 'error' : 'gray'}>
            {label}
          </T.Body16>
        ) : (
          label
        )}
      </AntdCheckbox>
      {error && (
        <T.Body16 color="error" m="0" mt="1">
          {error}
        </T.Body16>
      )}
    </S.Field>
  );
};

export default Checkbox;
