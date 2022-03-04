import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Styled from './ResultsStyle';
import Sign from '../Sign/Sign';
import {
  incrementScore, decrementScore, changeSign, changeGameStage,
} from '../../store/gameSlice';

function Results() {
  const [opponentSign, setOpponentSign] = useState('');
  const gameStatus = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const [isVictorious, setIsVictorious] = useState(false);
  useEffect(() => {
    const randValue = Math.floor(Math.random() * 3);
    let sign = '';
    switch (randValue) {
      case 1:
        sign = 'paper';
        break;
      case 2:
        sign = 'scissors';
        break;
      default:
        sign = 'rock';
    }
    setOpponentSign(sign);
  }, [gameStatus.chosenSign]);

  useEffect(() => {
    if ((gameStatus.chosenSign === 'rock' && opponentSign === 'scissors') || (gameStatus.chosenSign === 'scissors' && opponentSign === 'paper') || (gameStatus.chosenSign === 'paper' && opponentSign === 'rock')) {
      dispatch(incrementScore());
      setIsVictorious(true);
    } else if ((gameStatus.chosenSign === 'scissors' && opponentSign === 'rock') || (gameStatus.chosenSign === 'rock' && opponentSign === 'paper') || (gameStatus.chosenSign === 'paper' && opponentSign === 'scissors')) {
      dispatch(decrementScore());
    }
  }, [opponentSign]);

  const handlePlayAgain = () => {
    dispatch(changeSign(''));
    dispatch(changeGameStage());
  };

  return (
    <Styled.Results>
      <Styled.Choice>
        <Styled.SignButton><Sign signType={gameStatus.chosenSign} /></Styled.SignButton>
        <Styled.ChoiceText>YOU PICKED</Styled.ChoiceText>
      </Styled.Choice>
      <Styled.Choice>
        <Styled.SignButton><Sign signType={opponentSign} /></Styled.SignButton>
        <Styled.ChoiceText>THE HOUSE PICKED</Styled.ChoiceText>
      </Styled.Choice>
      <Styled.ResultText>
        You
        {isVictorious ? ' Win' : ' Lose'}
        <Styled.PlayAgainBtn
          onClick={() => { handlePlayAgain(); }}
        >
          Play Again
        </Styled.PlayAgainBtn>
      </Styled.ResultText>
    </Styled.Results>
  );
}

export default Results;
