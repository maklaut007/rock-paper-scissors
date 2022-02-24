import * as Styled from './AppStyle';
import Header from './components/Header/Header';
import Sign from './components/Sign/Sign';
function App() {
  return (
    <Styled.App>
      <Header />
      <Sign signType="rock"/>
    </Styled.App>
  );
}

export default App;
