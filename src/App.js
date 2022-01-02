import React from "react";
import Header from "./components/Header";

const App = ({ text }) => {
  return (
    <>
      <Header />
      <div className="container">
        <h1>My App</h1>
        <h2>{text}</h2>
      </div>
    </>
  );
};

Header.defaultProps = {
  text: "Feedback UI",
};

export default App;
