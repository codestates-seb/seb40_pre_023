import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  Container,
  InputLabel,
  InputText,
  InputDiv,
  InputButton,
  SignUp,
} from './style';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo';

import { useRecoilState } from 'recoil';
import isLoginState from '../../_state/isLoginState';
import memberIdState from '../../_state/memberIdState';
import tokenState from '../../_state/tokenState';
import { LoginAPI } from '../../api/api';

function Login() {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [memberId, setMemberId] = useRecoilState(memberIdState);
  const [isToken, setIsToken] = useRecoilState(tokenState);

  const navigate = useNavigate();
  // const URL = process.env.REACT_APP_URL;
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

  const onSubmit = async (data) => {
    LoginAPI(data).then(async (res) => {
      console.log(res.status, 'res.status');
      if (res.status === 200) {
        setIsLogin(true);
        setMemberId(res.data);
        setIsToken(res.headers.authorization);
        navigate('/');
      } else if (res.status === 400) {
        alert('아이디 또는 비밀번호를 확인해주세요.');
      } else if (res.status === 401) {
        alert('아이디 또는 비밀번호를 확인해주세요.');
      }
    });
  };

  return (
    <Container>
      <Logo />

      <InputDiv>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="email-form">
            <InputLabel>Email</InputLabel>
            <InputText
              error={errors.email?.message === undefined ? '' : 'error'}
              name="email"
              type="text"
              
              {...emailRegister}
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
            <div className="input-text">
              <InputText
                error={errors.password?.message === undefined ? '' : 'error'}
                name="password"
                type="password"
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
            </div>

            <div className="invalid-feedback">{errors.password?.message}</div>
          </div>
          <InputButton disabled={isSubmitting} className="btn btn-primary">
            {isSubmitting && (
              <span className="spinner-border spinner-border-sm mr-1"></span>
            )}
            Login
          </InputButton>
        </form>
      </InputDiv>
      <SignUp>
        Don't have an account? <Link to="/account/register">Sign up</Link>
      </SignUp>
    </Container>
  );
}

export default Login;
