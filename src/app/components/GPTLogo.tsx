import React from "react";

type Props = {};

const GPTLogo = (props: Props) => {
  return (
    <div
      style={{
        backgroundColor: "rgb(25, 195, 125)",
      }}
      className="relative p-1 rounded-sm h-9 w-9 text-white flex items-center justify-center"
    >
      <svg
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke-width="1.5"
        className="h-6 w-6"
        role="img"
      >
        <text x="-9999" y="-9999">
          ChatGPT
        </text>
        <path d="M4620 8959 c-303 -17 -702 -82 -764 -124 -43 -29 -57 -84 -32 -130
26 -48 64 -61 140 -47 34 6 99 18 145 27 137 25 278 44 415 55 147 13 507 15
613 5 118 -12 173 20 173 102 0 41 -21 73 -58 93 -13 6 -102 15 -200 20 -198
10 -240 10 -432 -1z"/>
      </svg>
    </div>
  );
};

export default GPTLogo;
