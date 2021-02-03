import BackLink from '../../components/BackLink';
import { Row, Col } from '../../components/Grid';
import Button from '../../components/Button';
import * as T from '../../components/Typography';

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
}) => {
  return (
    <>
      <Row>
        <Col w={[4, 6, 12]}>
          <BackLink />
        </Col>
      </Row>
      <Row>
        <Col w={[4, 6, 12]}>
          <T.H2 mt="5" mtM="4" mb="6" mbM="4">
            Add activity
          </T.H2>
        </Col>
      </Row>
      <Row>
        <Col w={[4, 6, 4]}>
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
        <Col w={[4, 6, 4]}>
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
        <Col w={[4, 6, 4]}>
          <Dropdown
            label="Difficulty level"
            name="difficulty"
            placeholder="Please select"
            options={[
              { label: 1, value: 1 },
              { label: 2, value: 2 },
              { label: 3, value: 3 },
              { label: 4, value: 4 },
            ]}
            margins={{ mb: '4' }}
            selected={state.difficulty}
            handleChange={(e) => handleChange('difficulty', e)}
            error={errors.difficulty}
          />
        </Col>
      </Row>
      <Row>
        <Col w={[4, 6, 4]}>
          <Input
            label="Estimated time to complete"
            helper="(minutes)"
            name="completionTime"
            placeholder="e.g. 10 minutes"
            value={state.completionTime}
            handleChange={({ target: { value } }) =>
              handleChange('completionTime', value)
            }
            type="number"
            margins={{ mb: '4' }}
            error={errors.completionTime}
            min={0}
          />
        </Col>
        <Col w={[4, 6, 4]}>
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
        <Col w={[4, 6, 4]}>
          <Input
            label="Link to resource"
            name="resourceLink"
            placeholder="e.g. www.searchenginelesson.com"
            value={state.resourceLink}
            handleChange={({ target: { value } }) =>
              handleChange('resourceLink', value)
            }
            margins={{ mbM: '4' }}
            error={errors.resourceLink}
          />
        </Col>
        <Col w={[4, 6, 4]}>
          <Input
            label="Who created the resource?"
            name="resourceCreatedBy"
            placeholder="e.g. GCF Global"
            value={state.resourceCreatedBy}
            handleChange={({ target: { value } }) =>
              handleChange('resourceCreatedBy', value)
            }
            margins={{ mbM: '4' }}
            error={errors.resourceCreatedBy}
          />
        </Col>
      </Row>
      <Row mtM="4" mt="7" mb="8" mbM="6">
        <Col w={[4, 6, 4]}>
          <T.Body16B color="red">{errors.httpError}</T.Body16B>
          <Button handleClick={handleSubmit} loading={isLoading}>
            Submit
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default AddActivity;
