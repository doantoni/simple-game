import styled from 'styled-components';

export const Box = styled.div<{
  jump: number;
  fallDown: boolean;
  timeToJump: number;
  timeToFall: number;
  right: number;
}>`
  width: 50px;
  height: 50px;
  background-color: blue;
  position: absolute;
  bottom: 0;
  transition: transform
    ${(props) =>
      props.fallDown
        ? `${props.timeToFall / 1000}s`
        : `${props.timeToJump / 1000}s`};
  transition-property: transform;
  transition-timing-function: ${(props) =>
    props.fallDown ? 'ease-in' : 'ease-out'};
  transform: translateY(-${(props) => `${props.jump}px`})
    translateX(${(props) => `${props.right}px`});
`;
