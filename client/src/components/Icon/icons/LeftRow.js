const LeftRow = ({ width, height, color, ...props }) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
    width={width}
    height={height}
    {...props}
  >
    <path
      d="M10.9652 14.5L5.02461 8.5593C4.9918 8.52657 4.9918 8.47343 5.02461 8.44061L10.9652 2.5V2.5"
      stroke={color || '#00A794'}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default LeftRow;
