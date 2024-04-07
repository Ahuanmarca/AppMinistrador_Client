// import * as React from 'react';

function HelpIcon({ color = '#024B59' } : { color: string }) {
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
          d="M12.4479 18.75C12.8125 18.75 13.1208 18.624 13.3729 18.3719C13.625 18.1198 13.7507 17.8118 13.75 17.448C13.75 17.0834 13.6243 16.775 13.3729 16.523C13.1215 16.2709 12.8132 16.1452 12.4479 16.1459C12.0833 16.1459 11.7753 16.2719 11.524 16.524C11.2726 16.7761 11.1465 17.0841 11.1458 17.448C11.1458 17.8125 11.2719 18.1209 11.524 18.373C11.776 18.625 12.084 18.7507 12.4479 18.75ZM11.5104 14.7396H13.4375C13.4375 14.1667 13.5028 13.7153 13.6333 13.3855C13.7639 13.0556 14.1326 12.6042 14.7396 12.0313C15.191 11.5799 15.5469 11.15 15.8073 10.7417C16.0677 10.3334 16.1979 9.8431 16.1979 9.27087C16.1979 8.29865 15.842 7.55212 15.1302 7.03129C14.4184 6.51046 13.5764 6.25004 12.6042 6.25004C11.6146 6.25004 10.8118 6.51046 10.1958 7.03129C9.57986 7.55212 9.15 8.17712 8.90625 8.90629L10.625 9.58337C10.7118 9.27087 10.9073 8.93233 11.2115 8.56775C11.5156 8.20317 11.9799 8.02087 12.6042 8.02087C13.1597 8.02087 13.5764 8.17296 13.8542 8.47712C14.1319 8.78129 14.2708 9.11532 14.2708 9.47921C14.2708 9.82643 14.1667 10.1521 13.9583 10.4563C13.75 10.7605 13.4896 11.0424 13.1771 11.3021C12.4132 11.9792 11.9444 12.4914 11.7708 12.8386C11.5972 13.1858 11.5104 13.8195 11.5104 14.7396ZM12.5 22.9167C11.059 22.9167 9.70486 22.6434 8.4375 22.0969C7.17014 21.5504 6.06771 20.808 5.13021 19.8698C4.19271 18.9323 3.45069 17.8299 2.90417 16.5625C2.35764 15.2952 2.08403 13.941 2.08333 12.5C2.08333 11.0591 2.35694 9.7049 2.90417 8.43754C3.45139 7.17018 4.1934 6.06775 5.13021 5.13025C6.06771 4.19275 7.17014 3.45074 8.4375 2.90421C9.70486 2.35768 11.059 2.08407 12.5 2.08337C13.941 2.08337 15.2951 2.35699 16.5625 2.90421C17.8299 3.45143 18.9323 4.19344 19.8698 5.13025C20.8073 6.06775 21.5497 7.17018 22.0969 8.43754C22.6441 9.7049 22.9174 11.0591 22.9167 12.5C22.9167 13.941 22.6431 15.2952 22.0958 16.5625C21.5486 17.8299 20.8066 18.9323 19.8698 19.8698C18.9323 20.8073 17.8299 21.5497 16.5625 22.0969C15.2951 22.6441 13.941 22.9174 12.5 22.9167ZM12.5 20.8334C14.8264 20.8334 16.7969 20.0261 18.4115 18.4115C20.026 16.7969 20.8333 14.8264 20.8333 12.5C20.8333 10.1737 20.026 8.20317 18.4115 6.58858C16.7969 4.974 14.8264 4.16671 12.5 4.16671C10.1736 4.16671 8.20312 4.974 6.58854 6.58858C4.97396 8.20317 4.16667 10.1737 4.16667 12.5C4.16667 14.8264 4.97396 16.7969 6.58854 18.4115C8.20312 20.0261 10.1736 20.8334 12.5 20.8334Z"
          fill={color}
        />
      </svg>
    </div>
  )
}

export default HelpIcon;
