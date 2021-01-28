const Clock = ({ width, height, color, ...props }) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 33 33"
    width={width || '150'}
    height={height || '150'}
    {...props}
  >
    <ellipse
      cx="16.35"
      cy="16.432"
      rx="14.88"
      ry="14.934"
      stroke={color || 'black'}
      strokeWidth="2"
    />
    <path
      d="M16.35 7.153v9.668h9.099"
      stroke={color || 'black'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Clock;
