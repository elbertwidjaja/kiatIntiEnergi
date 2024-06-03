import * as React from "react";
const Pipe = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 64 80"
    width={30}
    height={30}
    {...props}
  >
    <path
      fill="#F38428"
      d="M59 43h-5v-1c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v1H20c-.533 0-1.035-.208-1.413-.587S18 41.533 18 41c0-1.103.897-2 2-2h24c4.277 0 8.293-1.667 11.306-4.692A15.85 15.85 0 0 0 60 23c0-8.822-7.178-16-16-16H16V6c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h5v1c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-1h28c.533 0 1.035.208 1.413.587S46 22.467 46 23c0 1.103-.897 2-2 2H20a15.854 15.854 0 0 0-11.306 4.691A15.859 15.859 0 0 0 4 41c0 8.822 7.178 16 16 16h28v1c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-1h5a1 1 0 0 0 1-1V44a1 1 0 0 0-1-1zM6 19V9h4v10H6zm7.997 3H12V6h2l-.003 16zM20 55c-7.72 0-14-6.28-14-14 0-3.74 1.458-7.253 4.108-9.894A13.868 13.868 0 0 1 20 27h24c2.206 0 4-1.794 4-4 0-1.067-.416-2.07-1.173-2.827S45.067 19 44 19H16V9h28c7.72 0 14 6.28 14 14a13.87 13.87 0 0 1-4.108 9.894A13.865 13.865 0 0 1 44 37H20c-2.206 0-4 1.794-4 4 0 1.066.416 2.071 1.173 2.827A3.97 3.97 0 0 0 20 45h28v10H20zm31.997 3H50V42h2l-.003 16zM58 55h-4V45h4v10z"
    />
  </svg>
);
export default Pipe;
