const Mail = ({ width, height, color, ...props }) => (
  <svg
    width={width || '30'}
    height={width || '30'}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24.8438 5.625H5.15625C3.86183 5.625 2.8125 6.67433 2.8125 7.96875V22.0312C2.8125 23.3257 3.86183 24.375 5.15625 24.375H24.8438C26.1382 24.375 27.1875 23.3257 27.1875 22.0312V7.96875C27.1875 6.67433 26.1382 5.625 24.8438 5.625Z"
      stroke={color || 'white'}
      stroke-width="1.875"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.5625 9.375L15 15.9375L23.4375 9.375"
      stroke={color || 'white'}
      stroke-width="1.875"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default Mail;
