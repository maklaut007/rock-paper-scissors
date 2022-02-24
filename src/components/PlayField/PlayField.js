import * as Styled from './PlayFieldStyle';
import Sign from './../Sign/Sign';

function PlayField() {
  return (
    <Styled.PlayField>
      <Sign signType="scissors"/>
      <Sign signType="rock"/>
      <Sign signType="paper"/>
    </Styled.PlayField>
  );
}

export default PlayField;
