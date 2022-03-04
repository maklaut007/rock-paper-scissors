import styled from 'styled-components';
import backgroundTriangle from '../../images/bg-triangle.svg';

export const PlayField = styled.div`
  display: flex;
  max-width: 500px;
  flex-flow: row wrap;
  justify-content: center;
  background-image: url(${backgroundTriangle});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50%;
`;

export const SignButton = styled.div`
  width: 110px;
  height: 110px;
  margin: 0px 30px 20px;
  cursor: pointer;
`;
