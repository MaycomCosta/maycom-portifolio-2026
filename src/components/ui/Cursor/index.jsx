import React from "react";
import styled from "styled-components";

const Dot = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  transition: transform 0.15s cubic-bezier(0.16, 1, 0.3, 1),
              opacity 0.2s ease;

  /* Outer ring */
  width: ${({ $hovered }) => ($hovered ? "48px" : "28px")};
  height: ${({ $hovered }) => ($hovered ? "48px" : "28px")};
  border: 1px solid var(--ink);
  border-radius: 50%;
  left: ${({ $x }) => $x}px;
  top: ${({ $y }) => $y}px;
  transform: translate(-50%, -50%) scale(${({ $clicked }) => ($clicked ? 0.8 : 1)});
  background: ${({ $hovered }) => ($hovered ? "var(--ink)" : "transparent")};
`;

const Inner = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  width: 4px;
  height: 4px;
  background: var(--ink);
  border-radius: 50%;
  left: ${({ $x }) => $x}px;
  top: ${({ $y }) => $y}px;
  transform: translate(-50%, -50%);
  transition: transform 0.05s ease;
`;

const Cursor = ({ pos, hovered, clicked }) => (
  <>
    <Dot $x={pos.x} $y={pos.y} $hovered={hovered} $clicked={clicked} />
    <Inner $x={pos.x} $y={pos.y} />
  </>
);

export default Cursor;
