const Documents = ({ width, height, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 64 64"
    width={width || '150'}
    height={height || '150'}
    {...props}
  >
    <path
      fill={color || '#1E1E1E'}
      d="M62.667 52h-1.334V18.667a4 4 0 00-4-4h-8c0-4.28 0-4.16-.106-4.507-.107-.346.466.32-8.28-8.44-.56-.546 1.213-.386-24.947-.386a1.333 1.333 0 00-1.333 1.333v12h-8a4 4 0 00-4 4V52H1.333A1.334 1.334 0 000 53.334V56a6.667 6.667 0 006.667 6.667h50.666A6.668 6.668 0 0064 56v-2.666A1.334 1.334 0 0062.667 52zM41.333 5.88l3.454 3.454h-3.454V5.88zm-24-1.88h21.334v6.667A1.333 1.333 0 0040 12h6.667v32H17.333V4zm-12 14.667a1.333 1.333 0 011.334-1.333h8v28A1.333 1.333 0 0016 46.667h32a1.333 1.333 0 001.333-1.333v-28h8a1.333 1.333 0 011.334 1.333V52c-22.534 0-21.467-.12-22.027.227-.56.347-.52.547-1.467 2.44h-6.346l-.974-1.933c-.533-1.08 0-.734-22.52-.734V18.667zm56 37.333a4 4 0 01-4 4H6.667a4 4 0 01-4-4v-1.333H25.84c1.08 2.147 1.173 2.667 2.16 2.667 10.12 0 8.493.666 10.16-2.667h23.173V56z"
    />
    <path
      fill={color || '#1E1E1E'}
      d="M22.667 12v-1.333h2.666v8H24a1.333 1.333 0 100 2.666h5.333a1.333 1.333 0 100-2.666H28v-8h2.667V12a1.333 1.333 0 102.666 0V9.333A1.333 1.333 0 0032 8H21.333A1.333 1.333 0 0020 9.333V12a1.333 1.333 0 002.667 0zM34.667 21.334h8a1.333 1.333 0 000-2.667h-8a1.334 1.334 0 000 2.667zM21.333 26.667h21.334a1.333 1.333 0 000-2.667H21.333a1.334 1.334 0 000 2.667zM21.333 32h21.334a1.333 1.333 0 100-2.666H21.333a1.334 1.334 0 000 2.666zM21.333 37.334h21.334a1.334 1.334 0 000-2.667H21.333a1.334 1.334 0 000 2.667z"
    />
  </svg>
);

export default Documents;