import * as CS from '../style';
import * as T from '../../Typography';
import Button from '../../Button';
import Icon from '../../Icon';

const HelpOut = ({ title, text, path, pathLabel, color = 'purple', icon }) => {
  const createTextArr = text.split('. ');
  return (
    <CS.Wrapper color={color}>
      {title && (
        <T.H5 color="white" m="0" mb="3">
          {title}
        </T.H5>
      )}

      <CS.Content mb={path && '4'} horizontal>
        {icon && (
          <Icon
            icon={icon.icon}
            width={100}
            height={124}
            color={icon.color}
            strokeColor={icon.strokeColor}
            m="0 1rem 0 -20px"
          />
        )}
        {text &&
          createTextArr.map((sentence, i) => (
            <T.BodyR
              color="white"
              m="0"
              mb="3"
              style={{ maxWidth: icon && '60%' }}
              key={i}
            >
              {sentence}.
            </T.BodyR>
          ))}
      </CS.Content>
      {path && (
        <Button bgColor={color} to={path}>
          {pathLabel || 'Click here'}
        </Button>
      )}
    </CS.Wrapper>
  );
};

export default HelpOut;
