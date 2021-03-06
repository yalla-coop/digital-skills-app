import * as CS from '../style';
import * as T from '../../Typography';
import Button from '../../Button';
import Icon from '../../Icon';

const CTA = ({
  title,
  text,
  path,
  pathLabel,
  color = 'blue',
  icon,
  align,
  handleClick,
}) => {
  // text can be passed as array
  let createTextArr = text;
  if (typeof text === 'string') {
    createTextArr = text.split('. ');
  }
  return (
    <CS.Wrapper color={color}>
      <T.H5
        color="white"
        m="0"
        mb={icon ? '4' : '3'}
        style={{ textAlign: icon ? 'center' : align || 'left' }}
      >
        {title}
      </T.H5>
      {icon && (
        <Icon
          icon={icon.icon}
          width={80}
          height={80}
          color={icon.color}
          strokeColor={icon.strokeColor}
          m="0 auto 1rem auto"
        />
      )}
      <CS.Content mb="4">
        {text &&
          createTextArr.map((sentence, i) => (
            <T.BodyR color="white" m="0" mb="3" key={i}>
              {sentence}.
            </T.BodyR>
          ))}
      </CS.Content>
      {(path || handleClick) && (
        <Button bgColor={color} to={path} handleClick={handleClick}>
          {pathLabel || 'Click here'}
        </Button>
      )}
    </CS.Wrapper>
  );
};

export default CTA;
