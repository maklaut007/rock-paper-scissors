import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './SignStyle';

function Sign({ signType, borderWidth }) {
  const renderSign = () => {
    switch (signType) {
      case 'rock':
        return <Styled.Rock borderWidth={borderWidth} />;
      case 'paper':
        return <Styled.Paper borderWidth={borderWidth} />;
      case 'scissors':
        return <Styled.Scissors borderWidth={borderWidth} />;
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
  borderWidth: PropTypes.string,
};
Sign.defaultProps = {
  borderWidth: '26px',
};
export default Sign;
