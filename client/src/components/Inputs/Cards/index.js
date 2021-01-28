import * as T from '../../Typography';
import * as CS from '../style';
import * as S from './style';

import { Row, Col } from '../../Grid';

const Cards = ({ options, selected, disabled, w, error, handleChange }) => {
  const notSelected = (value) => selected.value && selected.value !== value;

  return (
    <CS.Field w={w} disabled={disabled} mb="3">
      <Row ai="stretch">
        {options.map((option, i) => (
          <Col w={[4, 12, 6]} key={i} mb="3">
            <S.Card
              notSelected={notSelected(option.value)}
              selected={
                selected.value === option.value || selected === option.value
              }
              color={option.color}
              onClick={() => handleChange(option)}
              disabled={disabled}
              key={i}
            >
              <S.Header>
                <T.H5 color="white" m="0">
                  {option.title}
                </T.H5>
              </S.Header>
              <S.Inner>
                <T.BodyR color="black" m="0" mb="4" mt="2">
                  {option.description}
                </T.BodyR>
                {option.helper && (
                  <T.Body16 color="liteGray" m="0" mb="4">
                    {option.helper}
                  </T.Body16>
                )}
              </S.Inner>
            </S.Card>
          </Col>
        ))}
      </Row>
      {error && (
        <T.Body16 color="error" m="0" mt="1" ml="12px">
          {error}
        </T.Body16>
      )}
    </CS.Field>
  );
};

export default Cards;
