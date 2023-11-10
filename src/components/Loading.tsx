import React from "react";
import loading from "../icons/spinner.gif";

function Loading() {
  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-green flex items-center justify-center z-50">
      <img src={loading} alt="" className="scale-150"/>
    </div>
  );
}

export default Loading;
