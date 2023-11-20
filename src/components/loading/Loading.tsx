import React from "react";
import loading from "../../icons/spinner.gif";
import "./loading.css";

const Loading:React.FC = () =>{
  return (
    <div className="loading">
      <img src={loading} alt=""/>
    </div>
  );
}

export default Loading;
