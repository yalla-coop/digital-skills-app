const Checklist = ({ width, height, color, ...props }) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width={width || '150'}
    height={height || '150'}
    {...props}
  >
    <g clip-path="url(#clip0)" fill={color || '#1E1E1E'}>
      <path d="M63.373 33.333c-3.2-1.84-1.666-.346-2.133-4.186l2.133-1.227a1.332 1.332 0 00.494-1.827l-4-6.933a1.334 1.334 0 00-1.827-.493l-2.133 1.24a13.654 13.654 0 00-2.574-1.454V16A1.333 1.333 0 0052 14.667h-6.667c0-2.814.107-3.12-.386-3.614C33.253-.627 34.2.253 33.84.107 33.48-.04 35.68 0 1.333 0A1.333 1.333 0 000 1.333V52a1.333 1.333 0 001.333 1.333H44A1.333 1.333 0 0045.333 52v-5.333H52a1.333 1.333 0 001.333-1.334V42.88c3.627-1.6 1.494-2.107 4.707-.253a1.334 1.334 0 001.827-.494c4.306-7.466 4.32-7.213 4.133-8a1.334 1.334 0 00-.627-.8zM34.667 4.547l6.12 6.12h-6.12v-6.12zM45.333 27.72a4 4 0 110 5.893V27.72zm-2.666 22.947h-40v-48H32V12a1.333 1.333 0 001.333 1.333h9.334v37.334zM58.48 28.733c.947 4.96-1.853 3.84 2.4 6.294l-2.667 4.626-1.76-.986c-1.333-.787-1.533.866-4.906 2.093-1.067.387-.88 1.24-.88 3.28h-5.334v-7.267a6.666 6.666 0 100-12.213v-7.227h5.334c0 1.6-.294 2.854.88 3.28 3.36 1.214 3.52 2.88 4.906 2.094l1.76-1.027 2.667 4.627-1.76 1.013a1.333 1.333 0 00-.64 1.413zM44.6 58.813c-5.2-2.666-5.453-2.786-5.893-2.8-2.907-.106 10 0-34.667 0a4 4 0 00-2.88 6.8C2.8 64.493 1.48 64 38.667 64c.48 0 .773-.227 5.933-2.813a1.333 1.333 0 000-2.374zM3.053 60.92A1.333 1.333 0 014 58.667h1.333v2.666c-1.333 0-1.786.107-2.28-.413zm35.294.413H8v-2.666h30.347L41.013 60l-2.666 1.333z" />
      <path d="M13.72 13.72l-4.387 4.4-1.72-1.733A1.339 1.339 0 105.72 18.28c4.387 4.374 2.667 4.534 9.893-2.666a1.339 1.339 0 10-1.893-1.894zM38.667 17.333H20A1.333 1.333 0 1020 20h18.667a1.334 1.334 0 000-2.667zM13.72 25.72l-4.387 4.4-1.72-1.733A1.339 1.339 0 105.72 30.28c4.387 4.374 2.667 4.534 9.893-2.666a1.337 1.337 0 00-.946-2.286 1.34 1.34 0 00-.947.392zM38.667 29.333H20A1.333 1.333 0 1020 32h18.667a1.334 1.334 0 000-2.667zM13.72 37.72l-4.387 4.4-1.72-1.733A1.339 1.339 0 105.72 42.28c4.387 4.374 2.667 4.534 9.893-2.666a1.337 1.337 0 00-.946-2.286 1.34 1.34 0 00-.947.392zM38.667 41.333H20A1.333 1.333 0 1020 44h18.667a1.334 1.334 0 000-2.667z" />
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" d="M0 0h64v64H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default Checklist;