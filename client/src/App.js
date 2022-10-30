import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './pages/Main';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import NotFound from './pages/NotFound/NotFound';
import MyPage from './pages/MyPage/MyPage';
import QuestionWrite from './pages/QuestionWrite/QuestionWrite';
import QuestionDetail from './pages/QuestionDetail/QuestionDetail';
import QuestionEdit from './pages/QusetionEdit/QuestionEdit';
import QuestionList from './components/Question/QuestionList';
import AnswerEdit from './pages/AnswerEdit/AnswerEdit';
import recoilCounterState from './states/recoilCounterState';
import recoilDataState from './states/recoilDataState';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { getData } from './api/api';
import { useEffect } from 'react';

function App() {
  const [count, setCount] = useRecoilState(recoilCounterState);
  const [data, setData] = useRecoilState(recoilDataState);

  // useEffect(() => {
  //   getData().then((res) => {
  //     setData(res.data);
  //     console.log(data);
  //   });
  // }, []);

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<QuestionList />} />
          <Route path="/questions/:id" element={<QuestionDetail />} />
          <Route path="/questions/:id/edit" element={<QuestionEdit />} />
          <Route path="/questions/ask" element={<QuestionWrite />} />
          <Route path="/answers/:id/edit" element={<AnswerEdit />} />
          <Route path="/members/login" element={<Login />} />
          <Route path="/members/signup" element={<Signup />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
