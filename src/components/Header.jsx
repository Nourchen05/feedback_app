import React from "react";

const Header = ({ text, bgColor, textColor }) => {
  return (
    <header style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: "Feedback App",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

Header.propTypes = {
  text: propTypes.string,
  bgColor: propType.string,
  textColor: propType.string,
};

export default Header;
