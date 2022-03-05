import styled from 'styled-components';

export const Results = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  align-items: flex-start;
`;
export const Choice = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 4vw;
  align-items: center;
  width: 42vw;
  text-align: center;
`;
export const ChoiceText = styled.h2`
  color: white;
  font-size: 0.75em;
  margin: 20px 0;
  font-weight: 500;
  letter-spacing: 0.09em;
`;
export const SignButton = styled.div` 
  width: 34vw;
  height: 34vw;
  max-width: 420px;
  max-height: 420px;
  cursor: pointer;
  background-color: #172240;
  border-radius: 100%;
  opacity: ${(props) => (props.resultsShown ? '100%' : '0')};
  transition: opacity 0.5s 1s ease-out;
`;
export const ResultText = styled.div`
  opacity: ${(props) => (props.resultsShown ? '100%' : '0')};
  color: white;
  text-transform: uppercase;
  font-size: 2.7em;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  transition: opacity 0.5s 1.5s ease-out;
`;

export const ResultTextHeader = styled.h2`
`;
export const PlayAgainBtn = styled.button`
  background-color: white;
  color: #5D6983;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 700;
  margin: 20px;
  padding: 20px 70px;
  font-size: 0.3em;
  border-radius: 10px;
`;
