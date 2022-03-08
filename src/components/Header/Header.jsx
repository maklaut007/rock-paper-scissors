import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as Styled from './HeaderStyle';

function Score() {
  const gameScoreReducer = useSelector((state) => state.game.score);
  const [gameScore, setGameScore] = useState(gameScoreReducer);
  useEffect(() => {
    setTimeout(() => {
      setGameScore(gameScoreReducer);
    }, 2000);
  }, [gameScoreReducer]);

  return (
    <Styled.Score>
      <Styled.Title>
        Rock
        <br />
        Paper
        <br />
        Scissors
      </Styled.Title>
      <Styled.ScoreIcon>
        Score
        <Styled.Number>{gameScore}</Styled.Number>
      </Styled.ScoreIcon>
    </Styled.Score>
  );
}

export default Score;
