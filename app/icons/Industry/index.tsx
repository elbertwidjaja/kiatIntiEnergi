import * as React from "react";
const Industry = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-5 -10 110 135"
    {...props}
    width={30}
    height={30}
  >
    <path
      fillRule="evenodd"
      d="M97.5 95V62.5c0-1.375-1.125-2.5-2.5-2.5h-2.7l-.624-7.5H73.324l-.625 7.5H67.3l-.625-7.5H48.323l-.625 7.5H42.5v-5c1.375 0 2.5-1.125 2.5-2.5S43.874 50 42.5 50h-10v-5c1.375 0 2.5-1.125 2.5-2.5V35H10v7.5c0 1.375 1.125 2.5 2.5 2.5v5h-10C1.124 50 0 51.125 0 52.5S1.124 55 2.5 55v40C1.124 95 0 96.125 0 97.5s1.125 2.5 2.5 2.5h95c1.375 0 2.5-1.125 2.5-2.5S98.874 95 97.5 95zM35 95V85c0-1.375-1.125-2.5-2.5-2.5h-20A2.507 2.507 0 0 0 10 85v10h5v-7.5h15V95zm17.5-7.5h5c1.375 0 2.5-1.125 2.5-2.5s-1.125-2.5-2.5-2.5h-5c-1.375 0-2.5 1.125-2.5 2.5s1.125 2.5 2.5 2.5zm15 0h5c1.375 0 2.5-1.125 2.5-2.5s-1.125-2.5-2.5-2.5h-5c-1.375 0-2.5 1.125-2.5 2.5s1.125 2.5 2.5 2.5zm15 0h5c1.375 0 2.5-1.125 2.5-2.5s-1.125-2.5-2.5-2.5h-5c-1.375 0-2.5 1.125-2.5 2.5s1.125 2.5 2.5 2.5zm-30-7.5h5c1.375 0 2.5-1.125 2.5-2.5S58.875 75 57.5 75h-5c-1.375 0-2.5 1.125-2.5 2.5s1.125 2.5 2.5 2.5zm15 0h5c1.375 0 2.5-1.125 2.5-2.5S73.875 75 72.5 75h-5c-1.375 0-2.5 1.125-2.5 2.5s1.125 2.5 2.5 2.5zm15 0h5c1.375 0 2.5-1.125 2.5-2.5S88.875 75 87.5 75h-5c-1.375 0-2.5 1.125-2.5 2.5s1.125 2.5 2.5 2.5zm-70-2.5h5c1.375 0 2.5-1.125 2.5-2.5s-1.125-2.5-2.5-2.5h-5c-1.375 0-2.5 1.125-2.5 2.5s1.125 2.5 2.5 2.5zm15 0h5c1.375 0 2.5-1.125 2.5-2.5s-1.125-2.5-2.5-2.5h-5c-1.375 0-2.5 1.125-2.5 2.5s1.125 2.5 2.5 2.5zm25-5h5c1.375 0 2.5-1.125 2.5-2.5s-1.125-2.5-2.5-2.5h-5c-1.375 0-2.5 1.125-2.5 2.5s1.125 2.5 2.5 2.5zm15 0h5c1.375 0 2.5-1.125 2.5-2.5s-1.125-2.5-2.5-2.5h-5c-1.375 0-2.5 1.125-2.5 2.5s1.125 2.5 2.5 2.5zm15 0h5c1.375 0 2.5-1.125 2.5-2.5s-1.125-2.5-2.5-2.5h-5c-1.375 0-2.5 1.125-2.5 2.5s1.125 2.5 2.5 2.5zM35 60c0-1.375-1.125-2.5-2.5-2.5h-20A2.507 2.507 0 0 0 10 60v7.5c0 1.375 1.125 2.5 2.5 2.5h20c1.375 0 2.5-1.125 2.5-2.5zm-15 2.5V65h-5v-2.5zm5 0h5V65h-5zM17.5 45v5h10v-5zm48.75 2.5H48.727l.2-2.5h17.101l.2 2.5zm25 0H73.727l.2-2.5h17.101l.2 2.5zM49.352 40h16.273l-.648-7.7c-.102-1.3-1.2-2.3-2.5-2.3h-10c-1.301 0-2.375 1-2.5 2.3l-.649 7.7zm25 0h16.273l-.648-7.7c-.102-1.3-1.2-2.3-2.5-2.3h-10c-1.301 0-2.375 1-2.5 2.3l-.649 7.7zM10 30h25a12.6 12.6 0 0 0-3.648-8.852A12.477 12.477 0 0 0 22.5 17.5s-.648 0 0 0C15.602 17.5 10 23.102 10 30zm72.352-2.5h.176c1.625 0 2.824-.426 3.726-1.05 1.399-.977 2.149-2.427 2.477-3.927.102-.523.148-1.05.176-1.523a4.86 4.86 0 0 0 2.074-1.7c1-1.425 1.2-3.476.5-5.5.375-1.175.3-2.425-.074-3.624-.45-1.399-1.426-2.75-2.5-3.75 0-.324 0-.7-.051-1.102-.125-1.176-.55-2.426-1.477-3.426C86.43.875 84.954 0 82.528 0c-5.45 0-7.649 3.3-8.352 4.773-2.125 1.977-3.55 4.2-3.601 6.75-.024 1.649.476 3.5 1.949 5.575.101 1.949.726 3.55 1.898 4.601.649.574 1.477 1.024 2.551 1.274.273.601.625 1.324 1.102 1.949 1.05 1.476 2.523 2.523 4.273 2.574zm-25.023 0h.176c1.625 0 2.824-.426 3.726-1.05 1.399-.977 2.149-2.427 2.477-3.927.102-.523.176-1.05.176-1.523.926-.398 1.601-1.023 2.101-1.7 1-1.425 1.2-3.476.5-5.5.375-1.175.301-2.425-.074-3.624-.45-1.399-1.426-2.75-2.5-3.75 0-.324 0-.7-.05-1.102-.126-1.176-.551-2.426-1.477-3.426C61.434.875 59.958 0 57.532 0c-5.449 0-7.648 3.3-8.351 4.773-2.125 1.977-3.551 4.2-3.602 6.75-.023 1.649.477 3.5 1.95 5.575.1 1.949.726 3.55 1.898 4.601.648.574 1.476 1.024 2.55 1.274.274.601.649 1.324 1.102 1.949 1.05 1.476 2.55 2.523 4.273 2.574z"
    />
  </svg>
);
export default Industry;