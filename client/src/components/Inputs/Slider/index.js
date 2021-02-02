import { Slider as AntdSlider } from 'antd';
import * as T from '../../Typography';
import * as S from './style';
import * as CS from '../style';

const Slider = ({
  label,
  helper,
  isOptional,
  error,
  color,
  disabled,
  options = [],
  showAnswer,
  handleChange,
  selected,
  big,
  ...props
}) => {
  const decideColor = () => {
    if (error) return 'error';
    return color;
  };

  const optionObj = options.reduce((acc, post, i) => {
    return { ...acc, [i]: '' };
  }, {});

  const decideTextPosition = () => {
    const perc = Math.round((selected.key / (options.length - 1)) * 100);
    if (perc === 100) return { left: null, right: 0, align: 'right' };
    if (perc === 0) return { left: 0, right: null, align: 'left' };

    if (perc > 50)
      return { left: null, right: `${100 - perc - 15}%`, align: 'center' };
    if (perc < 50)
      return { left: `${perc - 15}%`, right: null, align: 'center' };

    // else in middle
    return { left: '35%', right: null, align: 'center' };
  };

  return (
    <S.Field disabled={disabled} {...props}>
      {label && (
        <CS.Label htmlFor={label}>
          {big ? (
            <T.BodyB color={decideColor() || 'navy'} m="0" mb="4" ml="1">
              {label}
            </T.BodyB>
          ) : (
            <T.Body16B color={decideColor() || 'navy'} m="0" mb="1" ml="1">
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
        </CS.Label>
      )}
      <AntdSlider
        disabled={disabled}
        marks={optionObj}
        max={options.length - 1}
        tooltipVisible={false}
        onChange={handleChange}
        value={selected.key}
      />
      {showAnswer && (
        <div
          style={{
            position: 'relative',
            height: '50px',
          }}
        >
          <T.Body16
            color="gray"
            style={{
              left: decideTextPosition().left,
              right: decideTextPosition().right,
              position: 'absolute',
              top: 0,
              width: `30%`,
              textAlign: decideTextPosition().align,
            }}
          >
            {selected.label}
          </T.Body16>
        </div>
      )}
      {error && (
        <T.Body16 color="error" m="0" mt="1">
          {error}
        </T.Body16>
      )}
    </S.Field>
  );
};

export default Slider;
