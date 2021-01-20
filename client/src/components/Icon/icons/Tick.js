const Tick = ({ width, height, color, ...props }) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    {...props}
  >
    <path
      d="M18.02 7.536L9.537 16.02 6 12.485"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default Tick;
