const ArrowUp = ({ width, height, color, ...props }) => (
  <svg
    width={width || '16'}
    height={height || '16'}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8 15L8 3" stroke={color} strokeWidth="2" stroke-linecap="round" />
    <path
      d="M2.01758 7.98281L7.95819 2.04219C7.99101 2.00937 8.04414 2.00937 8.07688 2.04219L14.0176 7.98281"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default ArrowUp;
