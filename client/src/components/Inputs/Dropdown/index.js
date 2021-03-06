import { useState } from 'react';
import { Select as AntdSelect } from 'antd';
import * as T from '../../Typography';
import * as S from './style';
import { colors } from '../../../theme/index';
import Icon from '../../Icon';

const { Option: AntdOption, OptGroup: AntdOptGroup } = AntdSelect;

const Dropdown = ({
  handleChange,
  label,
  color,
  placeholder = 'Select...',
  error,
  isOptional,
  helper,
  w,
  disabled,
  options,
  groupedOptions,
  selected,
  multi,
  matrix,
  margins = {},
  big,
  outline,
}) => {
  const [open, setOpen] = useState(false);
  const [focus, setFocus] = useState(false);

  const decideColor = () => {
    if (error) return 'error';
    return color;
  };

  const isSelected = (option) =>
    selected === option || (selected && selected.toString().includes(option));

  const renderOptions = () => {
    if (groupedOptions) {
      return options.map(({ groupLabel, options: _options }) => (
        <AntdOptGroup
          label={
            <T.Body16B color="teal" m="0" mb="2" mt="3">
              {groupLabel}
            </T.Body16B>
          }
          key={groupLabel}
        >
          {_options.map((opt) => (
            <AntdOption
              key={`${groupLabel}_${opt.label}`}
              value={opt.value}
              points={opt.points}
              style={{
                fontSize: '1rem',
                fontWeight: 'normal',
                backgroundColor: isSelected(opt.value)
                  ? colors.litestGray
                  : 'white',
                padding: '0.5rem 1rem',
                color: colors.black,
                display: 'flex',
                alignItems: 'center',
                whiteSpace: 'normal',
              }}
            >
              {opt.label}
            </AntdOption>
          ))}
        </AntdOptGroup>
      ));
    }
    return options.map(({ value: _value, label: _label, points: _points }) => (
      <AntdOption
        key={matrix ? `${label}_${_value}` : _label}
        value={_value}
        label={_label}
        points={_points}
        style={{
          fontSize: '1rem',
          backgroundColor: isSelected(_value) ? colors.litestGray : 'white',
          padding: '0.5rem 1rem',
          color: colors.black,
          display: 'flex',
          alignItems: 'center',
          whiteSpace: 'normal !important',
          height: 'auto',
        }}
      >
        {_label}
      </AntdOption>
    ));
  };

  const handleSearch = (input, option) => {
    return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  };

  return (
    <S.Field
      w={w}
      disabled={disabled}
      open={open}
      focus={focus}
      multi={multi}
      color={decideColor()}
      matrix={matrix}
      big={big}
      outline={outline}
      mb={(margins && margins.mb) || '3'}
      {...margins}
    >
      {label && (
        <S.Label htmlFor={label} matrix={matrix}>
          {big ? (
            <T.H5 color={decideColor()} m="0" mb="3" ml="1">
              {label}
            </T.H5>
          ) : (
            <T.Body16B color={decideColor()} m="0" mb="1" ml="1">
              {label}
            </T.Body16B>
          )}
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
        </S.Label>
      )}
      <S.Answer>
        <AntdSelect
          value={selected || undefined}
          onSelect={multi ? undefined : handleChange}
          onChange={multi ? handleChange : undefined}
          mode={multi && 'multiple'}
          placeholder={placeholder || 'Type here...'}
          showArrow
          onDropdownVisibleChange={(open) => setOpen(open)}
          dropdownStyle={S.menuStyle}
          menuItemSelectedIcon={
            <Icon icon="tick" width="24" height="24" color="teal" />
          }
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          filterOption={handleSearch}
        >
          {renderOptions()}
        </AntdSelect>
        {error && (
          <T.Body16 color="error" m="0" mt="1">
            {error}
          </T.Body16>
        )}
      </S.Answer>
    </S.Field>
  );
};

export default Dropdown;
