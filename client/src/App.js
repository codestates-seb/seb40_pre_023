import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './pages/Main';
import Login from './pages/Login/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound/NotFound';
import recoilCounterState from './states/recoilCounterState';
import recoilDataState from './states/recoilDataState';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
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
        {/* <Link to="/members/login">gogo</Link> */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/members/login" element={<Login />} />
          <Route path="/members/signup" element={<Signup />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
