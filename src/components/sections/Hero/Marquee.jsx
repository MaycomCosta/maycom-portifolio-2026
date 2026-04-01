import React from "react";
import styled from "styled-components";

const Strip = styled.div`
  background: var(--ink);
  overflow: hidden;
  padding: 0.85rem 0;
  white-space: nowrap;
`;

const Track = styled.div`
  display: inline-flex;
  animation: marquee 22s linear infinite;
`;

const Text = styled.span`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gray-400);
  padding: 0 3rem;
`;

const Marquee = ({ text }) => {
  const repeated = Array(8).fill(text);
  return (
    <Strip>
      <Track>
        {repeated.map((t, i) => <Text key={i}>{t}</Text>)}
        {repeated.map((t, i) => <Text key={`b${i}`}>{t}</Text>)}
      </Track>
    </Strip>
  );
};

export default Marquee;
