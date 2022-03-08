import styled from 'styled-components';
import RockImage from '../../images/icon-rock.svg';
import PaperImage from '../../images/icon-paper.svg';
import ScissorsImage from '../../images/icon-scissors.svg';

export const Sign = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

export const Rock = styled.div`
  border: 3vw solid #DD3A59;
  background-color: #fff;
  background-image: url(${RockImage});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 100%;
  background-size: 40%;
  box-shadow: 0px 1.4vw 0px #9C1734, inset 0px 1.4vw 0px #CCC;
  @media (min-width: 1000px){
    border: ${(props) => (props.borderWidth || '26px')} solid #DD3A59;
    box-shadow: 0px 12px 0px #9C1734, inset 0px 12px 0px #CCC;
  }
`;

export const Paper = styled.div`
  border: 3vw solid #4968F4;
  background-color: #fff;
  background-image: url(${PaperImage});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 100%;
  background-size: 40%;
  box-shadow: 0px 1.4vw 0px #2945C2, inset 0px 1.4vw 0px #CCC;
  @media (min-width: 1000px){
    border: ${(props) => (props.borderWidth || '26px')} solid #4968F4;
    box-shadow: 0px 12px 0px #2945C2, inset 0px 12px 0px #CCC;
  }
`;

export const Scissors = styled.div`
  border: 3vw solid #EBA319;
  background-color: #fff;
  background-image: url(${ScissorsImage});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 100%;
  background-size: 40%;
  box-shadow: 0px 1.4vw 0px #C76C1A, inset 0px 1.4vw 0px #CCC;
  @media (min-width: 1000px){
    border: ${(props) => (props.borderWidth || '26px')} solid #EBA319;
    box-shadow: 0px 12px 0px #C76C1A, inset 0px 12px 0px #CCC;
  }
`;
