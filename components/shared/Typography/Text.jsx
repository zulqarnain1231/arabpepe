import React from "react";

const Text = ({ text, style = "text-white-main font-[400]" }) => {
  return <p className={`${style} text-[16px]`}>{text}</p>;
};

export default Text;
