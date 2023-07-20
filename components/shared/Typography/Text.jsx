import React from "react";

const Text = ({ text, style = "text-white-main font-[400]" }) => {
  return <p className={`${style} sm:text-[18px] text-[14px]`}>{text}</p>;
};

export default Text;
