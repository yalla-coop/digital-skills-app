const Burger = ({ width, height, color, ...props }) => (
  <svg
    width={width || '22'}
    height={height || '18'}
    viewBox="0 0 22 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 1.95118H21"
      stroke={color || '#1E1E1E'}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M1 9.42408H21"
      stroke={color || '#1E1E1E'}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M1 16.8967H21"
      stroke={color || '#1E1E1E'}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default Burger;
