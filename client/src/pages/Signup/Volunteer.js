import { useReducer, useEffect, useRef } from 'react';
import isDeepEqual from 'fast-deep-equal/react';
import { useHistory } from 'react-router-dom';

import * as T from './../../components/Typography';
import * as S from './style';

import { BasicInput, Dropdown, Checkbox } from './../../components/Inputs';
import Button from './../../components/Button';

import { Organisations, Users } from './../../api-calls';

import validate from '../../validation/schemas/signup';
import { roles, navRoutes } from '../../constants';
import { useAuth } from '../../context/auth';
import { getAssessmentFromStorage } from '../../helpers/assessmentStorage';

const initialState = {
  fullName: '',
  email: '',
  password: '',
  organisationsOptions: [],
  organisationsIds: [],
  agreedOnTerms: false,
  postcode: '',
  skillsUserHas: [],
  skillAreas: [],
  httpError: '',
  validationErrs: {},
  submitAttempt: false,
};

function reducer(state, newState) {
  return { ...state, ...newState };
}

const cleanEmail = (email) => email.toLowerCase().trim();

const VolunteerSignup = ({ user, onLogin, onLogout, onCreateAccount }) => {
  const [state, setState] = useReducer(reducer, initialState);
  const history = useHistory();
  const { setUser } = useAuth();

  const {
    fullName,
    email,
    password,
    organisationsOptions,
    organisationsIds,
    agreedOnTerms,
    validationErrs,
    httpError,
    submitAttempt,
    postcode,
    skillsUserHas,
    skillAreas,
    selectedPath,
    assessmentScore,
  } = state;

  const orgsIdsRef = useRef(organisationsIds);

  if (!isDeepEqual(orgsIdsRef.current, organisationsIds)) {
    orgsIdsRef.current = organisationsIds;
  }

  useEffect(() => {
    const assessment = getAssessmentFromStorage();

    if (assessment) {
      const {
        flow,
        postcode,
        skillAreas,
        skillsUserHas,
        skillsUserDoesntHave,
        possibleSkills,
      } = assessment;
      const hasNum = skillsUserHas.length;

      const hasntNum = skillsUserDoesntHave.length;
      const totalNum = possibleSkills.length + hasNum + hasntNum;

      const perc = Math.floor((hasNum / totalNum) * 100);

      setState({
        postcode,
        selectedPath: flow,
        skillAreas,
        skillsUserHas,
        assessmentScore: perc,
      });
    }

    const getOrganisations = async () => {
      const { data, error } = await Organisations.getOrganisations();

      if (error) {
        setState({ httpError: error.message });
      } else {
        setState({
          organisationsOptions: data.map(({ id, name }) => ({
            label: name,
            value: id,
          })),
        });
      }
    };

    getOrganisations();
  }, []);

  useEffect(() => {
    if (submitAttempt) {
      validateForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    fullName,
    email,
    password,
    agreedOnTerms,
    postcode,
    orgsIdsRef.current,
    skillsUserHas,
    skillAreas,
  ]);

  const validateForm = () => {
    try {
      validate({
        role: roles.VOLUNTEER,
        email: cleanEmail(email),
        fullName,
        password,
        postcode,
        organisationsIds,
        agreedOnTerms,
      });
      setState({ validationErrs: {} });
      return true;
    } catch (error) {
      if (error.name === 'ValidationError') {
        setState({ validationErrs: error.inner });
      }
      return false;
    }
  };

  const handleSignup = async () => {
    const { data, error } = await Users.signup({
      role: roles.VOLUNTEER,
      email: cleanEmail(email),
      fullName,
      password,
      postcode,
      organisations: organisationsIds,
      selectedPath,
      assessmentScore,
      skillsUserHas,
      skillAreas,
    });

    if (error) {
      if (error.statusCode === 409) {
        setState({ validationErrs: { email: error.message } });
      } else {
        setState({ httpError: error.message });
      }
    } else {
      setUser(data);
      history.push(navRoutes.VOLUNTEER.RECOMMENDED_SKILLS);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ submitAttempt: true });

    const isValid = validateForm();
    if (isValid) {
      handleSignup();
    }
  };

  return (
    <S.Wrapper>
      <S.Content>
        <T.H3 mb="4">Sign up</T.H3>
        {/* ADD IN WHEN THERE ARE OTHER REASONS TO HAVE ACCOUNT
        OTHER THAN DOING THE DIGITAL TEST */}

        {/* <T.Body16 mb="5">
          Already have an account?{' '}
          <T.Link to={navRoutes.GENERAL.LOGIN}>Log in</T.Link>
        </T.Body16> */}
        <T.BodyR color="gray" mb="5">
          Create a free account to save your results, access activities in your
          own tailor made digital course and track how your digital score and
          skills improve!
        </T.BodyR>

        <BasicInput
          label="Name"
          placeholder=""
          margins={{ mt: '2', mb: '1' }}
          value={fullName}
          handleChange={(e) => setState({ fullName: e.target.value })}
          error={validationErrs.fullName}
        />
        <BasicInput
          label="Email"
          placeholder=""
          margins={{ mt: '2', mb: '1' }}
          type="email"
          value={email}
          handleChange={(e) => setState({ email: e.target.value })}
          error={validationErrs.email}
        />
        <BasicInput
          label="Password"
          placeholder=""
          margins={{ mt: '2', mb: '1' }}
          type="password"
          value={password}
          handleChange={(e) => setState({ password: e.target.value })}
          error={validationErrs.password}
        />
        <Dropdown
          label="Organisation(s) I volunteer for"
          placeholder="Please select"
          multi
          options={organisationsOptions}
          margins={{ mt: '2', mb: '1' }}
          selected={organisationsIds}
          handleChange={(e) => setState({ organisationsIds: e })}
          error={validationErrs.organisationsIds}
        />

        <Checkbox
          mt="5"
          checked={agreedOnTerms}
          label={
            <T.BodyR>
              I agree to the{' '}
              <T.Link to={navRoutes.EXTERNAL.TERMS_OF_USE}>Terms of Use</T.Link>
              . By signing up, I acknowledge the{' '}
              <T.Link to={navRoutes.EXTERNAL.PRIVACY_POLICY}>
                Privacy Policy
              </T.Link>
              .
            </T.BodyR>
          }
          handleChange={(e) => setState({ agreedOnTerms: e })}
          error={validationErrs.agreedOnTerms}
        />

        <T.Body16 mt="5" color="red">
          {httpError}
        </T.Body16>

        <Button variant="primary" bgColor="teal" handleClick={handleSubmit}>
          Sign up
        </Button>
      </S.Content>
    </S.Wrapper>
  );
};

export default VolunteerSignup;
