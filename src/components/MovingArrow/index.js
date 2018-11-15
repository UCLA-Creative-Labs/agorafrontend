import * as React from "react";
import styled, { keyframes } from "react-emotion";

const ArrowContainer = styled("div")`
  display: flex;
  position: relative;
  transform: translate(-50%, -50%);
`;

const ArrowMovement = keyframes`
  0% {
    left: 0;
    opacity: 0;
  }
  70% {
    opacity: 1;
  }
  100% {
    left: 30px;
    opacity: 0;
  }
`;

const ArrowBase = styled("div")`
  padding: 1rem;
  box-shadow: 2px -2px #f7a9ab inset;
  transform: rotate(225deg);
  opacity: 0;
  position: absolute;
`;

const ArrowOne = styled(ArrowBase)`
  animation: ${ArrowMovement} 2s ease-in-out infinite;
`;

const ArrowTwo = styled(ArrowBase)`
  animation: ${ArrowMovement} 2s 1s ease-in-out infinite;
`;

const MovingArrow = () => (
  <ArrowContainer>
    <ArrowOne />
    <ArrowTwo />
  </ArrowContainer>
);

export default MovingArrow;
