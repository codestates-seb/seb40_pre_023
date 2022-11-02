import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  InputLabel,
  InputText,
  InputDiv,
  InputButton,
  SignUp,
  SideContainer,
} from './style';
import SignupSideInfo from '../../components/SignupSideInfo/SignupSideInfo';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import axios from 'axios';
YupPassword(Yup);

function Register() {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    nickname: Yup.string().required('Username is required'),
    password: Yup.string()
      .required('Password is required')
      .min(12, 'Password must be at least 12 characters')
      .minUppercase(1, 'Password must contain one uppercase')
      .minSymbols(1, 'Password must contain a symbol'),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors, isSubmitting } = formState;
  const URL = process.env.REACT_APP_URL;

  const onSubmit = async (data) => {
    try {
      const req = JSON.stringify(data);
      axios
        .post(URL + `/members/signup`, req, {
          headers: { 'Content-Type': `application/json` },
        })
        .then((res) => {
          navigate('/');
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
      <SideContainer>
        <InputDiv>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <div className="form-group">
                <InputLabel>Nickname</InputLabel>
                <InputText
                  name="nickname"
                  type="text"
                  {...register('nickname')}
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
                {...register('email')}
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>

            <div className="form-group">
              <InputLabel>Password</InputLabel>
              <InputText
                name="password"
                type="password"
                {...register('password')}
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
          <SignUp>
            {/* Already have an account? <Link to="login">Login</Link> */}
          </SignUp>
        </InputDiv>
      </SideContainer>
    </Container>
  );
}

export { Register };
