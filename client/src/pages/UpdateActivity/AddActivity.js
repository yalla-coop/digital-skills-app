import React from 'react';
import BackLink from '../../components/BackLink';
import { Row, Col } from '../../components/Grid';
import Button from '../../components/Button';
import { useMediaQuery } from 'react-responsive';
import * as T from '../../components/Typography';
import theme from '../../theme';

import {
  BasicInput as Input,
  Dropdown,
  Textarea,
} from '../../components/Inputs';

const AddActivity = ({
  state,
  errors,
  handleChange,
  handleSubmit,
  isLoading,
  skills,
  levels,
}) => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${theme.breakpoints.mobile})`,
  });

  return (
    <>
      <Row>
        <Col w={[4, 6, 12]}>
          <BackLink />
        </Col>
      </Row>
      <Row>
        <Col w={[4, 6, 12]}>
          {isMobile ? (
            <T.H2 mt="4" mb="4">
              Add activity
            </T.H2>
          ) : (
            <T.H3 mt="5" mb="6">
              Add activity
            </T.H3>
          )}
        </Col>
      </Row>
      <Row>
        <Col w={[4, 4, 4]}>
          <Dropdown
            label="Skill(s)"
            placeholder="Please select"
            multi
            name="skills"
            options={skills}
            margins={{ mb: '4' }}
            selected={state.skills}
            handleChange={(e) => handleChange('skills', e)}
            error={errors.skills}
          />
        </Col>
      </Row>
      <Row>
        <Col w={[4, 4, 4]}>
          <Input
            label="Activity title"
            placeholder="e.g. Using Search Engines"
            name="title"
            value={state.title}
            handleChange={({ target: { value } }) =>
              handleChange('title', value)
            }
            margins={{ mb: '4' }}
            error={errors.title}
          />
        </Col>
        <Col w={[4, 4, 4]}>
          <Dropdown
            label="Difficulty level"
            name="level"
            placeholder="Please select"
            options={levels}
            margins={{ mb: '4' }}
            selected={state.level}
            handleChange={(e) => handleChange('level', e)}
            error={errors.level}
          />
        </Col>
      </Row>
      <Row>
        <Col w={[4, 4, 4]}>
          <Input
            label="Estimated time to complete"
            helper="(minutes)"
            name="time"
            placeholder="e.g. 10 minutes"
            value={state.time}
            handleChange={({ target: { value } }) =>
              handleChange('time', value)
            }
            margins={{ mb: '4' }}
            error={errors.time}
          />
        </Col>
        <Col w={[4, 4, 4]}>
          <Textarea
            label="Activity description"
            name="description"
            placeholder="Type here (c. 30 to 200 words)"
            value={state.description}
            handleChange={({ target: { value } }) =>
              handleChange('description', value)
            }
            margins={{ mb: '4' }}
            rows={4}
            error={errors.description}
          />
        </Col>
      </Row>
      <Row>
        <Col w={[4, 4, 4]}>
          <Input
            label="Link to resource"
            name="link"
            placeholder="e.g. www.searchenginelesson.com"
            value={state.link}
            handleChange={({ target: { value } }) =>
              handleChange('link', value)
            }
            margins={{ mbM: '4' }}
            error={errors.link}
          />
        </Col>
        <Col w={[4, 4, 4]}>
          <Input
            label="Who created the resource?"
            name="creator"
            placeholder="e.g. GCF Global"
            value={state.creator}
            handleChange={({ target: { value } }) =>
              handleChange('creator', value)
            }
            margins={{ mbM: '4' }}
            error={errors.creator}
          />
        </Col>
      </Row>
      <Row mtM="4" mt="7" mb="8" mbM="6">
        <Col w={[4, 4, 4]}>
          <Button handleClick={handleSubmit} loading={isLoading}>
            Submit
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default AddActivity;
