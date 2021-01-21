const Flash = ({ width, height, color, strokeColor, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 200 248"
    width={width || '200'}
    height={height || '248'}
    {...props}
  >
    <image
      x="2"
      y="30"
      width="188"
      height="213"
      xlinkHref="data:img/png;base64,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"
    />
  </svg>
);

export default Flash;