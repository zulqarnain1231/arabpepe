import React from "react";
import Heading from "../shared/Typography/Heading";
import Text from "../shared/Typography/Text";
import { TbSquareRoundedChevronRightFilled } from "react-icons/tb";
import { BsArrowUpRight } from "react-icons/bs";
import FilledButton from "../shared/Buttons/FilledButton";
import Data from "../../constants/Json/Dummy.json";

const Tokenomics = () => {
  const { tokenList } = Data.Tokenomics;

  return (
    <div className="w-full flex flex-col items-center md:items-start justify-start gap-6">
      <Heading text="Tokenomics" />
      {tokenList.map((item, index) => {
        return (
          <div
            key={index}
            className="w-full flex items-center justify-start gap-4"
          >
            <TbSquareRoundedChevronRightFilled className="text-white-main h-[24px] w-[24px]" />
            <Text text={`${item.title}:`} style="text-brand-main font-[500]" />
            {item.link ? (
              <div className="flex items-center justify-start gap-2">
                <a className="text-white-main font-[400]" href={item.link}>
                  {item.text}
                </a>
                <BsArrowUpRight className="text-white-main h-[16px] w-[16px]" />
              </div>
            ) : (
              <Text text={item.text} />
            )}
          </div>
        );
      })}

      <Text
        text="The official contract address
        for $APEPE token is"
      />
      <a
        href="https://bscscan.com/token/0x463464927671a2e8d406A1a3E64093D42a181C44"
        className="font-[400] text-[16px] text-brand-main"
      >
        0x463464927671a2e8d406A1a3E64093D42a181C44
      </a>
      <FilledButton text="How to Pay" link="#howToPay" />
    </div>
  );
};

export default Tokenomics;
