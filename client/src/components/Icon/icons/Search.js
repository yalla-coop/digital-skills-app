const Search = ({ width, height, color, ...props }) => (
  <svg
    width={width || '20'}
    height={height || '20'}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx="8.33317"
      cy="8.33341"
      r="6.66667"
      stroke={color || '#1E1E1E'}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M13.1203 13.1203L17.6479 17.6479"
      stroke={color || '#1E1E1E'}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default Search;
