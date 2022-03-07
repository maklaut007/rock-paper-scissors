import styled from 'styled-components';
import backgroundTriangle from '../../images/bg-triangle.svg';

export const PlayField = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  background-image: url(${backgroundTriangle});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50%;
  max-width: 960px;
`;

export const SignButton = styled.div`
  width: 30vw;
  height: 30vw;
  max-width: 280px;
  max-height: 280px;
  margin: 0px 30px 20px;
  cursor: pointer;
`;
