import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import MyPage from './pages/MyPage/MyPage';
import ScrollToTop from './utils/ScrollTop';
import QuestionWrite from './pages/QuestionWrite/QuestionWrite';
import QuestionDetail from './pages/QuestionDetail/QuestionDetail';
import QuestionEdit from './pages/QusetionEdit/QuestionEdit';
import QuestionList from './components/Question/QuestionList';
import AnswerEdit from './pages/AnswerEdit/AnswerEdit';
import PrivateRoute from './utils/PrivateRoute';
import QuestionSearch from './pages/QuestionSearch/QuestionSearch';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { getData } from './api/api';
import { useEffect } from 'react';
import isLoginState from './_state/isLoginState';
import { useRecoilValue } from 'recoil';
import Main from './pages/Main';
import { authAtom } from './_state/auth';
import { Users } from './users/Users';
import { Account } from './_account';
import { Register } from './pages/Register/Register';
export { App };
function App() {
  const auth = useRecoilValue(authAtom);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  return (
    <div className={'app-container' + (auth ? ' bg-light' : '')}>
      <BrowserRouter>
        <ScrollToTop />
        <GlobalStyle />
        <Header />
        <Routes>
          <Route index path="/" element={<Main />} />
          <Route index path="/:page/:size" element={<Main />} />
          <Route
            path="/search/:keyword/:page/:size"
            element={<QuestionSearch />}
          />
          <Route path="/questions/:id" element={<QuestionDetail />} />
          <Route path="/questions/:id/edit" element={<QuestionEdit />} />
          <Route path="/questions/ask" element={<QuestionWrite />} />
          <Route path="/answers/:id/edit" element={<AnswerEdit />} />
          <Route path="/users" element={<Users />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/register" element={<Register />} />
          <Route path="/account/login" element={<Login />} />
          <Route
            path="/mypage"
            element={<PrivateRoute component={<MyPage />} />}
          />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
