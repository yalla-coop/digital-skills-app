import styled from '@emotion/styled';

import { Button } from '../../components';
import * as T from '../../components/Typography';

export const Wrapper = styled.div`
  box-shadow: ${({ theme }) => theme.shadows.light};
  padding: ${({ theme }) => theme.spacings[4]};
  margin-bottom: ${({ theme }) => theme.spacings[5]};

  ${({ theme }) => theme.media.mobile} {
    margin-top: ${({ theme }) => theme.spacings[3]};
    margin-bottom: 0;
  }
  button {
    border: none;
  }
`;

export const ExtLink = styled(Button)``;

function Card(props) {
  const {
    titleNum,
    title,
    desc,
    note,
    linkTxt,
    exLinkUrl,
    handleCompleteActivity,
    linkBgColor,
    isCompleted,
  } = props;
  return (
    <Wrapper>
      <T.H6 mb="2">
        {titleNum}. {title}
      </T.H6>
      <T.BodyR mb={note ? '3' : '4'} color="gray">
        {desc}
      </T.BodyR>
      <T.BodyB mb="3" color="navy" style={{ fontStyle: 'italic' }}>
        {note}
      </T.BodyB>
      {exLinkUrl ? (
        <ExtLink
          as="a"
          href={exLinkUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkTxt}
        </ExtLink>
      ) : (
        <Button
          disabled={isCompleted}
          handleClick={handleCompleteActivity}
          bgColor={linkBgColor}
          title={isCompleted && 'This activity already completed'}
        >
          {linkTxt}
        </Button>
      )}
    </Wrapper>
  );
}

export default Card;
