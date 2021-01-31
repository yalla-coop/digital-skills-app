const ArrowDown = ({
  width = 24,
  height = 24,
  color,
  rotate = 0,
  ...props
}) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    transform={`rotate(${rotate})`}
    {...props}
  >
    <path
      d="M3.57703 7.62229L12.2835 15.9304C12.3316 15.9763 12.4095 15.9763 12.4575 15.9304L21.1641 7.62229"
      stroke={color || '#1E1E1E'}
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </svg>
);

export default ArrowDown;
