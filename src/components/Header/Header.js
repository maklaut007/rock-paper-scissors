import * as Styled from './HeaderStyle.js';

function Score() {
  return (
    <Styled.Score>
      <Styled.Title>Rock <br /> Paper <br/> Scissors</Styled.Title>
      <Styled.ScoreIcon>Score <Styled.Number>12</Styled.Number></Styled.ScoreIcon>
    </Styled.Score>
  );
}

export default Score;
