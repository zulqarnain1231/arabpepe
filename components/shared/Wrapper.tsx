import React from "react";

interface Props {
  children: React.ReactNode;
  id: string;
  style?: string;
}

const Wrapper: React.FC<Props> = ({ children, style, id }) => {
  return (
    <section id={id} className={`w-full ${style}`}>
      <div className="w-full h-full max-w-[1280px] mx-auto md:px-8 px-4">
        {children}
      </div>
    </section>
  );
};

export default Wrapper;
