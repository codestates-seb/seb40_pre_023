import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import recoilCounterState from './states/recoilCounterState';
import { useRecoilState } from 'recoil';
function App() {
  const [count, setCount] = useRecoilState(recoilCounterState);
  console.log(count);
  return (
    <>
      <GlobalStyle />
      {/* <Header />
      <Footer /> */}
      <button onClick={() => setCount(count + 1)}>누르면 Recoil 증가</button>
      <button onClick={() => setCount(count - 1)}>누르면 Recoil 감소</button>
    </>
  );
}

export default App;
