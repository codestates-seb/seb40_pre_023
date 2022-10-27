import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Robot from './recaptcha.png'
import {
  ERROR_MSG_06,
  ERROR_MSG_07,
  ERROR_MSG_08,
} from '../../Constants/message';
import { EMAIL_REGEX } from '../../Constants/regex';

// import { useAppSelector } from '../../redux';

import Checkbox from '../Checkbox/Checkbox';

import {
  CheckAndSubmit,
  Container,
  DisplayName,
  Email,
  InputPassword,
  Password,
  PasswordComment,
  BlueButton,
  DefaultInput
} from './style';

const SignupInput = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState(false);

  // const { isSignupDone } = useAppSelector((state) => state.user);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (isSignupDone) {
  //     navigate('/login');
  //   }
  // }, [navigate, isSignupDone]);

  const handleDisplayNameChange = (e) => {
    setDisplayName(e.target.value);
  };
  
  const handleEmailChange = (e) => {
    if (EMAIL_REGEX.test(e.target.value)) {
      setEmailErr(false);
    }
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const passwordInput = e.target.value;
    if (passwordInput.length >= 8) {
      setPasswordErr(false);
    }
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (!EMAIL_REGEX.test(email) || password.length < 8) {
      if (!EMAIL_REGEX.test(email)) setEmailErr(true);
      if (password.length < 8) setPasswordErr(true);
      return;
    }
    else{
        return "Signup success"
    }
  };

  return (
    <Container>
      <DisplayName>
        <div>Display name</div>
        <DefaultInput
          id="displayName"
          value={displayName}
          onChange={handleDisplayNameChange}
          errorMsg={ERROR_MSG_06}
          isError={false}
        />
      </DisplayName>
      <Email>
        <div>Email</div>
        <DefaultInput
          id="email"
          value={email}
          onChange={handleEmailChange}
          errorMsg={ERROR_MSG_07}
          isError={emailErr}
        />
      </Email>
      <Password>
        <div>password</div>
        <InputPassword>
          <DefaultInput
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            errorMsg={ERROR_MSG_08}
            isError={passwordErr}
          />
        </InputPassword>
        <PasswordComment>
          Passwords must contain at least eight characters, including at least 1
          letter and 1 number.
        </PasswordComment>
      </Password>
      
      <CheckAndSubmit>
        
        <div>
        <img src={Robot} alt="robot"/>
        <Checkbox />
          <BlueButton width="268px" height="38px" onClick={handleSubmit}>
            Sign up
          </BlueButton>
        </div>
      </CheckAndSubmit>
    </Container>
  );
};

export default SignupInput;
