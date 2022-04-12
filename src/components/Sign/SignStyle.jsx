import styled, { keyframes } from 'styled-components';
import RockImage from '../../images/icon-rock.svg';
import PaperImage from '../../images/icon-paper.svg';
import ScissorsImage from '../../images/icon-scissors.svg';

const moveDown = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(0.96);
  }
`;
export const Sign = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

export const CurrentSign = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 100%;
  background-size: 40%;
  position: relative;
  transition: box-shadow 0.5s;
  &:hover{
    animation: ${moveDown} 0.4s linear both;
    box-shadow: 0px 6px 0px #9C1734, inset 0px 6px 0px #CCC;
    animation-fill-mode: both;
  }
`;

export const Rock = styled(CurrentSign)`
  border: 3vw solid #DD3A59;
  background-image: url(${RockImage});
  box-shadow: 0px 1.4vw 0px #9C1734, inset 0px 1.4vw 0px #CCC;
  @media (min-width: 1000px){
    border: ${(props) => (props.borderWidth || '26px')} solid #DD3A59;
    box-shadow: 0px 12px 0px #9C1734, inset 0px 12px 0px #CCC;
  }
  &:hover{
    box-shadow: 0px 6px 0px #9C1734, inset 0px 6px 0px #CCC;
  }
`;

export const Paper = styled(CurrentSign)`
  border: 3vw solid #4968F4;
  background-image: url(${PaperImage});
  box-shadow: 0px 1.4vw 0px #2945C2, inset 0px 1.4vw 0px #CCC;
  @media (min-width: 1000px){
    border: ${(props) => (props.borderWidth || '26px')} solid #4968F4;
    box-shadow: 0px 12px 0px #2945C2, inset 0px 12px 0px #CCC;
  }
  &:hover{
    box-shadow: 0px 6px 0px #2945C2, inset 0px 6px 0px #CCC;
  }
`;

export const Scissors = styled(CurrentSign)`
  border: 3vw solid #EBA319;
  background-image: url(${ScissorsImage});
  box-shadow: 0px 1.4vw 0px #C76C1A, inset 0px 1.4vw 0px #CCC;
  @media (min-width: 1000px){
    border: ${(props) => (props.borderWidth || '26px')} solid #EBA319;
    box-shadow: 0px 12px 0px #C76C1A, inset 0px 12px 0px #CCC;
  }
  &:hover{
    box-shadow: 0px 6px 0px #C76C1A, inset 0px 6px 0px #CCC;
  }
`;
