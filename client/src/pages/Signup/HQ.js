import { useReducer, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import * as T from '../../components/Typography';
import * as S from './style';

import { BasicInput, Checkbox } from '../../components/Inputs';
import Button from '../../components/Button';

import { Users } from '../../api-calls';

import validate from '../../validation/schemas/signup';
import { roles, navRoutes } from '../../constants';
import { useAuth } from '../../context/auth';

const initialState = {
  fullName: '',
  email: '',
  password: '',
  agreedOnTerms: false,
  httpError: '',
  validationErrs: {},
  submitAttempt: false,
};

function reducer(state, newState) {
  return { ...state, ...newState };
}

const cleanEmail = (email) => email.toLowerCase().trim();

const HQSignup = ({ user, onLogin, onLogout, onCreateAccount }) => {
  const [state, setState] = useReducer(reducer, initialState);
  const history = useHistory();
  const { setUser } = useAuth();

  const {
    fullName,
    email,
    password,
    agreedOnTerms,
    validationErrs,
    httpError,
    submitAttempt,
  } = state;

  useEffect(() => {
    if (submitAttempt) {
      validateForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullName, email, password, agreedOnTerms]);

  const validateForm = () => {
    try {
      validate({
        role: roles.HQ,
        email: cleanEmail(email),
        fullName,
        password,
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
    const { error, data } = await Users.signup({
      role: roles.HQ,
      email: cleanEmail(email),
      fullName,
      password,
    });

    if (error) {
      if (error.statusCode === 409) {
        setState({ validationErrs: { email: error.message } });
      } else {
        setState({ httpError: error.message });
      }
    } else {
      setUser(data);
      history.push(navRoutes.HQ.WELCOME);
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
          margins={{ mt: '2', mb: '3' }}
          type="password"
          value={password}
          handleChange={(e) => setState({ password: e.target.value })}
          error={validationErrs.password}
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

export default HQSignup;
