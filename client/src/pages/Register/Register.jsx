import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Main,
  InputLabel,
  InputText,
  InputButton,
  SideContainer,
  MobileTitle,
  Card,
  Desc,
  LickGroup,
} from './style';
import SignupSideInfo from '../../components/SignupSideInfo/SignupSideInfo';
import axios from 'axios';

function Register() {
   const navigate = useNavigate();
   const EMAIL_REGEX = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;
   const PASSWORD_REGEX = /(?=.*\d)(?=.*[a-z]).{8,}/;
  // form validation rules
  const { register, handleSubmit, formState: { isSubmitting, errors} } = useForm();
  const emailRegister = register('email', {
		required: { value: true, message: '이메일을 입력해주세요.' },
		pattern: { value: EMAIL_REGEX, message: '이메일 형식을 입력해주세요.' },
	});
  const passwordRegister = register('password', {
		required: { value: true, message: '비밀번호를 입력해주세요.' },
		pattern: { value: PASSWORD_REGEX, message: '비밀번호 형식을 입력해주세요.' },
	});
    const nicknameRegister = register('nickname', {
		required: { value: true, message: '닉네임을 입력해주세요.' },
	});
  

  const onSubmit = async (data) => {
    try {
      const req = JSON.stringify(data);
      axios
        .post(`https://287b-119-192-202-235.jp.ngrok.io/members/signup`, req, {
          headers: { 'Content-Type': `application/json` },
        })
        .then((res) => {
          navigate('/');
          console.log(res);
        });
    }catch (err) {
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
        <Card>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <div className="form-group">
                <InputLabel>Display name</InputLabel>
                <InputText
                  name="nickname"
                  type="text"
                  {...nicknameRegister}
                  className={`form-control ${
                    errors.nickname ? 'is-invalid' : ''
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.nickname?.message}
                </div>
              </div>
              <InputLabel>Email</InputLabel>
              <InputText
                name="email"
                type="text"
                {...emailRegister}
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>

            <div className="form-group">
              <InputLabel>Password</InputLabel>
              <InputText
                name="password"
                type="password"
                {...passwordRegister}
                className={`form-control ${
                  errors.password ? 'is-invalid' : ''
                }`}
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>

            <InputButton disabled={isSubmitting} className="btn btn-primary">
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
        </Card>
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
