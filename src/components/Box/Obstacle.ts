import styled from 'styled-components';
import '../../App.css';

export const Obstacle = styled.div`
  width: 100px;
  height: 10px;
  background-color: white;
  position: absolute;
  bottom: 0;
  right: 0;
  animation-name: moveObstacle;
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;
