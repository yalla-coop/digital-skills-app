const Trophy = ({ width, height, color, strokeColor, ...props }) => (
  <svg
    width={width || '48'}
    height={height || '48'}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M35.9998 21C35.9998 16.2525 35.9923 8.37844 35.9886 6C35.9886 5.60218 35.8306 5.22064 35.5493 4.93934C35.2679 4.65804 34.8864 4.5 34.4886 4.5L13.5083 4.52437C13.1113 4.52437 12.7304 4.68176 12.4493 4.96206C12.1681 5.24235 12.0095 5.62268 12.0083 6.01969C12.0083 8.88656 11.9961 18.1294 11.9961 21C11.9961 27.0262 19.7773 31.5 23.9961 31.5C28.2148 31.5 35.9998 27.0262 35.9998 21Z"
      fill={strokeColor || '#E6EFFA'}
    />
    <path
      d="M16.4998 43.5H31.4998M23.9998 43.5V31.5M35.9998 21C35.9998 16.2525 35.9923 8.37844 35.9886 6C35.9886 5.60218 35.8306 5.22064 35.5493 4.93934C35.2679 4.65804 34.8864 4.5 34.4886 4.5L13.5083 4.52437C13.1113 4.52437 12.7304 4.68176 12.4493 4.96206C12.1681 5.24235 12.0095 5.62268 12.0083 6.01969C12.0083 8.88656 11.9961 18.1294 11.9961 21C11.9961 27.0262 19.7773 31.5 23.9961 31.5C28.2148 31.5 35.9998 27.0262 35.9998 21Z"
      stroke={color || '#0061CE'}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M36 9H43.5V10.5C43.5 15.6769 40.3547 21 36 21M12 9H4.5V10.5C4.5 15.6769 7.64531 21 12 21V9Z"
      stroke={color || '#0061CE'}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Trophy;
