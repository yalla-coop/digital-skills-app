import React, { useState } from 'react';
import { Col, Row } from '../../components/Grid';
import ProgressBar from '../../components/ProgressBar';
import { BasicInput as Input, Checkbox } from '../../components/Inputs';
import Button from '../../components/Button';
import theme from '../../theme';
import { tidyPostcode, findPostcode } from '../../helpers';
import { navRoutes } from '../../constants';
import { INVALID_POSTCODE } from '../../validation/err-msgs';

import * as T from '../../components/Typography';

import * as S from './style';
import { useHistory } from 'react-router-dom';

const PostcodePage = ({
  steps = 14,
  currentLocation = 'Question 18',
  percent = 99,
}) => {
  const [postcode, setPostcode] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [outUK, setOutUK] = useState(false);

  const history = useHistory();

  const handleChange = ({ target: { value } }) => {
    setPostcode(value);
  };

  const handleCheckbox = (checked) => {
    setOutUK(checked);
  };

  const handleClick = async () => {
    const cleanPostcode = tidyPostcode(postcode);
    const checkPostcode = outUK ? cleanPostcode : findPostcode(cleanPostcode);

    if (checkPostcode) {
      setLoading(true);
      setErrors({});
      try {
        /*
        send the postcode with user id to the backend
        */
        history.push(navRoutes.VOLUNTEER.RESULTS);
      } catch {
        setErrors({ server: 'something went wrong !' });
      } finally {
        setLoading(false);
      }
    } else {
      setErrors({ postcode: INVALID_POSTCODE });
    }
  };
  return (
    <>
      <Row>
        <Col w={[4, 6, 12]}>
          <ProgressBar
            currentLocation={currentLocation}
            steps={steps}
            percent={percent}
          />
        </Col>
      </Row>
      <Row mt="7">
        <Col w={[4, 6, 12]}>
          <T.BodyLB color="black">
            Nearly there! To finish, please enter your postcode
          </T.BodyLB>
        </Col>
      </Row>
      <Row mt="4">
        <Col w={[4, 6, 12]}>
          <T.Body16 color="gray">
            We collect data on postcodes so we can monitor digital skills trends
            across the UK
          </T.Body16>
        </Col>
      </Row>
      <Row mt="5">
        <Col w={[4, 6, 12]}>
          <T.Body16 color="gray">
            Rest assured, it's for reporting purposes only and is anonymised
          </T.Body16>
        </Col>
      </Row>
      <Row mt="5">
        <Col w={[4, 6, 12]}>
          <T.Body16 color="gray">
            For full details on the data we collect, please read our{' '}
            <T.Link16
              color="blue"
              href={navRoutes.EXTERNAL.TERMS_AND_CONDITIONS}
            >
              Terms and Conditions
            </T.Link16>
          </T.Body16>
        </Col>
      </Row>
      <Row mt="6">
        <Col w={[4, 4, 4]}>
          <S.InputContainer>
            <Input
              name="postcode"
              label="Postcode"
              error={errors.postcode}
              placeholder=" "
              value={postcode}
              handleChange={handleChange}
            />
          </S.InputContainer>
        </Col>
      </Row>
      <Row mt="1">
        <Col w={[4, 6, 12]}>
          <Checkbox
            label="Tick this box if your postcode is outside the UK."
            defaultChecked={false}
            checked={outUK}
            handleChange={handleCheckbox}
          />
        </Col>
      </Row>
      <Row mt="7">
        <Col w={[4, 6, 4]}>
          <Button
            variant="primary"
            handleClick={handleClick}
            loading={loading}
            style={{ borderColor: theme.colors.blue }}
          >
            Get my results
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default PostcodePage;
