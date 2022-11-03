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
import { Cookies } from 'react-cookie';
import { useRecoilState } from 'recoil';
import isLoginState from '../../_state/isLoginState';

function Login() {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const cookies = new Cookies();
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
    try {
      const req = JSON.stringify(data);
      axios
        .post(
          `https://287b-119-192-202-235.jp.ngrok.io/login`,
          req,{
            headers: { 'Content-Type': `application/json`,withCredentials: true
          },
          }
        )
        .then((res) => {
          console.log(res);
          let jwtToken = res.headers.get("Authorization");
          localStorage.setItem("Authorization", jwtToken);
          setIsLogin(true);
          navigate('/');
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Logo />

      <InputDiv>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <InputLabel>Email</InputLabel>
            <InputText
              name="email"
              type="text"
              defaultValue={
                cookies.get('user_save_email') && cookies.get('user_save_email')
              }
              {...emailRegister}
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>
          <div className="form-group">
            <InputLabel>Password</InputLabel>
            <InputText name="password" type="password" {...passwordRegister} />
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
