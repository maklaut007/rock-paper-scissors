import styled from 'styled-components';

export const RulesButton = styled.button`
  cursor: pointer;
  color: white;
  padding: 12px 36px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: transparent;
  text-transform: uppercase;
  font-size: 0.9em;
  letter-spacing: 0.1em;
`;
export const Rules = styled.div`
  margin: auto 0 40px;
`;
export const RulesInfo = styled.div`
  display: ${(props) => (props.displayRules ? 'flex' : 'none')};
  height:100vh;
  width:100vw;
  position: absolute;
  background-color: white;
  top: 0;
  left: 0;
  z-index: 10;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const RulesInfoTitle = styled.h2`
  text-transform: uppercase;
  color: #3B3F5D;
`;
export const RulesInfoImage = styled.img`
  width: 90%;
`;
export const CloseRules = styled.p`
  font-size: 2em;
  color: #bbb;
  cursor: pointer;
`;
