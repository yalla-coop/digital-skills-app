import React from 'react';
import { useHistory } from 'react-router-dom';
import * as T from '../../components/Typography';
import * as S from './style';
import { navRoutes as R } from '../../constants';
import Button from '../../components/Button';
import ViewActivityLink from '../../components/ViewActivityLink';

// type is add or edit
const SuccessUpdateActivity = ({ activityId, type = 'edit' }) => {
  const history = useHistory();
  const handleClick = () => {
    return history.push(R.HQ.MANAGE_SKILLS);
  };

  const AddContent = (
    <S.Container>
      <T.BodyR>
        You've added a new activity! Edit it at any time in the
        <S.Link onClick={() => handleClick('manageSkills')}>
          {' '}
          Manage skills{' '}
        </S.Link>{' '}
        section
      </T.BodyR>
    </S.Container>
  );

  const EditContent = (
    <S.Container>
      <T.BodyR>
        You've edited a new activity! You can edit it again at any time in the{' '}
        <S.Link onClick={() => handleClick('manageSkills')}>
          {' '}
          Manage skills{' '}
        </S.Link>{' '}
        section
      </T.BodyR>
    </S.Container>
  );

  return (
    <S.Wrapper>
      <S.Container style={{ flexDirection: 'column' }}>
        <T.H3 color="black" mb="5">
          Success!
        </T.H3>
        {type === 'edit' ? EditContent : AddContent}
        <ViewActivityLink activityId={activityId} />
        <Button handleClick={() => history.goBack()}>Go back</Button>
      </S.Container>
    </S.Wrapper>
  );
};

export default SuccessUpdateActivity;
