import React, { useState } from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import FilledButton from "./Buttons/FilledButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevvalue) => !prevvalue);
  };
  const menu = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "LitePaper",
      route: "/",
    },
    {
      name: "Contact",
      route: "#contact",
    },
    {
      name: "RoadMap",
      route: "#roadMap",
    },
  ];

  return (
    <Wrapper id="navbar" style="h-[70px]">
      <nav className="w-full h-full flex items-center justify-between bg-transparent">
        <div className="h-full flex items-center justify-start gap-10">
          <Link href={"/"} className="w-[46px] h-[46px] rounded-full relative">
            <Image
              className="rounded-full"
              src={"/Assets/logo.png"}
              alt=""
              fill
            />
          </Link>
        </div>

        <div className="h-full flex items-center justify-start gap-8">
          {menu.map((item, index) => {
            return (
              <Link
                href={`${item.route}`}
                key={index}
                className="font-[400] text-[16px] text-white-main md:inline-block hidden relative after:content-[''] after:absolute after:w-0 after:left-0 after:bottom-0 after:h-[2px] after:bg-white-main hover:after:w-full hover:after:duration-300 "
              >
                {item.name}
              </Link>
            );
          })}
          <div className="h-full md:flex items-center justify-center hidden">
            <FilledButton
              text="Buy $APEPE on PCS"
              link="/"
              style="px-5 h-[46px]"
            />
          </div>

          <AiOutlineMenu
            className="md:hidden inline-block h-[26px] w-[26px] text-white-main"
            onClick={toggleDrawer}
          />
        </div>

        {/* for mobile screen */}
        <Drawer
          anchor={"bottom"}
          open={isOpen}
          onClose={toggleDrawer}
          sx={{
            "& .MuiPaper-root": {
              height: "100vh",
              width: "100%",
              backdropFilter: "blur(10px)",
              background: "rgba(39, 69, 145, 0.44)",
            },
          }}
        >
          <div className="w-full h-full flex flex-col items-center justify-center gap-[50px] relative">
            <RxCross1
              onClick={toggleDrawer}
              className="absolute right-4 top-4 h-[24px] w-[24px] text-white-main"
            />

            {menu.map((item, index) => {
              return (
                <Link
                  href={`${item.route}`}
                  key={index}
                  className="font-[500] text-[16px] text-white-main"
                  onClick={toggleDrawer}
                >
                  {item.name}
                </Link>
              );
            })}
            <FilledButton
              text="Buy $APEPE on PCS"
              link="/"
              style="px-5 h-[46px]"
            />
          </div>
        </Drawer>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
