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

const initialState = {
  fullName: '',
  email: '',
  password: '',
  organisationsOptions: [],
  organisationsIds: [],
  agreedOnTerms: false,
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

  const postcode = 'M1 1AE';
  const selectedPath = 'BASIC';
  const assessmentScore = 20;

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
  } = state;

  const orgsIdsRef = useRef(organisationsIds);

  if (!isDeepEqual(orgsIdsRef.current, organisationsIds)) {
    orgsIdsRef.current = organisationsIds;
  }

  useEffect(() => {
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
  }, [fullName, email, password, agreedOnTerms, postcode, orgsIdsRef.current]);

  const validateForm = () => {
    // TODO ASK: do we need to tidy post code up?

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
    });

    if (error) {
      if (error.statusCode === 409) {
        setState({ validationErrs: { email: error.message } });
      } else {
        setState({ httpError: error.message });
      }
    } else {
      setUser(data);
      history.push(navRoutes.VOLUNTEER.WELCOME);
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
        <T.H3 mb="1">Sign up</T.H3>
        <T.Body16 mb="5">
          Already have an account?{' '}
          <T.Link to={navRoutes.GENERAL.LOGIN}>Log in</T.Link>
        </T.Body16>

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
