import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './SignStyle';

function Sign({ signType }) {
  const renderSign = () => {
    switch (signType) {
      case 'rock':
        return <Styled.Rock />;
      case 'paper':
        return <Styled.Paper />;
      case 'scissors':
        return <Styled.Scissors />;
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
