const Facebook = ({ width, height, color, ...props }) => (
  <svg
    width={width || '11'}
    height={height || '21'}
    viewBox="0 0 11 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.8204 3.3283L8.93322 3.32956C7.45328 3.32956 7.16631 4.03256 7.16631 5.06388V7.33956H10.6964L10.2365 10.9047H7.16631V20.05H3.48588V10.9047H0.408203V7.33956H3.48588V4.71175C3.48588 1.66039 5.34928 0 8.06982 0C9.37307 0 10.4934 0.0964907 10.8204 0.14035V3.3283Z"
      fill={color || 'white'}
    />
  </svg>
);

export default Facebook;
