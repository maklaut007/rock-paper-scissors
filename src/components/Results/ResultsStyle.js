import styled, { keyframes } from 'styled-components';

const scaleOut = keyframes`
  from {
    transform: scale(1, 1);
    opacity: .3;
  }
  to {
    transform: scale(2, 2);
    opacity: 0;
  }
`;
const moveCircleLeft = keyframes`
  0%   {left:200px;}
  60%  {left:200px;}
  100% {left:0px;}
`;
const moveCircleRight = keyframes`
  0%   {left:-200px;}
  60%  {left:-200px;}
  100% {left:0px;}
`;
export const Results = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  align-items: flex-start;
  @media (min-width: 1000px){
    align-items: center;
  }
`;

export const Choice = styled.div`

  display: flex;
  flex-direction: column;
  margin: 0 3vw;
  align-items: center;
  width: 42vw;
  text-align: center;
  position: relative;
  @media (min-width: 1000px){
    width: 24vw;
    &:nth-child(0){
      order: 1;

    }
    &:nth-child(1){
      animation: ${moveCircleLeft} ease-out 3s;
    }
    &:nth-child(2){
      order: 3;
      animation: ${moveCircleRight} ease-out 3s;
    }
  }
`;

export const ChoiceText = styled.h2`
  @media (min-width: 768px){
    order: 1;
    margin-top: 1vh;
  }
  color: white;
  font-size: 0.8em;
  margin: 4vw 0;
  font-weight: 500;
  letter-spacing: 0.09em;
`;
export const SignButtonWrap = styled.div`
  @media (min-width: 768px){
    order: 2;
  }
  width: 32vw;
  height: 32vw;
  max-width: 400px;
  max-height: 400px;
  border-radius: 100%;
  position: relative;
  background-color: #182341;
`;
export const SignButton = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  opacity: ${(props) => (props.resultsShown ? '100%' : '0')};
  transition: opacity 0.5s 1s ease-out;
  position: relative;
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
  transition: opacity 0.5s 2.5s ease-out;
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
  cursor: pointer;
  &:hover{
    color: #DD3A59;
  }
`;

export const PulsingCircle = styled.div`
  display: ${(props) => (props.victory ? 'block' : 'none')};
  animation: ${scaleOut} 1s infinite ease-out 2s;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  top: 0px;
  left: 0px;
  background-color: #fff;
  opacity: 0;
  z-index: 0;
  @media (min-width: 768px){
    animation: ${scaleOut} 1s infinite ease-out 2.8s;
  }
`;
