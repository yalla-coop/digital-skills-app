import { useReducer, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import * as T from '../../components/Typography';
import * as S from './style';

import { BasicInput } from '../../components/Inputs';
import { BackLink, Button } from '../../components';

import { Users } from '../../api-calls';

import validate from '../../validation/schemas/login';
import { roles, navRoutes } from '../../constants';
import { useAuth } from '../../context/auth';
import userRoles from '../../constants/roles';

const initialState = {
  email: '',
  password: '',
  httpError: '',
  validationErrs: {},
  submitAttempt: false,
};

function reducer(state, newState) {
  return { ...state, ...newState };
}

const cleanEmail = (email) => email.toLowerCase().trim();

const Login = ({ user, onLogin, onLogout, onCreateAccount }) => {
  const [state, setState] = useReducer(reducer, initialState);
  const history = useHistory();

  const { setUser } = useAuth();

  const { email, password, validationErrs, httpError, submitAttempt } = state;

  useEffect(() => {
    if (submitAttempt) {
      validateForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password]);

  const validateForm = () => {
    try {
      validate({
        email: cleanEmail(email),
        password,
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

  const handleLogin = async () => {
    const { data, error } = await Users.login({
      role: roles.VOLUNTEER,
      email: cleanEmail(email),
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
      if (data.role === userRoles.VOLUNTEER) {
        history.push(navRoutes.VOLUNTEER.DASHBOARD);
      } else {
        history.push(navRoutes.HQ.DASHBOARD);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ submitAttempt: true });

    const isValid = validateForm();
    if (isValid) {
      handleLogin();
    }
  };

  return (
    <S.Wrapper>
      {history.action === 'PUSH' && <BackLink mb="5" mbM="4" />}
      <S.Content>
        <T.H3 mb="3">Log in</T.H3>
        {/* ADD IN WHEN THERE ARE OTHER REASONS TO HAVE ACCOUNT
        OTHER THAN DOING THE DIGITAL TEST */}
        {/* <T.Body16 mb="5">
          Don’t have an account?{' '}
          <T.Link to={navRoutes.VOLUNTEER.SIGNUP}>Create one</T.Link>
        </T.Body16> */}
        <form onSubmit={handleSubmit}>
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

          <T.Body16 mt="5" color="red">
            {httpError}
          </T.Body16>

          <Button variant="primary" bgColor="teal" type="submit">
            Log in
          </Button>
        </form>
      </S.Content>
    </S.Wrapper>
  );
};

export default Login;
