import styled from 'styled-components';

export const Results = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
`;

export const SignButton = styled.div`
  width: 130px;
  height: 130px;
  margin: 0 30px;
  cursor: pointer;
`;
export const ResultText = styled.div`
  color: white;
  text-transform: uppercase;
  font-size: 3em;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px ;
`;

export const PlayAgainBtn = styled.button`
  background-color: white;
  color: #5D6983;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 700;
  margin: 20px;
  padding: 20px 60px;
  font-size: 0.4em;
  border-radius: 10px;
`;
export const Choice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ChoiceText = styled.h2`
  color: white;
  font-size: 1em;
  margin:  20px;
`;
