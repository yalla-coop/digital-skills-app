const RightRow = ({ width, height, color, ...props }) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
    width={width}
    height={height}
    {...props}
  >
    <path
      d="M4.99998 12.4043L9.94472 7.45378C9.97204 7.42644 9.97204 7.38216 9.94472 7.35488L4.99998 2.4043"
      stroke={color || '#00A794'}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default RightRow;
