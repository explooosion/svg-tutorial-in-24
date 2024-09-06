function Day3() {
  return (
    <svg width="200" height="200" viewBox="-100 -100 200 200">
      <circle cx={0} cy={-50} r={30} fill="#cd803d" />
      <circle cx={-12} cy={-55} r={3} fill="white" />
      <circle cx={12} cy={-55} r={3} fill="white" />
      <rect
        x={-10}
        y={-40}
        width={20}
        height={5}
        rx={2}
        fill="none"
        stroke="white"
        strokeWidth={2}
      />
      <line
        x1={-40}
        y1={-10}
        x2={40}
        y2={-10}
        strokeWidth={35}
        stroke="#cd803d"
        strokeLinecap="round"
      />
      <line
        x1={-25}
        y1={50}
        x2={0}
        y2={-15}
        strokeWidth={35}
        stroke="#cd803d"
        strokeLinecap="round"
      />
      <line
        x1={25}
        y1={50}
        x2={0}
        y2={-15}
        strokeWidth={35}
        stroke="#cd803d"
        strokeLinecap="round"
      />
      <circle cx={0} cy={-10} r={5} />
      <circle cx={0} cy={10} r={5} />
    </svg>
  );
}

export default Day3;
