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
  
  @media (min-width: 768px){
    font-size: 0.7em;
    padding: 16px 50px;
    border-radius: 10px;
  }
`;
export const Rules = styled.div`
  margin: auto 0 40px;
  @media (min-width: 768px){
    margin: auto 40px 40px auto;
  }
`;
export const RulesInfo = styled.div`
  display: ${(props) => (props.displayRules ? 'flex' : 'none')};
  box-shadow: ${(props) => (props.displayRules ? '0 0 0 10000px rgba(0,0,0,.50);' : 'none')};
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
  @media (min-width: 768px){
    border-radius: 12px;
    width: 580px;
    height: 580px;
    left: 50%;
    top: 46%;
    transform: translate(-50%, -50%);
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 40px;
  }
`;
export const RulesInfoTitle = styled.h2`
  text-transform: uppercase;
  color: #3B3F5D;
`;
export const RulesInfoImage = styled.img`
  width: 90%;
  order: 3;
  @media (min-width: 768px){
    width: 74%;
    margin: 40px auto;
  }
`;
export const CloseRules = styled.p`
  font-size: 2em;
  color: #bbb;
  cursor: pointer;
  @media (min-width: 768px){
    font-size: 1.2em;
  }
  &:hover{
    color: #DD3A59;
  }
`;
