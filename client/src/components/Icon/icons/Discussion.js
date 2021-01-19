const Discussion = ({ width, height, color, ...props }) => (
  <svg
    width={width || '120'}
    height={height || '120'}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clip-path="url(#clip0)">
      <path
        d="M103.6 80.0003C105.555 77.8499 106.842 75.1782 107.307 72.3097C107.772 69.4413 107.393 66.4996 106.217 63.8422C105.042 61.1849 103.12 58.9262 100.684 57.3407C98.2492 55.7552 95.4059 54.9112 92.5 54.9112C89.5942 54.9112 86.7509 55.7552 84.3157 57.3407C81.8805 58.9262 79.9583 61.1849 78.7826 63.8422C77.6069 66.4996 77.2284 69.4413 77.693 72.3097C78.1577 75.1782 79.4455 77.8499 81.4 80.0003C78.2057 80.2003 75.1274 81.2725 72.5 83.1003C73.9631 80.8352 74.7886 78.2175 74.8895 75.5229C74.9904 72.8282 74.3631 70.1562 73.0735 67.788C71.784 65.4198 69.8798 63.443 67.5615 62.0657C65.2433 60.6884 62.5966 59.9615 59.9 59.9615C57.2035 59.9615 54.5568 60.6884 52.2385 62.0657C49.9202 63.443 48.0161 65.4198 46.7265 67.788C45.437 70.1562 44.8096 72.8282 44.9105 75.5229C45.0115 78.2175 45.8369 80.8352 47.3 83.1003C44.7299 81.3065 41.7253 80.2359 38.6 80.0003C40.5545 77.8499 41.8424 75.1782 42.307 72.3097C42.7717 69.4413 42.3932 66.4996 41.2175 63.8422C40.0418 61.1849 38.1195 58.9262 35.6844 57.3407C33.2492 55.7552 30.4059 54.9112 27.5 54.9112C24.5942 54.9112 21.7509 55.7552 19.3157 57.3407C16.8805 58.9262 14.9583 61.1849 13.7826 63.8422C12.6069 66.4996 12.2284 69.4413 12.6931 72.3097C13.1577 75.1782 14.4455 77.8499 16.4 80.0003C11.952 80.2804 7.77843 82.2471 4.73082 85.4991C1.68322 88.7511 -0.00877847 93.0434 3.42533e-05 97.5003V112.5C3.42533e-05 113.163 0.263426 113.799 0.732267 114.268C1.20111 114.737 1.83699 115 2.50003 115H32.5V117.5C32.5 118.163 32.7634 118.799 33.2323 119.268C33.7011 119.737 34.337 120 35 120H85C85.6631 120 86.299 119.737 86.7678 119.268C87.2366 118.799 87.5 118.163 87.5 117.5V115H117.5C118.163 115 118.799 114.737 119.268 114.268C119.737 113.799 120 113.163 120 112.5V97.5003C120.009 93.0434 118.317 88.7511 115.269 85.4991C112.222 82.2471 108.048 80.2804 103.6 80.0003ZM92.5 60.0003C94.4779 60.0003 96.4113 60.5868 98.0557 61.6856C99.7002 62.7844 100.982 64.3462 101.739 66.1734C102.496 68.0007 102.694 70.0114 102.308 71.9512C101.922 73.891 100.97 75.6728 99.5711 77.0713C98.1726 78.4699 96.3908 79.4223 94.4509 79.8081C92.5111 80.194 90.5005 79.9959 88.6732 79.2391C86.8459 78.4822 85.2842 77.2005 84.1853 75.556C83.0865 73.9115 82.5 71.9781 82.5 70.0003C82.5 67.3481 83.5536 64.8046 85.429 62.9292C87.3043 61.0538 89.8479 60.0003 92.5 60.0003ZM60 65.0003C61.9778 65.0003 63.9112 65.5868 65.5557 66.6856C67.2002 67.7844 68.482 69.3462 69.2388 71.1734C69.9957 73.0007 70.1937 75.0114 69.8079 76.9512C69.422 78.891 68.4696 80.6728 67.0711 82.0713C65.6726 83.4699 63.8907 84.4223 61.9509 84.8081C60.0111 85.194 58.0005 84.9959 56.1732 84.2391C54.3459 83.4822 52.7842 82.2005 51.6853 80.556C50.5865 78.9115 50 76.9781 50 75.0003C50 72.3481 51.0536 69.8046 52.929 67.9292C54.8043 66.0538 57.3479 65.0003 60 65.0003ZM27.5 60.0003C29.4778 60.0003 31.4112 60.5868 33.0557 61.6856C34.7002 62.7844 35.982 64.3462 36.7388 66.1734C37.4957 68.0007 37.6937 70.0114 37.3079 71.9512C36.922 73.891 35.9696 75.6728 34.5711 77.0713C33.1726 78.4699 31.3907 79.4223 29.4509 79.8081C27.5111 80.194 25.5005 79.9959 23.6732 79.2391C21.8459 78.4822 20.2842 77.2005 19.1853 75.556C18.0865 73.9115 17.5 71.9781 17.5 70.0003C17.5 67.3481 18.5536 64.8046 20.429 62.9292C22.3043 61.0538 24.8479 60.0003 27.5 60.0003ZM5.00003 110V97.5003C5.00003 94.1851 6.31699 91.0056 8.6612 88.6614C11.0054 86.3172 14.1848 85.0003 17.5 85.0003C39.075 85.0003 39.65 84.5753 43.175 86.3753C40.008 87.7166 37.3065 89.9614 35.4079 92.8293C33.5093 95.6972 32.4979 99.0609 32.5 102.5V110H5.00003ZM82.5 115H37.5V102.5C37.5 99.1851 38.817 96.0056 41.1612 93.6614C43.5054 91.3172 46.6848 90.0003 50 90.0003H70C73.3152 90.0003 76.4947 91.3172 78.8389 93.6614C81.1831 96.0056 82.5 99.1851 82.5 102.5V115ZM115 110H87.5V102.5C87.5022 99.0609 86.4907 95.6972 84.5922 92.8293C82.6936 89.9614 79.9921 87.7166 76.825 86.3753C80.475 84.5253 81.1 85.0003 102.5 85.0003C105.815 85.0003 108.995 86.3172 111.339 88.6614C113.683 91.0056 115 94.1851 115 97.5003V110Z"
        fill={color || 'white'}
      />
      <path
        d="M13.6756 54.625C15.2756 55.6 15.5756 55 25.6006 50H65.0006C65.6636 50 66.2995 49.7366 66.7683 49.2678C67.2372 48.7989 67.5006 48.163 67.5006 47.5V40H94.4006C104.651 45.125 104.776 45.575 106.326 44.625C107.876 43.675 107.501 45.6 107.501 2.5C107.501 1.83696 107.237 1.20107 106.768 0.732233C106.3 0.263392 105.664 0 105.001 0L55.0006 0C54.3375 0 53.7016 0.263392 53.2328 0.732233C52.764 1.20107 52.5006 1.83696 52.5006 2.5V10H15.0006C14.3375 10 13.7017 10.2634 13.2328 10.7322C12.764 11.2011 12.5006 11.837 12.5006 12.5C12.5006 55.575 12.0006 53.575 13.6756 54.625ZM57.5006 5H102.501V38.45C95.5256 35 95.8006 35 95.0006 35H57.5006V5ZM17.5006 15H52.5006V20H25.0006C24.3375 20 23.7017 20.2634 23.2328 20.7322C22.764 21.2011 22.5006 21.837 22.5006 22.5C22.5006 23.163 22.764 23.7989 23.2328 24.2678C23.7017 24.7366 24.3375 25 25.0006 25H52.5006V37.5C52.5006 38.163 52.764 38.7989 53.2328 39.2678C53.7016 39.7366 54.3375 40 55.0006 40H62.5006V45C21.7256 45 24.6506 45 23.8756 45.275L17.5006 48.45V15Z"
        fill={color || 'white'}
      />
      <path
        d="M64.9997 14.9997H94.9997C95.6627 14.9997 96.2986 14.7363 96.7675 14.2675C97.2363 13.7986 97.4997 13.1628 97.4997 12.4997C97.4997 11.8367 97.2363 11.2008 96.7675 10.732C96.2986 10.2631 95.6627 9.99972 94.9997 9.99972H64.9997C64.3367 9.99972 63.7008 10.2631 63.2319 10.732C62.7631 11.2008 62.4997 11.8367 62.4997 12.4997C62.4997 13.1628 62.7631 13.7986 63.2319 14.2675C63.7008 14.7363 64.3367 14.9997 64.9997 14.9997Z"
        fill={color || 'white'}
      />
      <path
        d="M64.9997 27.5H84.9997C85.6628 27.5 86.2986 27.2366 86.7675 26.7678C87.2363 26.2989 87.4997 25.663 87.4997 25C87.4997 24.337 87.2363 23.7011 86.7675 23.2322C86.2986 22.7634 85.6628 22.5 84.9997 22.5H64.9997C64.3367 22.5 63.7008 22.7634 63.2319 23.2322C62.7631 23.7011 62.4997 24.337 62.4997 25C62.4997 25.663 62.7631 26.2989 63.2319 26.7678C63.7008 27.2366 64.3367 27.5 64.9997 27.5Z"
        fill={color || 'white'}
      />
      <path
        d="M45 37.4997C45.663 37.4997 46.2989 37.2363 46.7678 36.7675C47.2366 36.2986 47.5 35.6628 47.5 34.9997C47.5 34.3367 47.2366 33.7008 46.7678 33.232C46.2989 32.7631 45.663 32.4997 45 32.4997H25C24.337 32.4997 23.7011 32.7631 23.2322 33.232C22.7634 33.7008 22.5 34.3367 22.5 34.9997C22.5 35.6628 22.7634 36.2986 23.2322 36.7675C23.7011 37.2363 24.337 37.4997 25 37.4997H45Z"
        fill={color || 'white'}
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="120" height="120" fill={color || 'white'} />
      </clipPath>
    </defs>
  </svg>
);

export default Discussion;
