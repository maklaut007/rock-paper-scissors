import * as Styled from './HeaderStyle.js';

function Sign({signType}) {
  const renderSign = () => {
    switch (signType) {
      case "rock":
        return <Styled.Rock />;
      case "paper":
        return <Styled.Paper />;
      case "scissors":
        return <Styled.Scissors />;
    }

  }
  return (
    <Styled.Sign>
      {renderSign}
    </Styled.Sign>
  );
}

export default Sign;
