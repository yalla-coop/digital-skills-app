import React from 'react';
import { Col, Row } from '../../../../components/Grid';
import { BasicInput as Input, Checkbox } from '../../../../components/Inputs';
import Button from '../../../../components/Button';
import theme from '../../../../theme';
import { navRoutes } from '../../../../constants';

import * as T from '../../../../components/Typography';

import * as S from './style';

const PostcodeQ = ({
  handlePostcode,
  handlePostcodeCheckbox,
  postcode,
  outUK,
  handleSubmit,
  loading,
  errors,
}) => {
  return (
    <>
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
              handleChange={handlePostcode}
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
            handleChange={handlePostcodeCheckbox}
          />
        </Col>
      </Row>
      <Row mt="7">
        <Col w={[4, 6, 4]}>
          <Button
            variant="primary"
            handleClick={handleSubmit}
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

export default PostcodeQ;
