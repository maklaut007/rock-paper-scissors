/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Styled from './PlayFieldStyle';
import Sign from '../Sign/Sign';
import { changeSign } from '../../store/gameSlice';

function PlayField() {
  const gameStatus = useSelector((state) => state.game);
  const dispatch = useDispatch();

  const handleSignPick = (chice) => {
    dispatch(changeSign(chice));
  };

  return (
    <Styled.PlayField>
      <Styled.SignButton onClick={() => handleSignPick('rock')}><Sign signType="rock" /></Styled.SignButton>
      <Styled.SignButton onClick={() => handleSignPick('paper')}><Sign signType="paper" /></Styled.SignButton>
      <Styled.SignButton onClick={() => handleSignPick('scissors')}><Sign signType="scissors" /></Styled.SignButton>
    </Styled.PlayField>
  );
}

export default PlayField;
