const File = ({ width, height, color, ...props }) => (
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
        d="M95.0003 70.5004V27.6754C95.0074 26.4264 94.8477 25.182 94.5253 23.9754C93.8715 21.3674 92.5137 18.9892 90.6003 17.1004L77.9253 4.40035C76.0364 2.48692 73.6582 1.12918 71.0503 0.47535C69.8355 0.150755 68.5826 -0.0090103 67.3253 0.000350523H17.5003C14.1851 0.000350523 11.0057 1.31731 8.66145 3.66152C6.31724 6.00572 5.00028 9.18514 5.00028 12.5004V102.5C5.00028 105.816 6.31724 108.995 8.66145 111.339C11.0057 113.683 14.1851 115 17.5003 115H75.0003C79.3191 118.262 84.5881 120.019 90.0003 120C96.2 120.007 102.181 117.709 106.782 113.553C111.383 109.398 114.276 103.681 114.899 97.5128C115.522 91.3445 113.831 85.1646 110.154 80.173C106.477 75.1814 101.076 71.7341 95.0003 70.5004ZM86.4503 20.0004H75.0003V8.55035L86.4503 20.0004ZM17.5003 110C15.5112 110 13.6035 109.21 12.197 107.804C10.7905 106.397 10.0003 104.489 10.0003 102.5V12.5004C10.0003 10.5112 10.7905 8.60357 12.197 7.19705C13.6035 5.79053 15.5112 5.00035 17.5003 5.00035H67.3253C68.2302 4.99865 69.1307 5.1249 70.0003 5.37535V22.5004C70.0003 23.1634 70.2637 23.7993 70.7325 24.2681C71.2014 24.737 71.8372 25.0004 72.5003 25.0004H89.6253C89.8757 25.8699 90.002 26.7705 90.0003 27.6754V70.0004C85.3575 70.0004 80.8064 71.2932 76.857 73.7341C72.9076 76.1749 69.7159 79.6674 67.6396 83.82C65.5633 87.9727 64.6843 92.6215 65.1013 97.2455C65.5182 101.87 67.2146 106.286 70.0003 110H17.5003ZM90.0003 115C85.5276 115.005 81.1847 113.498 77.6753 110.725L77.3003 110.425C74.1261 107.806 71.8374 104.27 70.7464 100.302C69.6554 96.3335 69.8153 92.1251 71.2042 88.2509C72.5931 84.3767 75.1435 81.0253 78.5073 78.6539C81.8711 76.2825 85.8846 75.0067 90.0003 75.0004C90.6664 74.9622 91.3342 74.9622 92.0003 75.0004H92.5003C97.8046 75.3319 102.76 77.757 106.276 81.7421C109.793 85.7273 111.582 90.946 111.25 96.2504C110.919 101.555 108.494 106.51 104.509 110.026C100.523 113.543 95.3046 115.332 90.0003 115Z"
        fill={color || 'white'}
      />
      <path
        d="M94.9991 89.3252C95.9525 89.8756 97.0609 90.096 98.1523 89.9522C99.2438 89.8083 100.257 89.3083 101.036 88.5297C101.814 87.751 102.313 86.7373 102.457 85.6458C102.6 84.5542 102.379 83.4459 101.828 82.4928C101.277 81.5397 100.427 80.7951 99.4095 80.3744C98.3921 79.9538 97.2644 79.8807 96.2012 80.1664C95.1381 80.4522 94.199 81.0808 93.5296 81.9548C92.8602 82.8288 92.4979 83.8993 92.4991 85.0002L82.4991 90.7002C81.7391 90.2593 80.8764 90.0265 79.9979 90.0252C79.1193 90.0238 78.2559 90.254 77.4946 90.6925C76.7333 91.131 76.101 91.7623 75.6614 92.5229C75.2217 93.2836 74.9902 94.1466 74.9902 95.0252C74.9902 95.9037 75.2217 96.7668 75.6614 97.5274C76.101 98.288 76.7333 98.9193 77.4946 99.3578C78.2559 99.7963 79.1193 100.027 79.9979 100.025C80.8764 100.024 81.7391 99.791 82.4991 99.3502L92.4991 105C92.5034 106.1 92.8703 107.168 93.5428 108.038C94.2154 108.908 95.1561 109.532 96.2193 109.814C97.2825 110.095 98.4088 110.018 99.4239 109.595C100.439 109.172 101.286 108.425 101.834 107.472C102.382 106.518 102.6 105.411 102.455 104.32C102.31 103.23 101.81 102.218 101.031 101.441C100.253 100.664 99.2397 100.166 98.1492 100.023C97.0587 99.8798 95.9515 100.1 94.9991 100.65L84.9991 95.0002L94.9991 89.3252Z"
        fill={color || 'white'}
      />
      <path
        d="M19.9994 59.9998H69.9994C70.6624 59.9998 71.2983 59.7364 71.7672 59.2676C72.236 58.7987 72.4994 58.1628 72.4994 57.4998C72.4994 56.8368 72.236 56.2009 71.7672 55.732C71.2983 55.2632 70.6624 54.9998 69.9994 54.9998H19.9994C19.3363 54.9998 18.7005 55.2632 18.2316 55.732C17.7628 56.2009 17.4994 56.8368 17.4994 57.4998C17.4994 58.1628 17.7628 58.7987 18.2316 59.2676C18.7005 59.7364 19.3363 59.9998 19.9994 59.9998Z"
        fill={color || 'white'}
      />
      <path
        d="M19.9994 40.0004H59.9994C60.6624 40.0004 61.2983 39.737 61.7672 39.2681C62.236 38.7993 62.4994 38.1634 62.4994 37.5004C62.4994 36.8373 62.236 36.2014 61.7672 35.7326C61.2983 35.2638 60.6624 35.0004 59.9994 35.0004H19.9994C19.3363 35.0004 18.7005 35.2638 18.2316 35.7326C17.7628 36.2014 17.4994 36.8373 17.4994 37.5004C17.4994 38.1634 17.7628 38.7993 18.2316 39.2681C18.7005 39.737 19.3363 40.0004 19.9994 40.0004Z"
        fill={color || 'white'}
      />
      <path
        d="M49.9994 75.0001H19.9994C19.3363 75.0001 18.7005 75.2635 18.2316 75.7323C17.7628 76.2012 17.4994 76.837 17.4994 77.5001C17.4994 78.1631 17.7628 78.799 18.2316 79.2679C18.7005 79.7367 19.3363 80.0001 19.9994 80.0001H49.9994C50.6624 80.0001 51.2983 79.7367 51.7672 79.2679C52.236 78.799 52.4994 78.1631 52.4994 77.5001C52.4994 76.837 52.236 76.2012 51.7672 75.7323C51.2983 75.2635 50.6624 75.0001 49.9994 75.0001Z"
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

export default File;