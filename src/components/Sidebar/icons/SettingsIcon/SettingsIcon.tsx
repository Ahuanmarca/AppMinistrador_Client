// import * as React from 'react';

function SettingsIcon({ color = '#024B59' }: { color: string }) {
  return (
    <div>
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.7292 13.1875C20.5622 12.9974 20.4701 12.753 20.4701 12.5C20.4701 12.247 20.5622 12.0026 20.7292 11.8125L22.0625 10.3125C22.2094 10.1486 22.3007 9.94239 22.3231 9.72344C22.3456 9.50448 22.2981 9.28404 22.1875 9.09374L20.1042 5.48958C19.9947 5.29949 19.828 5.14882 19.6279 5.05904C19.4277 4.96926 19.2044 4.94495 18.9896 4.98958L17.0313 5.38541C16.7821 5.4369 16.5227 5.3954 16.302 5.26874C16.0813 5.14209 15.9146 4.93904 15.8334 4.69791L15.1979 2.79166C15.1281 2.58476 14.9949 2.40506 14.8173 2.27795C14.6398 2.15085 14.4267 2.08276 14.2084 2.08333H10.0417C9.81453 2.07147 9.58974 2.13429 9.40165 2.26219C9.21356 2.3901 9.0725 2.57605 9.00002 2.79166L8.41669 4.69791C8.33544 4.93904 8.16874 5.14209 7.94805 5.26874C7.72737 5.3954 7.46795 5.4369 7.21877 5.38541L5.20835 4.98958C5.00476 4.96081 4.79721 4.99293 4.61184 5.08191C4.42647 5.17088 4.27158 5.31273 4.16669 5.48958L2.08335 9.09374C1.96998 9.28192 1.919 9.50112 1.93771 9.72002C1.95642 9.93891 2.04386 10.1463 2.18752 10.3125L3.51044 11.8125C3.67744 12.0026 3.76954 12.247 3.76954 12.5C3.76954 12.753 3.67744 12.9974 3.51044 13.1875L2.18752 14.6875C2.04386 14.8537 1.95642 15.0611 1.93771 15.28C1.919 15.4989 1.96998 15.7181 2.08335 15.9062L4.16669 19.5104C4.27616 19.7005 4.44285 19.8512 4.64299 19.9409C4.84313 20.0307 5.0665 20.055 5.28127 20.0104L7.2396 19.6146C7.48879 19.5631 7.7482 19.6046 7.96889 19.7312C8.18957 19.8579 8.35627 20.0609 8.43752 20.3021L9.07294 22.2083C9.14541 22.4239 9.28647 22.6099 9.47457 22.7378C9.66266 22.8657 9.88745 22.9285 10.1146 22.9167H14.2813C14.4996 22.9172 14.7127 22.8491 14.8903 22.722C15.0678 22.5949 15.201 22.4152 15.2709 22.2083L15.9063 20.3021C15.9875 20.0609 16.1542 19.8579 16.3749 19.7312C16.5956 19.6046 16.855 19.5631 17.1042 19.6146L19.0625 20.0104C19.2773 20.055 19.5007 20.0307 19.7008 19.9409C19.9009 19.8512 20.0676 19.7005 20.1771 19.5104L22.2604 15.9062C22.371 15.7159 22.4185 15.4955 22.3961 15.2765C22.3736 15.0576 22.2824 14.8514 22.1354 14.6875L20.7292 13.1875ZM19.1771 14.5833L20.0104 15.5208L18.6771 17.8333L17.4479 17.5833C16.6977 17.43 15.9173 17.5574 15.2548 17.9415C14.5923 18.3255 14.0939 18.9394 13.8542 19.6667L13.4584 20.8333H10.7917L10.4167 19.6458C10.177 18.9186 9.67854 18.3047 9.01607 17.9206C8.35359 17.5366 7.57317 17.4091 6.82294 17.5625L5.59377 17.8125L4.2396 15.5104L5.07294 14.5729C5.58539 14 5.8687 13.2583 5.8687 12.4896C5.8687 11.7209 5.58539 10.9792 5.07294 10.4062L4.2396 9.46874L5.57294 7.17708L6.8021 7.42708C7.55233 7.58043 8.33276 7.45299 8.99523 7.06895C9.65771 6.68491 10.1561 6.07099 10.3959 5.34374L10.7917 4.16666H13.4584L13.8542 5.35416C14.0939 6.08141 14.5923 6.69532 15.2548 7.07937C15.9173 7.46341 16.6977 7.59085 17.4479 7.43749L18.6771 7.18749L20.0104 9.49999L19.1771 10.4375C18.6704 11.0091 18.3906 11.7465 18.3906 12.5104C18.3906 13.2743 18.6704 14.0117 19.1771 14.5833ZM12.125 8.33333C11.3009 8.33333 10.4953 8.5777 9.81014 9.03554C9.12494 9.49337 8.59089 10.1441 8.27552 10.9055C7.96016 11.6668 7.87764 12.5046 8.03841 13.3129C8.19919 14.1211 8.59602 14.8636 9.17874 15.4463C9.76146 16.029 10.5039 16.4258 11.3121 16.5866C12.1204 16.7474 12.9582 16.6649 13.7195 16.3495C14.4809 16.0341 15.1316 15.5001 15.5895 14.8149C16.0473 14.1297 16.2917 13.3241 16.2917 12.5C16.2917 11.3949 15.8527 10.3351 15.0713 9.55371C14.2899 8.77231 13.2301 8.33333 12.125 8.33333ZM12.125 14.5833C11.713 14.5833 11.3102 14.4611 10.9676 14.2322C10.625 14.0033 10.358 13.6779 10.2003 13.2972C10.0426 12.9166 10.0013 12.4977 10.0817 12.0936C10.1621 11.6894 10.3605 11.3182 10.6519 11.0269C10.9432 10.7355 11.3145 10.5371 11.7186 10.4567C12.1227 10.3763 12.5416 10.4176 12.9223 10.5752C13.303 10.7329 13.6283 11 13.8572 11.3426C14.0862 11.6852 14.2084 12.0879 14.2084 12.5C14.2084 13.0525 13.9889 13.5824 13.5982 13.9731C13.2075 14.3638 12.6776 14.5833 12.125 14.5833Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export default SettingsIcon;
