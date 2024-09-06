/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const house = css`
  stroke: #000;
  stroke-width: 2px;
  fill: #fff;
`;

const roof = css`
  fill: none;
  stroke: #d1495b;
  stroke-width: 10px;
  stroke-linecap: round;
`;

function Day4() {
  return (
    <svg width="200" height="200" viewBox="-100 -100 200 200" css={house}>
      <polygon points="-65,80 -65,-10 0,-70 65,-10 65,80" />
      <polyline points="-75,-8 0,-78 75,-8" css={roof} />

      <rect x="-45" y="10" width="30" height="60" rx="2" fill="#d1495b" />
      <circle cx="-35" cy="40" r="2" />
      <rect x="-47" y="70" width="34" height="5" fill="gray" />
      <rect x="-49" y="75" width="38" height="5" fill="gray" />

      <rect x="5" y="15" width="40" height="35" rx="5" fill="#fdea96" />
      <line x1="5" y1="32.5" x2="45" y2="32.5" />
      <line x1="25" y1="15" x2="25" y2="50" />
      <rect
        x="2"
        y="48"
        width="46"
        height="5"
        rx="5"
        fill="#d1495b"
        strokeLinecap="round"
      />

      <circle cx="0" cy="-25" r="15" fill="#fdea96" />
      <line x1="-15" y1="-25" x2="15" y2="-25" />
      <line x1="0" y1="-40" x2="0" y2="-10" />
    </svg>
  );
}

export default Day4;
