import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { incrementScore } from '../../store/gameSlice';
import * as Styled from './SignStyle';

function Sign({ signType }) {
  const gameStatus = useSelector((state) => state.game);
  const dispatch = useDispatch();

  const handleSignPick = (chice) => {
    console.log(chice);
    console.log(gameStatus);
    dispatch(incrementScore());
  };

  const renderSign = () => {
    switch (signType) {
      case 'rock':
        return <Styled.Rock onClick={() => handleSignPick('rock')} />;
      case 'paper':
        return <Styled.Paper onClick={() => handleSignPick('paper')} />;
      case 'scissors':
        return <Styled.Scissors onClick={() => handleSignPick('scissors')} />;
      default:
        return undefined;
    }
  };

  return (
    <Styled.Sign>
      {renderSign()}
    </Styled.Sign>
  );
}
Sign.propTypes = {
  signType: PropTypes.string.isRequired,
};

export default Sign;
