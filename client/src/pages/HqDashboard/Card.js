import styled from '@emotion/styled';
import * as T from '../../components/Typography';
import { Button } from '../../components';

const Wrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings[6]};
`;

function Card(props) {
  const { title, txt, linkTxt, linkUrl } = props;
  return (
    <Wrapper>
      <T.H5 mb="3">{title}</T.H5>
      <T.BodyR mb="3" color="gray">
        {txt}
      </T.BodyR>
      <Button variant="primary" to={linkUrl} bgColor="blue">
        {linkTxt}
      </Button>
    </Wrapper>
  );
}

export default Card;
