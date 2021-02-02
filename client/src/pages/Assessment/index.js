import { useState, useEffect } from 'react';
import { useParams, useHistory, Switch } from 'react-router-dom';
import ProgressBar from '../../components/ProgressBar';

import { getPerc, tidyPostcode, findPostcode } from '../../helpers';

import { navRoutes } from '../../constants';
import {
  skillAreasCodes as SAC,
  learningPaths,
} from '../../constants/data-types';
import { questionsForSkills, decideSkillAreaLabel } from './Questions/data';

import { Skills, SkillAreas } from '../../api-calls';

import { skillAreasCodes } from '../../constants/data-types';
import { INVALID_POSTCODE } from '../../validation/err-msgs';

// QUESTIONS
import FlowQ from './Questions/FlowQ';
import SkillAreaQ from './Questions/SkillAreaQ';
import GeneralQ from './Questions/GeneralQ';
import PostcodeQ from './Questions/PostcodeQ';

const initFormState = {
  flow: '',
  skillAreas: [],
  totalQs: 15,
  currentStep: '1',
  totalSkillsToLearn: [],
  possibleSkills: [],
  skillsUserHas: [],
  skillsUserDoesntHave: [],
  questionsAsked: [],
  postcode: '',
};

const Assessment = () => {
  const { step } = useParams();
  const numStep = Number(step);
  const history = useHistory();

  const [formState, setFormState] = useState(initFormState);
  const [currentQ, setCurrentQ] = useState(null);
  const [outUK, setOutUK] = useState(false);
  const [allBasicSkills, setAllBasicSkills] = useState([]);
  const [allSkillAreas, setAllSkillAreas] = useState([]);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const individValidation = () => {
    switch (formState.currentStep) {
      case '1':
        if (!formState.flow) return { flow: 'Please select an option' };
        break;
      case '2':
        if (formState.skillAreas.length < 1)
          return { skillAreas: 'Please select at least one task' };
        break;
      default:
        return setErrors({});
    }
  };

  const handlePostcodeCheckbox = (checked) => {
    setOutUK(checked);
  };

  const handlePostcode = ({ target: { value } }) => {
    setFormState({ ...formState, postcode: value });
  };

  const storeAssessmentIntoStorage = (cleanPostcode) => {
    localStorage.setItem(
      'assessment',
      JSON.stringify({ ...formState, postcode: cleanPostcode })
    );
  };

  const clearAssessmentFromStorage = () => {
    localStorage.removeItem('assessment');
  };

  const getAssessmentFromStorage = () => {
    const assessment = JSON.parse(localStorage.getItem('assessment'));
    if (assessment) {
      setFormState(assessment);
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    const { postcode } = formState;
    const cleanPostcode = tidyPostcode(postcode);
    const checkPostcode = outUK ? cleanPostcode : findPostcode(cleanPostcode);

    if (checkPostcode) {
      storeAssessmentIntoStorage(cleanPostcode);
      history.push({
        pathname: navRoutes.VOLUNTEER.DASHBOARD,
        state: { assessment: { ...formState, postcode: cleanPostcode } },
      });
    } else {
      setErrors({ postcode: INVALID_POSTCODE });
    }
    setLoading(false);
  };

  const getNextSkill = (area) => {
    const { possibleSkills, totalQs, currentStep } = formState;
    if (area) {
      return possibleSkills.find(({ skillAreas }) => skillAreas.includes(area));
    }
    // evenly distribute as much as possible between selected areas
    const qPerArea = Math.floor((totalQs - 2) / skillAreas.length);
    const i = Math.floor(currentStep / qPerArea);
    if (skillAreas[i]) {
      return possibleSkills.find(({ skillAreas }) =>
        skillAreas.includes(skillAreas[i])
      );
    }
    return possibleSkills[0];
  };

  const pickQuestion = () => {
    const {
      flow,
      possibleSkills,
      skillsUserDoesntHave,
      questionsAsked,
    } = formState;

    // if no qs left push on to postcode or reset
    if (possibleSkills.length === 0) {
      const reset = questionsAsked.length === 0;
      if (reset)
        return history.push(
          navRoutes.GENERAL.ASSESSMENT_STEP.replace(':step', 1)
        );
      return;
    }

    // handle if user is going back and forth
    if (questionsAsked[numStep - 3]) {
      return setCurrentQ(questionsAsked[numStep - 3]);
    }

    // FIRST ASK BASIC Qs
    if (numStep < 5 || (flow === learningPaths.BASIC && numStep < 10)) {
      const nextSkill = getNextSkill(SAC.BASICS);
      const nextQuestion =
        questionsForSkills[nextSkill.code] &&
        questionsForSkills[nextSkill.code][0];
      return setCurrentQ(nextQuestion);
    }

    if (flow === learningPaths.IMPROVE) {
      // check if user needs more basic qs
      const basicLacking = skillsUserDoesntHave.find((skill) =>
        allBasicSkills.includes(skill)
      );
      if (basicLacking && basicLacking.length > 0) {
        setFormState({ ...formState, flow: learningPaths.BASIC });
        const nextSkill = getNextSkill(SAC.BASICS);
        const nextQuestion =
          questionsForSkills[nextSkill.code] &&
          questionsForSkills[nextSkill.code][0];
        return setCurrentQ(nextQuestion);
      }
    }

    // otherwise pick q from other skill areas
    const nextSkill = getNextSkill();
    const nextQuestion =
      questionsForSkills[nextSkill.code] &&
      questionsForSkills[nextSkill.code][0];

    return setCurrentQ(nextQuestion);
  };

  const decideSkills = (question, answer, state) => {
    const {
      skillsUserHas,
      skillsUserDoesntHave,
      possibleSkills,
      questionsAsked,
    } = formState;
    const newSkills = [];
    const newSkillsToLearn = [];

    if (question.type === 'optionsEqualSkills') {
      const answerValues = answer
        ? answer.map((_answer) => _answer && _answer.value)
        : [];
      question.options.forEach((opt) => {
        if (answerValues.includes(opt.value)) {
          newSkills.push(opt.value);
        } else {
          newSkillsToLearn.push(opt.value);
        }
      });
    }

    if (
      ['singleSkillPoints', 'slider', 'singleSkillPointsMultiOption'].includes(
        question.type
      )
    ) {
      if (answer) {
        newSkills.push(question.skills[0]);
      } else newSkillsToLearn.push(question.skills[0]);
    }

    if (
      question.type === 'multiSkillMatrix' ||
      question.type === 'multiSkillPoints'
    ) {
      const requiredSkills = Object.keys(question.requiredPoints);
      requiredSkills.forEach((skill) => {
        if (answer[skill].totalPoints >= question.requiredPoints[skill]) {
          newSkills.push(skill);
        } else {
          newSkillsToLearn.push(skill);
        }
      });
    }

    if (question.type === 'uniquePassword') {
      if (answer) {
        newSkills.push(question.skills[0]);
      } else {
        newSkillsToLearn.push(question.skills[0]);
      }
    }

    const updatedHas = [
      ...new Set([
        ...skillsUserHas.filter((_skill) => !newSkillsToLearn.includes(_skill)),
        ...newSkills,
      ]),
    ];
    const updatedHasnt = [
      ...new Set([
        ...skillsUserDoesntHave.filter((_skill) => !newSkills.includes(_skill)),
        ...newSkillsToLearn,
      ]),
    ];

    const updatedPossible = possibleSkills.filter(
      ({ code }) => !updatedHas.includes(code) && !updatedHasnt.includes(code)
    );
    const newQ = numStep > 2 && !questionsAsked[numStep - 3];
    const qsToStore = newQ
      ? [...questionsAsked, { ...question, state }]
      : questionsAsked.map((q, i) =>
          i === numStep - 3 ? { ...question, state } : q
        );

    setFormState({
      ...formState,
      skillsUserHas: updatedHas,
      skillsUserDoesntHave: updatedHasnt,
      possibleSkills: updatedPossible,
      questionsAsked: qsToStore,
    });

    nextQ();
  };

  const getSkills = async () => {
    const skillCodes = formState.skillAreas.map((area) => area.code);

    const { data, error } = await Skills.getSkills({
      areas: [skillAreasCodes.BASICS, ...skillCodes],
      type: 'areas',
    });

    if (error) {
      return setErrors({ skillAreas: `Error getting skills: ${error}` });
    }

    const allBasicSkills = data
      .filter(
        ({ skillAreas }) =>
          skillAreas && skillAreas.includes(skillAreasCodes.BASICS)
      )
      .map(({ code }) => code);

    // reset in case user has stored assessment and is re-doing it and remove assessment from storage
    clearAssessmentFromStorage();
    setFormState({
      ...formState,
      possibleSkills: data,
      totalSkillsToLearn: data,
      skillsUserHas: [],
      skillsUserDoesntHave: [],
      questionsAsked: [],
    });
    setAllBasicSkills(allBasicSkills);
    history.push(
      navRoutes.GENERAL.ASSESSMENT_STEP.replace(':step', Number(step) + 1)
    );
  };

  const decideFlow = (option) => {
    setErrors({});
    setFormState({ ...formState, flow: option.value });
  };

  const decideSkillAreas = (areas) => {
    setErrors({});
    setFormState({ ...formState, skillAreas: areas });
  };

  const nextQ = () => {
    const error = individValidation();
    if (error) return setErrors(error);

    if (step === '2') {
      return getSkills();
    }
    setErrors({});

    history.push(
      navRoutes.GENERAL.ASSESSMENT_STEP.replace(':step', Number(step) + 1)
    );
  };

  const decidePath = (num) =>
    navRoutes.GENERAL.ASSESSMENT_STEP.replace(':step', num);

  const decidePostcodePath = () => {
    if (formState.possibleSkills.length === 0 && Number(step) > 3) {
      // set path to question after last question
      const num = questionsAsked.length + 3;
      return decidePath(num);
    } else return decidePath(15);
  };

  useEffect(() => {
    setFormState({ ...formState, currentStep: step });
    if (numStep > 2 && numStep < 15) {
      pickQuestion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  useEffect(() => {
    getAssessmentFromStorage();

    const getSkillAreas = async () => {
      const { data, error } = await SkillAreas.getSkillAreas();
      if (error) {
        return setErrors({
          skillAreas: 'Sorry, was not able to get tasks from server.',
        });
      }
      const updatedAreas = data
        .filter((area) => area.code !== skillAreasCodes.BASICS)
        .map((area) => ({
          ...area,
          label: decideSkillAreaLabel(area.code, area.title),
          value: area.title,
        }));
      setAllSkillAreas(updatedAreas);
    };

    getSkillAreas();
  }, []);

  const {
    totalQs,
    flow,
    currentStep,
    skillAreas,
    questionsAsked,
    postcode,
  } = formState;

  return (
    <>
      <ProgressBar
        percent={getPerc(currentStep - 1, totalQs)}
        steps={totalQs}
        currentLocation={`Question ${step}`}
      />
      <Switch>
        <FlowQ
          exact
          path={decidePath(1)}
          decideFlow={decideFlow}
          selected={{ value: flow }}
          nextQ={nextQ}
          error={errors.flow}
        />
        <SkillAreaQ
          exact
          path={decidePath(2)}
          decideSkillAreas={decideSkillAreas}
          selected={skillAreas}
          nextQ={nextQ}
          allSkillAreas={allSkillAreas}
          error={errors.skillAreas}
        />
        <PostcodeQ
          exact
          path={decidePostcodePath()}
          handlePostcode={handlePostcode}
          handlePostcodeCheckbox={handlePostcodeCheckbox}
          postcode={postcode}
          outUK={outUK}
          handleSubmit={handleSubmit}
          loading={loading}
          errors={errors}
        />
        <GeneralQ
          decideSkills={decideSkills}
          nextQ={nextQ}
          question={currentQ}
          oldQ={questionsAsked[numStep - 3]}
        />
      </Switch>
    </>
  );
};

export default Assessment;
