import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
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
import { useUserActions } from '../../_actions/user.actions'; 
import Logo from '../../components/Logo'; 
export { Login };

function Login () {
    const userActions = useUserActions();

    // form validation rules 
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors, isSubmitting } = formState;

    return (
        <Container>
            <Logo />
           
            <InputDiv>
                <form onSubmit={handleSubmit(userActions.login)}>
                    <div className="form-group">
                    <InputLabel>Username</InputLabel>
                        <InputText name="username" type="text" {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                        <div className="invalid-feedback">{errors.username?.message}</div>
                    </div>
                    <div className="form-group">
                    <InputLabel>Password</InputLabel>
                        <InputText name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                        <div className="invalid-feedback">{errors.password?.message}</div>
                    </div>
                    <InputButton disabled={isSubmitting} className="btn btn-primary">
                        {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Login
                    </InputButton>
    
                </form>
            </InputDiv>
            <SignUp>
        Don't have an account? <Link to="register">Sign up</Link>
      </SignUp>
        </Container>
    )
}