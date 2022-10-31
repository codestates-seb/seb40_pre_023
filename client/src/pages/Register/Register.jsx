import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useUserActions } from '../../_actions/user.actions'; 
import { useAlertActions } from '../../_actions/alert.actions';
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
YupPassword(Yup) 

export { Register };

function Register( ) {
    const userActions = useUserActions();
    const alertActions = useAlertActions();
    const navigate = useNavigate();
    // form validation rules 
    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required('Username is required'),
        password: Yup.string()
            .required('Password is required')
            .min(12, 'Password must be at least 12 characters')
            .minUppercase(1, 'Password must contain one uppercase')
            .minSymbols(1, 'Password must contain a symbol')
    }); 
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors, isSubmitting } = formState;

    function onSubmit(data) {
        return userActions.register(data)
            .then(() => {
                navigate('/account/login');
                alertActions.success('Registration successful');
            })
    }

    return (
        <Container>
           <SideContainer>
           <SignupSideInfo />
           </SideContainer>
           <SideContainer>
            <InputDiv>
                <form onSubmit={handleSubmit(onSubmit)}>
                    
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
                        Register
                    </InputButton>
                    
                </form>
            </InputDiv>
            <SignUp>
        Already have an account? <Link to="login">Login</Link>
      </SignUp>
            </SideContainer>
            
        </Container>
    )
}