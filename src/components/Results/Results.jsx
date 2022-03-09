/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Styled from './ResultsStyle';
import Sign from '../Sign/Sign';
import {
  incrementScore, decrementScore, changeGameStage,
} from '../../store/gameSlice';

function Results() {
  const [opponentSign, setOpponentSign] = useState('');
  const gameStatus = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const [victoryStatus, setVictoryStatus] = useState('');
  const [resultsShown, setResultsShown] = useState(false);

  useEffect(() => {
    if ((gameStatus.chosenSign === 'rock' && opponentSign === 'scissors') || (gameStatus.chosenSign === 'scissors' && opponentSign === 'paper') || (gameStatus.chosenSign === 'paper' && opponentSign === 'rock')) {
      dispatch(incrementScore());
      setVictoryStatus('you win');
    } else if ((gameStatus.chosenSign === 'scissors' && opponentSign === 'rock') || (gameStatus.chosenSign === 'rock' && opponentSign === 'paper') || (gameStatus.chosenSign === 'paper' && opponentSign === 'scissors')) {
      dispatch(decrementScore());
      setVictoryStatus('you lose');
    } else {
      setVictoryStatus('draw');
    }
  }, [opponentSign]);

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
    setResultsShown(true);
  }, []);

  const handlePlayAgain = () => {
    dispatch(changeGameStage());
  };

  return (
    <Styled.Results>
      <Styled.Choice leftCircle>
        <Styled.SignButtonWrap>
          <Styled.SignButton resultsShown>
            <Sign signType={gameStatus.chosenSign} borderWidth="40px" />
            <Styled.PulsingCircle victory={victoryStatus === 'you win'} />
          </Styled.SignButton>
        </Styled.SignButtonWrap>
        <Styled.ChoiceText>YOU PICKED</Styled.ChoiceText>
      </Styled.Choice>
      <Styled.Choice>
        <Styled.SignButtonWrap>
          <Styled.SignButton resultsShown={resultsShown}>
            <Sign signType={opponentSign} borderWidth="40px" />
            <Styled.PulsingCircle victory={victoryStatus === 'you lose'} />
          </Styled.SignButton>
        </Styled.SignButtonWrap>
        <Styled.ChoiceText>THE HOUSE PICKED</Styled.ChoiceText>
      </Styled.Choice>
      <Styled.ResultText resultsShown={resultsShown}>
        {victoryStatus}
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
