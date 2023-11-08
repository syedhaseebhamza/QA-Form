import React from "react";
// import PropTypes from "prop-types";

function Btn({ label, onClick, className, children }) {
  return (
    <div>
      <button className={className} onClick={onClick}>
        {label}
        {children}
      </button>
    </div>
  );
}

export default Btn; 

// Btn.prototype = {
//   label: PropTypes.string.isRequired,
//   children: PropTypes.string.isRequired,
// };

// Btn.defaultProps = {
//   label: "set text here ",
// };
