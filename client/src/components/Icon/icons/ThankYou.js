const ThankYou = ({ width, height, color, ...props }) => (
  <svg
    width={width || '150'}
    height={height || '150'}
    viewBox="0 0 150 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M75.37 133.28L133.61 75C125.959 75.0013 118.383 76.51 111.315 79.4398C104.247 82.3696 97.8252 86.6631 92.4169 92.0752C87.0085 97.4872 82.7194 103.912 79.7944 110.982C76.8695 118.052 75.3661 125.629 75.37 133.28Z"
      fill={color || 'white'}
    />
    <path
      d="M70.69 114.84C64.4812 114.112 58.5288 111.941 53.3086 108.502C48.0884 105.062 43.7452 100.449 40.6259 95.0317C37.5067 89.6141 35.698 83.542 35.3443 77.3005C34.9907 71.0591 36.1019 64.8215 38.5892 59.0863C41.0765 53.351 44.8709 48.277 49.6692 44.2699C54.4674 40.2628 60.1365 37.4336 66.2233 36.0085C72.3101 34.5834 78.6459 34.6019 84.7243 36.0625C90.8027 37.523 96.4552 40.3852 101.23 44.4202C101.403 44.5879 101.609 44.7182 101.834 44.8032C102.06 44.8881 102.301 44.9258 102.541 44.9139C102.782 44.902 103.018 44.8409 103.234 44.7342C103.45 44.6274 103.642 44.4775 103.798 44.2936C103.953 44.1097 104.07 43.8957 104.139 43.665C104.209 43.4343 104.231 43.1917 104.203 42.9523C104.175 42.7129 104.098 42.4818 103.977 42.2733C103.856 42.0648 103.694 41.8834 103.5 41.7402C98.3062 37.3561 92.159 34.2473 85.5497 32.6621C78.9403 31.0769 72.0518 31.0592 65.4344 32.6105C58.817 34.1618 52.654 37.2391 47.4377 41.5965C42.2215 45.954 38.0965 51.4709 35.3922 57.7065C32.6879 63.9422 31.4792 70.7239 31.8628 77.5098C32.2464 84.2958 34.2115 90.8981 37.6012 96.7893C40.991 102.681 45.7114 107.697 51.3854 111.439C57.0595 115.181 63.5299 117.544 70.28 118.34H70.49C70.9417 118.344 71.3774 118.173 71.7069 117.864C72.0365 117.555 72.2346 117.131 72.2603 116.68C72.286 116.229 72.1373 115.786 71.845 115.441C71.5527 115.097 71.1392 114.878 70.69 114.83V114.84Z"
      fill={color || 'white'}
    />
    <path
      d="M135 76.1601L135.08 76.0601C135.107 76.0224 135.13 75.9822 135.15 75.9401C135.177 75.8955 135.201 75.8487 135.22 75.8001L135.28 75.6501C135.28 75.6501 135.28 75.5601 135.28 75.5101C135.285 75.4702 135.285 75.43 135.28 75.3901C135.285 75.3302 135.285 75.27 135.28 75.2101C135.285 63.3585 131.781 51.7707 125.208 41.9084C118.636 32.0462 109.29 24.3514 98.3492 19.7946C87.4086 15.2378 75.3635 14.0231 63.7334 16.3039C52.1033 18.5847 41.4092 24.2586 33 32.6101C24.6247 40.9997 18.9223 51.6824 16.6126 63.3098C14.3028 74.9372 15.4892 86.9883 20.022 97.9421C24.5548 108.896 32.2308 118.261 42.0813 124.857C51.9319 131.452 63.5154 134.982 75.37 135H75.55H75.68H75.83L75.98 134.95L76.11 134.89C76.1501 134.873 76.1873 134.849 76.22 134.82L76.32 134.75L76.43 134.65L134.67 76.4101L135 76.1601ZM55.57 92.2701V86.4101H95.18V87.2101C93.8 88.3601 92.47 89.5701 91.18 90.8601C90.71 91.3201 90.26 91.7901 89.82 92.2701H55.57ZM129.2 77.0001L77.3 128.9C78.3699 115.492 84.1815 102.904 93.6926 93.3927C103.204 83.8817 115.792 78.07 129.2 77.0001ZM18.89 75.0001C18.8248 60.1278 24.6283 45.8299 35.0406 35.2104C45.4529 24.5909 59.6336 18.5069 74.5044 18.2791C89.3751 18.0513 103.736 23.6982 114.468 33.9938C125.201 44.2894 131.44 58.4027 131.83 73.2701C127.501 73.4082 123.2 74.0117 119 75.0701C118.994 64.7734 115.35 54.81 108.71 46.9401C108.405 46.6059 107.984 46.4017 107.533 46.3698C107.082 46.3379 106.636 46.4808 106.288 46.7688C105.939 47.0569 105.715 47.468 105.661 47.9169C105.608 48.3658 105.729 48.8182 106 49.1801C112.094 56.4046 115.44 65.5489 115.45 75.0001C115.45 75.3401 115.45 75.6901 115.45 76.0001C110.136 77.6861 105.086 80.1134 100.45 83.2101C100.134 82.9523 99.7381 82.8111 99.33 82.8101H98.89L101 56.2001C101.027 55.8561 100.953 55.5117 100.786 55.2097C100.619 54.9077 100.366 54.6615 100.061 54.5017C99.7548 54.3418 99.4088 54.2754 99.0655 54.3107C98.7222 54.346 98.3969 54.4814 98.13 54.7001L88.1 63.0001L76.68 50.2001C76.5158 50.0147 76.3141 49.8663 76.0883 49.7647C75.8624 49.663 75.6176 49.6104 75.37 49.6104C75.1223 49.6104 74.8775 49.663 74.6517 49.7647C74.4258 49.8663 74.2242 50.0147 74.06 50.2001L62.65 63.0001L52.58 54.7001C52.3139 54.4801 51.9886 54.3437 51.6452 54.3081C51.3018 54.2725 50.9555 54.3393 50.65 54.5001C50.3446 54.661 50.0929 54.9076 49.9259 55.2096C49.7589 55.5117 49.6838 55.8559 49.71 56.2001L51.48 77.7601C51.4836 78.0012 51.5368 78.239 51.6362 78.4587C51.7355 78.6783 51.879 78.8753 52.0576 79.0372C52.2363 79.1992 52.4463 79.3227 52.6746 79.4001C52.903 79.4776 53.1448 79.5072 53.3851 79.4873C53.6254 79.4674 53.859 79.3983 54.0715 79.2844C54.284 79.1704 54.4708 79.014 54.6204 78.8249C54.7699 78.6357 54.879 78.4179 54.9409 78.1848C55.0027 77.9518 55.016 77.7085 54.98 77.4701L53.56 60.0601L61.71 66.7901C62.0602 67.0806 62.5098 67.2232 62.9635 67.1877C63.4171 67.1522 63.8391 66.9415 64.14 66.6001L75.37 54.0001L86.6 66.6001C86.9008 66.9415 87.3228 67.1522 87.7764 67.1877C88.2301 67.2232 88.6797 67.0806 89.03 66.7901L97.19 60.0601L95.31 82.8901H51.47C51.0032 82.8901 50.5555 83.0755 50.2255 83.4056C49.8954 83.7357 49.71 84.1833 49.71 84.6501C49.71 85.1169 49.8954 85.5645 50.2255 85.8946C50.5555 86.2247 51.0032 86.4101 51.47 86.4101H52.05V94.0001C52.05 94.4669 52.2354 94.9145 52.5655 95.2446C52.8955 95.5747 53.3432 95.7601 53.81 95.7601H86.81C78.6487 105.909 74.0369 118.452 73.68 131.47C59.0013 131.018 45.0746 124.871 34.8483 114.332C24.6219 103.792 18.8986 89.6857 18.89 75.0001Z"
      fill={color || 'white'}
    />
  </svg>
);

export default ThankYou;