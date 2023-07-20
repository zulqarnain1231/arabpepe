import React from "react";
import Wrapper from "./shared/Wrapper";
import Image from "next/image";
import FilledButton from "./shared/Buttons/FilledButton";
import OutlinedButton from "./shared/Buttons/OutlinedButton";

const Hero = () => {
  return (
    <Wrapper id="hero">
      <div className="w-full flex flex-col items-center justify-start lg:grid lg:grid-cols-[1.5fr,1fr] gap-10 py-8">
        <div className="h-full w-full flex flex-col lg:items-start items-center justify-center gap-8">
          <h1 className="md:text-[56px] sm:text-[46px] bg-gradient-to-r from-white-main to-brand-main inline-block bg-clip-text text-transparent text-center text-[40px] font-[600] md:whitespace-nowrap">
            Welcome to ArabPepe!
          </h1>
          <div className=" lg:w-[80%] w-full">
            <p className="text-white-main text-[16px] font-[500] text-center lg:text-left ">
              JUST TO BE SAFE!: Check if you are currently on:
              <a href="/" className="text-brand-main">
                https://ArabPepe.com
              </a>{" "}
              🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸
            </p>
          </div>

          <div className="w-full flex sm:flex-row flex-col items-center justify-center lg:justify-start gap-10">
            <FilledButton text="Learn More" link="#learnMore" />
            <OutlinedButton text="Lite Paper(Soon)" link="/" />
          </div>
        </div>
        <div className="relative md:h-[500px]  h-[400px] w-full">
          <Image
            className="h-full w-full bounce"
            src={"/Assets/hero.png"}
            alt=""
            fill
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
