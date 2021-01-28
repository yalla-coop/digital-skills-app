import { useState } from 'react';
import * as CS from '../style';
import * as T from '../../Typography';
import * as S from './style';
import Button from '../../Button';
import { BasicInput } from '../../Inputs';

const Newsletter = ({
  color = 'medPurple',
  hideInput,
  btnText,
  customFunc,
  extLink,
}) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Do something with the email');
  };

  return (
    <CS.Wrapper color={color}>
      <T.H5 color="white" m="0" mb="3">
        Join our newsletter
      </T.H5>
      <T.BodyR color="white" m="0" mb="3">
        Interested in receiving resources and tips on how to support others in
        the community?
      </T.BodyR>
      {!hideInput && (
        <BasicInput
          label="Email"
          placeholder=""
          value={value}
          handleChange={handleChange}
          color="white"
          outline
          margins={{ mb: '4' }}
        />
      )}
      {extLink ? (
        <S.BtnLink href={extLink} target="_blank" size="large" bgColor="none">
          <S.Label>{btnText}</S.Label>
        </S.BtnLink>
      ) : (
        <Button bgColor={color} handleClick={customFunc || handleSubmit}>
          {btnText || 'Subscribe'}
        </Button>
      )}
    </CS.Wrapper>
  );
};

export default Newsletter;
