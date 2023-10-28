import React, { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
};
const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className="container mx-auto">{children}</div>;
};

export default Wrapper;
