import React from "react";
import Wrapper from "./shared/Wrapper";
import Heading from "./shared/Typography/Heading";

const TradingChart = () => {
  return (
    <div className="w-full">
      <Wrapper id={"tradeChart"} style="py-16">
        <div className="w-full h-full flex flex-col md:items-center items-start justify-start gap-10">
          <Heading text="Arab Pepe to USD Chart" />
          <div className="w-full h-[500px]">
            <iframe
              height="100%"
              width="100%"
              id="geckoterminal-embed"
              title="GeckoTerminal Embed"
              src="https://www.geckoterminal.com/bsc/pools/0xc47672cd8f50ae03156684cb523b1ed4bb349f2f?embed=1&info=1&swaps=1"
              frameborder="0"
              allow="clipboard-write"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default TradingChart;
