const Flash = ({ width, height, color, strokeColor, ...props }) => (
  <svg
    width={width || '120'}
    height={height || '120'}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M73.8914 7.73438L22.5 71.25H52.5L45.1148 111.851C45.1008 111.93 45.1044 112.012 45.1254 112.09C45.1463 112.168 45.1842 112.241 45.2363 112.303C45.2883 112.365 45.3534 112.415 45.4267 112.449C45.5001 112.483 45.5801 112.5 45.6609 112.5V112.5C45.747 112.5 45.8319 112.48 45.9088 112.441C45.9857 112.402 46.0525 112.346 46.1039 112.277L97.5 48.75H67.5L74.9203 8.14454C74.9303 8.06364 74.9229 7.98154 74.8987 7.90371C74.8745 7.82588 74.834 7.75409 74.7799 7.69312C74.7258 7.63215 74.6594 7.58339 74.585 7.5501C74.5106 7.5168 74.43 7.49972 74.3484 7.5V7.5C74.2592 7.50036 74.1713 7.52177 74.0919 7.56249C74.0125 7.60322 73.9438 7.66211 73.8914 7.73438V7.73438Z"
      fill={color || '#CCEDEA'}
      stroke={strokeColor || '#00A794'}
      stroke-width="7.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default Flash;
