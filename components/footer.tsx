import React from 'react'
import Image from "next/image";
import arrow from "../public/arrow.svg";
import photo3 from "../public/photo-3.png";
import photo20 from "../public/photo-20.png";
import photo8 from "../public/photo-8.png";
import photo17 from "../public/photo-17.png";
import Logo from "../public/logo.svg";
import mail from "../public/mail.svg";
import rss from "../public/rss.svg";
import search from "../public/search.svg";
import twitter from "../public/twitter.svg";
import facebook from "../public/facebook.svg";
import ig from "../public/instagram.svg";

const Footer = () => {
  return (
    <>
    <div className=''> <div className="text-center bg-[#F5F5F5]  ">
            <h1 style={{ fontSize: "25px" }}>
              Follow my lifestyle daily on Instagram and join 100k others.
            </h1>
            @ thestyledlife / #thestyledlife
          </div>
       
      </div>
      <div className="border-b-2  border-[black] p-3 md:p-0">
        <div className="md:flex justify-between md:px-[10vw] py-5 md:py-10 ">
          <div className="md:max-w-[30vw] font-semibold">
            <Image width={200} src={Logo} alt="logo" /> <br />
            <h1 className="font-semibold">
              Get inspired! Receive discounts, tips and behind the scenes
              stories.
            </h1>
            <br />
            <div className="w-full">
              <input
                className="rounded-full  py-2 md:px-9 bg-[#F5F5F5] absolute w-[100%] md:w-fit"
                type="email"
                name=""
                id=""
                placeholder="Your emai"
              />{" "}
              <button className="rounded-full bg-[yellow] py-2 md:px-9 relative ms-[70%] md:ms-[60%] w-[30%] md:w-fit text-white">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row  gap-2 max-w-[30vw] font-semibold">
            <div>About</div>
            <div>Blog</div>
            <div>Contact</div>
          </div>
          <div className="flex flex-col justify-between w-full max-w-[20vw]">
            <div className="flex">
              {" "}
              <span>
                <input type="text" name="" id="" placeholder="type here..." />
              </span>
              <span>
                {" "}
                <Image src={search} alt="arrow" width={25} />
              </span>
            </div>
            <div>
              <ul className="flex gap-6 justify-end">
                <li>
                  {" "}
                  <Image width={20} src={rss} alt="rss" />{" "}
                </li>
                <li>
                  {" "}
                  <Image width={20} src={facebook} alt="facebook" />{" "}
                </li>
                <li>
                  {" "}
                  <Image width={20} src={ig} alt="instagram" />
                </li>
                <li>
                  {" "}
                  <Image width={20} src={twitter} alt="twitter" />
                </li>

                <li>
                  {" "}
                  <Image width={20} src={mail} alt="mail" />{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-[10vw] flex justify-center md:justify-normal md:gap-60 text-xs font-semibold">
        <div className="w-full">© thestyledlife 2024, All rights reserved</div>
        <div className="w-full">
          <span className="w-full">Privacy Policy</span>
          <span className="w-full">Terms of Service</span>
        </div></div>
        </>
  )
}

export default Footer