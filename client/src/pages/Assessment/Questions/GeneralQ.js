import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Row, Col } from '../../../components/Grid';
import * as T from '../../../components/Typography';
import { breakpoints } from '../../../theme';
import Loading from '../../../components/Loading';

import {
  Options,
  BasicInput,
  Matrix,
  Slider,
} from '../../../components/Inputs';
import Button from '../../../components/Button';

const GeneralQ = ({ question, decideSkills, error, oldQ }) => {
  const [questionState, setQuestionState] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState({});

  const isMobile = useMediaQuery({
    query: `(max-width: ${breakpoints.mobile})`,
  });

  const questionValidation = () => {
    switch (question.type) {
      case 'multiSkillMatrix':
        return question.rows.reduce((acc, curr) => {
          if (!questionState.matrix || !questionState.matrix[curr.value])
            return { ...acc, [curr.value]: 'Please select an option' };
          return { ...acc };
        }, {});
      case 'singleSkillPoints':
        return !questionState.selected || questionState.selected.length < 1
          ? { error: 'Please select at least one option' }
          : {};
      default:
        return {};
    }
  };

  const handleClick = () => {
    const errors = questionValidation();
    const isValid = Object.keys(errors).length === 0;
    if (isValid) {
      setErrors({});
      return decideSkills(question, questionState.answer, questionState);
    }
    setErrors(errors);
  };

  const handleAnswers = (answer) =>
    setQuestionState({ ...questionState, answer, selected: answer });

  const handlePassword = (e) => {
    const regex = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
    );
    const strongPassword = regex.test(e.target.value);
    setQuestionState({
      ...questionState,
      password: e.target.value,
      answer: strongPassword,
    });
  };

  const handleSlider = (index) => {
    const selectedOption = question.options[index];

    const hasPoints = selectedOption.value >= question.requiredPoints;
    setQuestionState({
      ...questionState,
      sliderInput: { ...selectedOption, key: index },
      answer: hasPoints,
    });
  };

  const handleSingleSkillPoints = (answer) => {
    setErrors({});
    const totalPoints = answer.reduce((a, b) => {
      return a + b.value;
    }, 0);
    const hasPoints = totalPoints >= question.requiredPoints;
    setQuestionState({
      ...questionState,
      selected: answer,
      answer: hasPoints,
    });
  };

  const handleMultiSkills = (answer) => {
    const skillObj = answer.reduce((acc, currAnswer) => {
      const skill = currAnswer.value;
      return {
        ...acc,
        [skill]: ((acc && acc[skill]) || 0) + currAnswer.points,
      };
    }, {});

    setQuestionState({ ...questionState, selected: answer, answer: skillObj });
  };

  const handleMultiSkillMatrix = (a, obj, row) => {
    const { matrix, answer } = questionState;

    const skillPointObj = row.skills.reduce((acc, currSkill) => {
      if (answer && answer[currSkill]) {
        const updatedSkill = {
          ...answer[currSkill],
          [row.value]: obj.points,
          totalPoints: 0,
        };

        const totalPoints = Object.values(updatedSkill).reduce((a, b) => {
          return a + b;
        }, 0);

        return {
          ...acc,
          [currSkill]: { ...updatedSkill, totalPoints },
        };
      }
      return {
        ...acc,
        [currSkill]: { [row.value]: obj.points, totalPoints: obj.points },
      };
    }, {});

    if (answer) {
      return setQuestionState({
        ...questionState,
        matrix: { ...matrix, [row.value]: a },
        answer: { ...answer, ...skillPointObj },
      });
    }
    setQuestionState({
      ...questionState,
      matrix: { ...matrix, [row.value]: a },
      answer: skillPointObj,
    });
  };

  const setInitSlider = (q) => {
    if (q.options.length % 2 === 0) return { ...q.options[0], key: 0 };
    const middleNum = Math.floor(q.options.length / 2);
    return { ...q.options[middleNum], key: middleNum };
  };

  useEffect(() => {
    if (question) {
      if (oldQ) {
        setQuestionState(oldQ.state);
      } else if (question.type === 'slider') {
        const initSlider = setInitSlider(question);
        setQuestionState({ sliderInput: initSlider });
      } else {
        setQuestionState({});
      }
      setLoaded(true);
    }
  }, [question, oldQ]);

  if (!loaded) return <Loading mt="6" w="100%" />;

  return (
    <>
      <Row mt={isMobile ? '4' : '7'} mb={isMobile ? '4' : '6'}>
        <Col w={[4, 12, 10]}>
          <T.BodyLB m="0" mb={question.type === 'optionsEqualSkills' && '3'}>
            {question.question}
          </T.BodyLB>
          {question.type === 'optionsEqualSkills' && (
            <T.Body16 color="gray">(select as many as you like)</T.Body16>
          )}
        </Col>
      </Row>
      {question.type === 'optionsEqualSkills' && (
        <Options
          selected={questionState.selected}
          handleChange={handleAnswers}
          options={question.options}
          error={error}
          multi
        />
      )}
      {question.type === 'uniquePassword' && (
        <Row>
          <Col w={[4, 10, 8]}>
            <BasicInput
              handleChange={handlePassword}
              value={questionState.password || ''}
              type="password"
              error={error}
              autoComplete="new-password"
            />
          </Col>
        </Row>
      )}
      {question.type === 'singleSkillPoints' && (
        <Options
          selected={questionState.selected}
          handleChange={handleSingleSkillPoints}
          options={question.options}
          error={errors.error}
        />
      )}
      {question.type === 'slider' && (
        <Row>
          <Col w={[4, 10, 8]}>
            <Slider
              selected={questionState.sliderInput || setInitSlider(question)}
              handleChange={handleSlider}
              options={question.options}
              error={error}
              showAnswer
            />
          </Col>
        </Row>
      )}
      {question.type === 'singleSkillPointsMultiOption' && (
        <Options
          selected={questionState.selected}
          handleChange={handleSingleSkillPoints}
          options={question.options}
          error={error}
          multi
        />
      )}
      {question.type === 'multiSkillPoints' && (
        <Options
          selected={questionState.selected}
          handleChange={handleMultiSkills}
          options={question.options}
          error={error}
        />
      )}
      {question.type === 'multiSkillMatrix' && (
        <Row>
          <Col w={[4, 12, 10]}>
            <Matrix
              selected={questionState.matrix || {}}
              handleChange={handleMultiSkillMatrix}
              options={question.options}
              rows={question.rows}
              errors={errors}
              mb={isMobile ? '4' : '7'}
            />
          </Col>
        </Row>
      )}

      <Row mt="5">
        <Col w={[4, 6, 4]}>
          <Button handleClick={handleClick}>Continue</Button>
        </Col>
      </Row>
    </>
  );
};

export default GeneralQ;
