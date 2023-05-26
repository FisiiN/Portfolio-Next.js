import * as React from "react";

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

// #0A66C2
export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const CircularText = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="300.000000pt"
    height="350.000000pt"
    viewBox="0 0 300.000000 300.000000"
    xmlSpace="preserve"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
<g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
fill={`${className}`}>
<path d="M1575 2438 c-2 -7 -11 -42 -19 -78 -28 -122 -27 -122 -71 -15 -26 61
-45 94 -54 93 -7 -2 -23 -42 -38 -98 -13 -52 -25 -96 -27 -97 -1 -2 -18 36
-37 83 -31 80 -51 106 -66 90 -3 -3 1 -21 10 -38 8 -18 30 -68 48 -111 23 -55
38 -77 48 -75 15 3 20 18 53 152 5 21 13 35 17 30 4 -5 22 -44 41 -86 46 -110
60 -106 93 25 14 56 28 110 32 120 5 12 2 17 -9 17 -9 0 -19 -6 -21 -12z"/>
<path d="M1660 2322 c-40 -41 -41 -83 -1 -123 23 -23 39 -29 70 -29 29 0 41 4
41 15 0 11 -7 13 -28 9 -32 -7 -82 27 -82 56 0 18 2 18 63 -1 72 -22 87 -19
87 15 0 37 -39 76 -82 83 -32 5 -41 1 -68 -25z m84 -4 c24 -10 44 -43 33 -54
-6 -7 -107 19 -107 27 0 7 39 39 47 39 1 0 13 -5 27 -12z"/>
<path d="M1896 2318 c-9 -18 -22 -42 -29 -53 -56 -94 -67 -117 -62 -126 5 -7
11 -6 21 2 11 9 14 8 14 -4 0 -22 48 -57 77 -57 13 0 33 5 44 10 23 13 49 61
49 90 0 30 -53 80 -84 80 -31 0 -32 7 -6 40 11 14 20 31 20 38 0 24 -27 12
-44 -20z m70 -114 c19 -28 11 -59 -22 -80 -31 -21 -72 -11 -84 21 -28 72 64
123 106 59z"/>
<path d="M895 2191 c-4 -7 -2 -18 5 -26 7 -9 8 -15 0 -20 -17 -11 -11 -27 9
-20 13 4 29 -7 57 -40 44 -50 79 -58 109 -25 22 24 12 39 -15 22 -31 -19 -43
-15 -79 29 l-34 41 23 18 c16 12 19 19 11 25 -7 4 -20 0 -30 -9 -16 -14 -19
-14 -33 0 -11 11 -18 13 -23 5z"/>
<path d="M1160 2150 c0 -13 7 -20 20 -20 13 0 20 7 20 20 0 13 -7 20 -20 20
-13 0 -20 -7 -20 -20z"/>
<path d="M2122 2060 c-101 -70 -110 -78 -96 -88 5 -4 21 -24 33 -46 27 -42 74
-76 109 -76 40 0 90 28 106 59 26 48 20 83 -25 150 -22 33 -41 61 -42 60 -1 0
-39 -27 -85 -59z m138 -97 c0 -23 -8 -38 -31 -57 -53 -45 -111 -28 -152 43
l-18 30 28 18 c15 9 48 32 72 50 l44 33 29 -42 c16 -25 28 -57 28 -75z"/>
<path d="M811 2044 c-12 -15 -21 -35 -21 -45 0 -25 -10 -24 -42 6 -15 14 -32
25 -38 25 -28 0 2 -33 89 -100 72 -56 95 -69 102 -59 6 10 2 19 -13 29 -79 54
-97 90 -60 123 28 25 50 21 98 -19 39 -32 64 -37 64 -15 0 16 -106 81 -132 81
-17 0 -34 -10 -47 -26z"/>
<path d="M700 1881 c0 -5 5 -11 11 -13 7 -2 1 -16 -15 -32 -79 -86 33 -198
116 -116 26 26 30 36 25 66 -6 35 -6 35 16 21 31 -20 35 -77 7 -102 -22 -20
-27 -45 -7 -45 21 0 57 64 57 103 0 44 -23 68 -83 88 -23 7 -53 19 -67 26 -29
15 -60 17 -60 4z m100 -56 c30 -36 0 -105 -44 -105 -53 1 -77 60 -41 100 21
24 67 26 85 5z"/>
<path d="M2210 1823 c-26 -11 -49 -48 -50 -80 0 -39 42 -94 60 -77 7 7 5 16
-10 29 -20 18 -25 49 -14 79 12 32 31 15 49 -44 10 -34 22 -63 26 -66 4 -2 21
8 38 22 78 65 -1 175 -99 137z m78 -29 c18 -12 22 -24 20 -52 -5 -55 -31 -54
-46 3 -19 71 -15 78 26 49z"/>
<path d="M630 1648 c0 -11 16 -17 58 -21 65 -7 97 -34 86 -71 -10 -33 -24 -37
-91 -32 -49 4 -63 2 -63 -8 0 -32 129 -37 160 -6 22 22 27 79 8 98 -9 9 -8 12
5 12 9 0 17 7 17 15 0 10 -10 15 -29 15 -15 0 -56 3 -90 6 -50 6 -61 4 -61 -8z"/>
<path d="M2346 1653 c-4 -5 -38 -24 -74 -44 -91 -49 -89 -63 13 -100 92 -33
95 -33 95 -16 0 7 -31 24 -70 37 -38 13 -70 27 -70 30 0 3 28 19 62 35 36 17
64 37 66 48 4 17 -9 23 -22 10z"/>
<path d="M2234 1448 c-31 -14 -46 -48 -42 -93 5 -57 27 -57 25 0 -2 39 2 49
23 65 33 26 43 25 37 -2 -3 -13 -9 -47 -13 -75 -6 -52 -6 -53 19 -53 39 0 56
10 72 41 22 42 18 67 -14 100 -31 31 -68 37 -107 17z m106 -79 c0 -17 -8 -34
-22 -43 -33 -23 -40 -20 -34 14 20 101 16 93 37 74 10 -9 19 -30 19 -45z"/>
<path d="M720 1439 c-55 -9 -90 -34 -90 -65 0 -21 31 -94 40 -94 17 0 19 17 5
36 -21 28 -19 71 5 84 18 9 20 7 26 -28 3 -21 14 -49 24 -62 16 -21 22 -23 47
-15 24 9 28 16 31 55 2 32 -1 48 -13 56 -10 8 -12 14 -6 19 15 9 14 25 -1 24
-7 -1 -38 -5 -68 -10z m60 -48 c15 -29 12 -61 -6 -68 -21 -8 -40 14 -47 55 -6
29 -4 32 18 32 14 0 29 -8 35 -19z"/>
<path d="M2162 1264 c2 -10 36 -28 93 -49 132 -47 132 -47 138 -32 4 10 -9 19
-41 30 -26 8 -78 27 -117 41 -83 31 -77 30 -73 10z"/>
<path d="M836 1233 c-3 -3 -44 -23 -90 -44 l-84 -37 -16 41 c-11 30 -19 38
-27 30 -8 -8 -2 -30 20 -81 17 -39 31 -75 31 -81 0 -14 18 -23 30 -16 6 4 4
17 -5 35 -21 40 -19 49 13 61 81 30 152 65 152 76 0 14 -15 25 -24 16z"/>
<path d="M2116 1159 c-35 -41 -34 -83 3 -120 20 -20 39 -29 61 -29 44 0 90 47
90 92 0 47 -43 88 -92 88 -28 0 -42 -7 -62 -31z m106 -16 c22 -20 23 -61 1
-85 -36 -40 -103 -9 -103 47 0 52 61 75 102 38z"/>
<path d="M1985 1090 c-3 -6 7 -22 24 -36 36 -30 39 -44 11 -44 -32 0 -70 -44
-70 -80 0 -45 47 -90 93 -90 27 0 41 7 61 31 14 17 26 37 26 46 0 13 3 13 15
3 12 -10 15 -10 15 3 0 15 -148 177 -162 177 -4 0 -10 -5 -13 -10z m108 -131
c16 -23 17 -30 7 -50 -17 -31 -29 -39 -62 -39 -17 0 -33 9 -42 22 -51 72 44
137 97 67z"/>
<path d="M818 1084 c-9 -8 44 -84 54 -78 13 8 10 23 -14 54 -22 30 -30 35 -40
24z"/>
<path d="M925 969 c-49 -49 -50 -49 -67 -29 -11 13 -19 17 -23 10 -4 -6 0 -19
9 -29 12 -13 13 -20 4 -29 -16 -16 -37 -15 -44 3 -6 16 -34 21 -34 7 0 -13 45
-52 60 -52 7 0 22 7 32 16 13 13 21 14 31 5 17 -14 30 -2 16 15 -7 9 3 24 40
59 49 46 65 76 39 74 -7 -1 -35 -23 -63 -50z"/>
<path d="M965 869 c-69 -89 -75 -101 -57 -107 8 -2 162 180 162 193 0 3 -8 5
-17 5 -10 -1 -49 -40 -88 -91z"/>
<path d="M1097 903 c-13 -12 -7 -23 12 -23 30 0 71 -39 71 -67 l0 -25 -65 36
c-62 35 -64 36 -75 17 -17 -33 -11 -61 19 -92 20 -20 39 -29 61 -29 22 0 41 9
61 29 50 50 33 118 -37 147 -39 16 -39 16 -47 7z m23 -105 c45 -26 47 -41 6
-46 -32 -4 -66 22 -66 50 0 24 13 23 60 -4z"/>
<path d="M1827 882 c-27 -16 -44 -48 -33 -59 3 -4 17 6 31 21 19 21 33 26 57
24 50 -5 43 -22 -23 -58 l-62 -33 33 -30 c26 -23 38 -28 63 -23 77 16 102 92
48 147 -34 33 -72 37 -114 11z m113 -74 c0 -45 -52 -73 -90 -48 -13 9 -13 11
0 20 8 5 29 18 45 29 39 25 45 25 45 -1z"/>
<path d="M1710 832 c0 -5 7 -26 15 -45 21 -50 19 -84 -5 -99 -21 -13 -27 -38
-10 -38 5 0 18 10 30 22 11 12 20 16 20 10 0 -7 7 -12 15 -12 17 0 16 8 -15
108 -11 35 -24 58 -34 60 -9 2 -16 -1 -16 -6z"/>
<path d="M1247 812 c-28 -30 -21 -68 16 -96 19 -15 39 -26 45 -26 6 0 16 -9
22 -21 25 -46 -44 -67 -93 -29 -25 20 -46 13 -31 -11 9 -16 69 -39 99 -39 32
0 65 33 65 65 0 20 -12 33 -55 60 -57 37 -70 65 -38 83 20 12 69 -1 94 -24 10
-9 23 -13 29 -9 27 16 -55 65 -110 65 -15 0 -34 -8 -43 -18z"/>
<path d="M1600 789 c0 -14 5 -19 17 -17 26 5 29 38 4 38 -15 0 -21 -6 -21 -21z"/>
</g>
</svg>
);

export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);

