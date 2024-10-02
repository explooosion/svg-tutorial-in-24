function Day5() {
  return (
    <>
      <svg width="200" height="200" viewBox="-100 -100 200 200">
        <path
          d="
        M -40, -40
        L  40, -40"
          stroke="#333333"
          stroke-width="25"
          stroke-linecap="round"
        />
      </svg>
      <svg width="200" height="200" viewBox="-100 -100 200 200">
        <path
          d="
        M -40 -40
        L  40 -40 
        M -40   0 
        L  40   0 
        M -40  40 
        L  40  40"
          stroke="#333333"
          stroke-width="25"
          stroke-linecap="round"
        />
      </svg>
      <svg width="200" height="200" viewBox="-100 -100 200 200">
        <path
          d="
        M -30 -20 
        L   0  10 
        L  30 -20"
          fill="none"
          stroke="red"
          stroke-width="80"
          stroke-linecap="round"
        />
      </svg>
      <svg width="200" height="200" viewBox="-100 -100 200 200">
        <path
          d="
        M -30 -20 
        L   0  10 
        L  30 -20"
          fill="none"
          stroke="red"
          stroke-width="10"
          stroke-linecap="round"
        />
      </svg>
      <svg width="200" height="200" viewBox="-100 -100 200 200">
        <path
          d="
          M -70 0
          L 70 0 
          L 30 -50 
          M 70 0 
          L 30 50"
          fill="none"
          stroke="#D1495B"
          stroke-width="25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
}

export default Day5;
