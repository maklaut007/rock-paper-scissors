import styled from 'styled-components';

export const Score = styled.header`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  border: 3px solid #5D6983;
  padding: 8px 16px 8px 20px;
  border-radius: 5px;
  color: white;
  margin-top: 30px;
`;
export const Title = styled.div`
  line-height: 0.9em;
  text-transform: uppercase;
  font-weight: 700;
`;
export const ScoreIcon = styled.div`
  background-color: #fff;
  color: #465085;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.5em;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.15em;
  border-radius: 4px;
  padding: 8px 20px;
`;
export const Number = styled.div`
  font-size: 3.4em;
  letter-spacing: 0px;
`;