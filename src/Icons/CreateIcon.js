import React from "react";

const CreateIcon = ({ onClick }) => {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: "pointer" }}
      onClick={onClick}
    >
      <path
        d="M21 0C15.4512 0.0669441 10.1486 2.30093 6.22478 6.22478C2.30093 10.1486 0.0669441 15.4512 0 21C0.0669441 26.5488 2.30093 31.8514 6.22478 35.7752C10.1486 39.6991 15.4512 41.9331 21 42C26.5488 41.9331 31.8514 39.6991 35.7752 35.7752C39.6991 31.8514 41.9331 26.5488 42 21C41.9331 15.4512 39.6991 10.1486 35.7752 6.22478C31.8514 2.30093 26.5488 0.0669441 21 0ZM33 22.5H22.5V33H19.5V22.5H9V19.5H19.5V9H22.5V19.5H33V22.5Z"
        fill="#004CBD"
      />
    </svg>
  );
};

export default CreateIcon;
