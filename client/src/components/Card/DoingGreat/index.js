import * as S from './style';
import * as T from '../../Typography';
import Icon from '../../Icon';

const HelpOut = ({ title, text, path, pathLabel, color = 'blue', icon }) => {
  const createTextArr = text.split('. ');
  return (
    <S.Wrapper color={color}>
      <S.IconWrapper color={color}>
        <Icon
          icon={icon.icon}
          color={icon.color}
          strokeColor={icon.strokeColor}
          m="0 auto"
          width={80}
          height={icon.height}
        />
      </S.IconWrapper>
      <S.Content>
        {title && (
          <T.BodyB color="black" m="0" mb="1">
            {title}
          </T.BodyB>
        )}
        {text &&
          createTextArr.map((sentence) => (
            <T.BodyR color="gray" m="0">
              {text}
            </T.BodyR>
          ))}
      </S.Content>
    </S.Wrapper>
  );
};

export default HelpOut;
