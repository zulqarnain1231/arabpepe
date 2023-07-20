import React from "react";
import Text from "../shared/Typography/Text";
import { TbSquareRoundedChevronRightFilled } from "react-icons/tb";

 
const MapCard = ({ options, title }) => {
  return (
    <div className="md:h-[320px] h-[350px] md:w-[600px] w-full border-2 rounded-tr-[40px] rounded-bl-[40px] border-white-main p-6 m-auto">
      <div className="h-full w-full flex flex-col items-start justify-start gap-2 border-2 border-white-main rounded-tr-[40px] rounded-bl-[40px] p-2">
        <p className="font-[500] text-white-main text-[18px]">{title}</p>
        <div className="w-full flex flex-col gap-2 items-start justify-start">
          {options.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full flex items-center justify-start gap-2"
              >
                <TbSquareRoundedChevronRightFilled className="text-white-main" />
                <Text text={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MapCard;
