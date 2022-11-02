import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
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

function Login() {
  const navigate = useNavigate();
  // form validation rules
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required'),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors, isSubmitting } = formState;
  const URL = process.env.REACT_APP_URL;
//   const onSubmit = (data) => {
//     axios.get(URL + `/members/login`,
//     data)
//     .then((res) => {
//       navigate('/');
//       console.log(res)
//     })
// }
const onSubmit = async (data) => {
  try{
  console.log(data)
  const req = JSON.stringify(data);
  console.log(req)
  axios.get(URL + `/login`,
  req, {
      headers: { "Content-Type": `application/json`}
      })
  .then(res => {
    navigate('/');
  console.log(res)})
  } catch (err){
  console.log(err);
  }
  
}
  return (
    <Container>
      <Logo />

      <InputDiv>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <InputLabel>Email</InputLabel>
            <InputText
              name="username"
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
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            />
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
        Don't have an account? <Link to="register">Sign up</Link>
      </SignUp>
    </Container>
  );
}

export default Login;
