import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Main,
  InputLabel,
  InputText,
  InputDiv,
  InputButton,
  SideContainer,
  MobileTitle,
  Desc,
  LickGroup,
} from './style';
import SignupSideInfo from '../../components/SignupSideInfo/SignupSideInfo';
import axios from 'axios';

function Register() {
  const URL = process.env.REACT_APP_URL;
  const navigate = useNavigate();
  const EMAIL_REGEX =
    /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;
  const PASSWORD_REGEX = /(?=.*\d)(?=.*[a-z]).{8,}/;
  // form validation rules
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();
  const emailRegister = register('email', {
    required: { value: true, message: '이메일을 입력해주세요.' },
    pattern: { value: EMAIL_REGEX, message: '이메일 형식을 입력해주세요.' },
  });
  const passwordRegister = register('password', {
    required: { value: true, message: '비밀번호를 입력해주세요.' },
    pattern: {
      value: PASSWORD_REGEX,
      message: '비밀번호 형식을 입력해주세요.',
    },
  });
  const nicknameRegister = register('nickname', {
    required: { value: true, message: '닉네임을 입력해주세요.' },
  });

  const onSubmit = async (data) => {
    try {
      const req = JSON.stringify(data);
      axios
        .post(URL + `/members/signup`, req, {
          headers: { 'Content-Type': `application/json` },
        })
        .then((res) => {
          navigate('/account/login');
          console.log(res);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <SideContainer>
        <SignupSideInfo />
      </SideContainer>
      <Main>
        <MobileTitle>
          Create your Stack Overflow account. It’s free and only takes a minute.
        </MobileTitle>

        <InputDiv>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="nickname-form">
              <InputLabel>Display name</InputLabel>
              <InputText
                name="nickname"
                type="text"
                error={errors.nickname?.message === undefined ? '' : 'error'}
                {...nicknameRegister}
              />
              {errors.nickname?.message === undefined ? null : (
                <div className="error-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width={24}
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="icons"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                    />
                  </svg>
                </div>
              )}
              <div className="invalid-feedback">{errors.nickname?.message}</div>
            </div>

            <div className="email-form">
              <InputLabel>Email</InputLabel>
              <InputText
                name="email"
                type="text"
                {...emailRegister}
                error={errors.email?.message === undefined ? '' : 'error'}
              />
              {errors.email?.message === undefined ? null : (
                <div className="error-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width={24}
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="icons"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                    />
                  </svg>
                </div>
              )}
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>

            <div className="password-form">
              <InputLabel>Password</InputLabel>
              <InputText
                name="password"
                type="password"
                error={errors.password?.message === undefined ? '' : 'error'}
                {...passwordRegister}
              />
              {errors.password?.message === undefined ? null : (
                <div className="error-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width={24}
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="icons"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                    />
                  </svg>
                </div>
              )}
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>

            <InputButton disabled={isSubmitting}>
              {isSubmitting && (
                <span className="spinner-border spinner-border-sm mr-1"></span>
              )}
              Register
            </InputButton>
          </form>

          <Desc>
            By clicking “Sign up”, you agree to our{' '}
            <span>terms of service, privacy policy</span> and{' '}
            <span>cookie policy</span>
          </Desc>
        </InputDiv>
        <LickGroup>
          <p>
            Already have an account?
            <Link to="/account/login">Log in</Link>
          </p>
          <p>
            Are you an employer? <span>Sign up on Talent</span>
          </p>
        </LickGroup>
      </Main>
    </Container>
  );
}

export { Register };
