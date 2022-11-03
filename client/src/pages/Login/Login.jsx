import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
import axiosInstance from '../../axiosconfig/Axiosconfig';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo';
import { Cookies } from 'react-cookie';


function Login() {
  const cookies = new Cookies();
  const navigate = useNavigate();
  // const URL = process.env.REACT_APP_URL;
  const EMAIL_REGEX = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;
  const PASSWORD_REGEX = /(?=.*\d)(?=.*[a-z]).{8,}/;
  // form validation rules
  const { register, handleSubmit, setFocus, formState: { isSubmitting, errors} } = useForm();
  const emailRegister = register('email', {
		required: { value: true, message: '이메일을 입력해주세요.' },
		pattern: { value: EMAIL_REGEX, message: '이메일 형식을 입력해주세요.' },
	});
  const passwordRegister = register('password', {
		required: { value: true, message: '비밀번호를 입력해주세요.' },
		pattern: { value: PASSWORD_REGEX, message: '비밀번호 형식을 입력해주세요.' },
	});
  
const onSubmit = async (data) => {
  try{
  const req = JSON.stringify(data);
  axiosInstance.post(`http://ec2-43-201-114-190.ap-northeast-2.compute.amazonaws.com:8080/login`,
  req)
  .then(res => {
  console.log(res)
  cookies.set("accessToken", res.accessTokean, {
    secure: true,
  })
  navigate("/")
})
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
            <InputText name="email" type="text"defaultValue={
            cookies.get("user_save_email") && cookies.get("user_save_email")
          }{...emailRegister} />
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
        Don't have an account? <Link to="register">Sign up</Link>
      </SignUp>
    </Container>
  );
}

export default Login;
