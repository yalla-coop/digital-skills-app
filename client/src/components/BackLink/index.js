import { useHistory } from 'react-router-dom';

import * as T from '../Typography';
import Icon from '../Icon';

import * as S from './style';

function BackLink() {
  const history = useHistory();
  const goBack = () => history.goBack();

  return (
    <S.Wrapper onClick={goBack}>
      <Icon icon="leftRow" width={16} height={16} />
      <T.Body16B ml="1" as="span">
        Back
      </T.Body16B>
    </S.Wrapper>
  );
}

export default BackLink;
