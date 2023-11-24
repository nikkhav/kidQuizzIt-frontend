import React from "react";
import loading from "../../icons/spinner.gif";
import "./loading.css";

const Loading:React.FC = () =>{
  return (
    <div className="loading">
      <span className="loader"></span>
    </div>
  );
}

export default Loading;
