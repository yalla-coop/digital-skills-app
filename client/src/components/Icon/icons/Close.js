const Close = ({ width, height, color, ...props }) => (
  <svg
    width={width || '85'}
    height={height || '45'}
    viewBox="0 0 85 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M55.821 6.95386L78.0456 29.1784"
      stroke={color || 'white'}
      strokeWidth="3.54167"
      strokeLinecap="round"
    />
    <path
      d="M78.0457 6.95337L55.8211 29.1779"
      stroke={color || 'white'}
      strokeWidth="3.54167"
      strokeLinecap="round"
    />
  </svg>
);

export default Close;
