import { useEffect } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { authAtom } from '../_state/auth'; 
import { Login } from '../pages/Login/Login'; 
import { Register } from '../pages/Register/Register'; 
export { Account };

function Account({ match }) {
    const auth = useRecoilValue(authAtom);
    const { path } = match;
    const navigate = useNavigate();
    useEffect(() => {
        // redirect to home if already logged in
        if (auth) navigate('/');

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8 offset-sm-2 mt-5">
                    <BrowserRouter>
                        <Route path={`${path}/login`} component={Login} />
                        <Route path={`${path}/register`} component={Register} />
                    </BrowserRouter>
                </div>
            </div>
        </div>
    );
}