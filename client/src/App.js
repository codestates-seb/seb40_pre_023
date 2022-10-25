import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import recoilCounterState from './states/recoilCounterState';
import recoilDataState from './states/recoilDataState';
import { useRecoilState } from 'recoil';
import { getData } from './api/api';
import { useEffect } from "react";

function App() {
  const [count, setCount] = useRecoilState(recoilCounterState);
  const [data, setData] = useRecoilState(recoilDataState);

  useEffect(() => {
    getData()
      .then((res) => {
        setData(res.data);
        console.log(data)
      })
  },[]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Footer />
      <button onClick={() => setCount(count + 1)}>누르면 Recoil 증가</button>
      <button onClick={() => setCount(count - 1)}>누르면 Recoil 감소</button>
    </>
  );
}

export default App;
