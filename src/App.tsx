import './App.css';
import styled from 'styled-components';
import { Box } from './components/Box/Box';
import { useEffect, useState, useRef } from 'react';
import { Obstacle } from './components/Box/Obstacle';

const FullWidth = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  const [jump, setJump] = useState<number>(0);
  const [right, setRight] = useState<number>(0);
  const [falldown, setFalldown] = useState(false);
  const jumpForListener = useRef(0);
  const rightForListener = useRef(0);
  const fallDownForListener = useRef(false);

  const setJumpHeight = (x: number) => {
    setJump(x);
    jumpForListener.current = x;
  };

  const setRightOffset = (x: number) => {
    setRight(x);
    rightForListener.current = x;
  };

  const setFalldownValue = (bool: boolean) => {
    setFalldown(bool);
    fallDownForListener.current = bool;
  };
  const JUMP_ALTITUDE = 500;
  const RIGHT_DISTANCE = 100;
  const TIME_TO_FALL = 700;
  const TIME_TO_JUMP = 300;

  const onKeyDown = (e: KeyboardEvent) => {
    if (e?.key === 'ArrowUp') {
      console.log(jumpForListener.current);
      if (jumpForListener.current === 0 && !fallDownForListener.current) {
        setJumpHeight(jumpForListener.current + JUMP_ALTITUDE);
        setTimeout(() => {
          setFalldownValue(true);
          setJumpHeight(0);
        }, TIME_TO_JUMP);
        setTimeout(() => {
          setFalldownValue(false);
        }, TIME_TO_JUMP + TIME_TO_FALL);
      }
    }
    if (e?.key === 'ArrowRight') {
      !fallDownForListener.current &&
        setRightOffset(rightForListener.current + RIGHT_DISTANCE);
    }
    if (e?.key === 'ArrowLeft') {
      !fallDownForListener.current &&
        setRightOffset(
          rightForListener.current > 0
            ? rightForListener.current - RIGHT_DISTANCE
            : 0
        );
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <FullWidth>
      <Box
        jump={jumpForListener.current}
        fallDown={falldown}
        timeToFall={TIME_TO_FALL}
        timeToJump={TIME_TO_JUMP}
        right={rightForListener.current}
      />
      <Obstacle />
    </FullWidth>
  );
}

export default App;
