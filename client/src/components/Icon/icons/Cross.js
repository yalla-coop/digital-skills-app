const Cross = ({ width, height, color, ...props }) => (
  <svg
    width={width || '14'}
    height={height || '14'}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.43578 1.43581L11.8944 11.8944"
      stroke={color || '#CCCCCC'}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M11.8948 1.43578L1.43615 11.8944"
      stroke={color || '#CCCCCC'}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default Cross;
