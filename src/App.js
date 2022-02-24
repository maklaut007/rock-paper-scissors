import * as Styled from './AppStyle';
import Header from './components/Header/Header';
import PlayField from './components/PlayField/PlayField';
import Sign from './components/Sign/Sign';
function App() {
  return (
    <Styled.App>
      <Header />
      <PlayField />
    </Styled.App>
  );
}

export default App;
