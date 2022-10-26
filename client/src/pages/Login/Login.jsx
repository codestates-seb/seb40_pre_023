import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  InputLabel,
  InputText,
  InputDiv,
  InputButton,
  SignUp,
} from './style';
import { useState } from 'react';
import { isEmail, isPassword } from '../../utils/Regex';
import Logo from '../../components/Logo';
const Login = () => {
  const [emailValue, setEmailValue] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const handleLogin = () => {
    if (!isEmail(emailValue) || !isPassword(passwordValue)) {
      if (!isEmail(emailValue)) {
        setEmailError(true);
      }
      if (!isPassword(passwordValue)) {
        setPasswordError(true);
        return;
      }
    } else {
      alert('Login Success!');
    }
  };
  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
    setEmailError(false);
  };
  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
    setPasswordError(false);
  };

  return (
    <Container>
      <Logo />
      <InputDiv>
        <InputLabel>Email</InputLabel>
        <InputText
          type="email"
          value={emailValue}
          onChange={handleEmailChange}
          error={emailError ? true : null}
        />
        <div className={emailError ? 'error' : 'msg-title'}>
          The email is not a valid email address.
        </div>
        <InputLabel>Password</InputLabel>
        <InputText
          type="password"
          value={passwordValue}
          onChange={handlePasswordChange}
          error={passwordError ? true : null}
        />

        <div className={passwordError ? 'error' : 'msg-title'}>
          Password must be at least 12 characters.
        </div>

        <InputButton onClick={() => handleLogin()}>Log in</InputButton>
      </InputDiv>
      <SignUp>
        Don't have an account? <Link to="/members/signup">Sign up</Link>
      </SignUp>
    </Container>
  );
};

export default Login;
