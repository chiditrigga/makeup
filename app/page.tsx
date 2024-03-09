import NAV from "@/components/nav";
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
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
     
      <div>
        <div
          className="bg-[url('../public/background-image.png')]  min-h-[70vh] md:min-h-[93vh] shadow-xl shadow-black"
          style={{ backgroundSize: "cover" }}
        >
          <div className="md:ps-[10vw] md:pt-[15vh] top-40  md:top-40">
            <div className="">
              <h1 className="md:max-w-[40vw] text-6xl py-5">
                {" "}
                Elevate Life. With Style.
              </h1>
            </div>
            <div className="">
              <p className="md:max-w-[40vw]">
                Explore a curated blend of style and purpose at THE LIFESTYLED,
                where every post is a step towards a more inspired and elevated
                life.
              </p>{" "}
              <br />
              <span>
                <button
                  className="px-7 py-2"
                  style={{
                    border: "1px solid yellow",
                    borderRadius: "30px",
                    color: "white",
                    background: "yellow",
                  }}
                >
                  Read Blog
                </button>
              </span>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div style={{ background: "#F5F5F5" }} className="pt-[10vh]">
        <div className="xl:mx-[10vw] md:mx-[3px]">
          <div className="flex px-2 justify-between font-extrabold py-3">
            <div>Blog Post</div>
            <div className="flex">
              {" "}
              <span>view all posts</span>{" "}
              <span>
                <Image src={arrow} alt="arrow" width={25} />
              </span>{" "}
            </div>
          </div>

          <div className="md:flex justify-between mb-2">
            <div className="md:max-w-[45vw] m-2">
              <div
                style={{ background: "white" }}
                className="md:p-5 p-2 max-h-full"
              >
                <Image src={photo3} alt="pics" width={600} />
                <div className="flex justify-between pt-3">
                  <span>
                    {" "}
                    <button
                      className="md:px-3 px-1 py-1"
                      style={{
                        border: "1px solid red",
                        borderRadius: "30px",
                        color: "white",
                        background: "red",
                      }}
                    >
                      Beauty
                    </button>
                  </span>
                  <span>6 Dec 2023</span>
                </div>
                <p className="pt-3">
                  12 Style essentials that make it easy to get dressed
                </p>
              </div>
              <div className="md:flex justify-between ">
                <div>
                  {" "}
                  <div
                    style={{ background: "white" }}
                    className="md:p-5 p-2 mt-5 md:me-4 min-h-full "
                  >
                    <Image src={photo8} alt="pics" width={500} />
                    <div className="flex justify-between pt-3">
                      <span>
                        {" "}
                        <button
                          className="md:px-3 px-1 py-1"
                          style={{
                            border: "1px solid orange",
                            borderRadius: "30px",
                            color: "white",
                            background: "orange",
                          }}
                        >
                          fashion
                        </button>
                      </span>
                      <span>6 Dec 2023</span>
                    </div>
                    <p className="pt-3 pb-1">
                      The Key Spring/Summer 2024 Trends To Know Now
                    </p>
                  </div>{" "}
                </div>
                <div>
                  {" "}
                  <div
                    style={{ background: "white" }}
                    className="md:p-5 p-2 mt-5 min-h-full"
                  >
                    <Image src={photo20} alt="pics" width={500} />
                    <div className="flex justify-between pt-3">
                      <span>
                        {" "}
                        <button
                          className="md:px-3 px-1 py-1"
                          style={{
                            border: "1px solid blue",
                            borderRadius: "30px",
                            color: "white",
                            background: "blue",
                          }}
                        >
                          Life style
                        </button>
                      </span>
                      <span>6 Dec 2023</span>
                    </div>
                    <p className="pt-3 pb-1">A Woman's lifestyle journal</p>
                  </div>{" "}
                </div>
              </div>
            </div>
            <div>
              {" "}
              <div
                style={{ background: "white" }}
                className="md:p-5 mt-2 p-2 max-h-full"
              >
                <Image src={photo17} alt="pics" />
                <div className="flex justify-between pt-3">
                  <span>
                    {" "}
                    <button
                      className="md:px-3 px-1 py-1"
                      style={{
                        border: "1px solid red",
                        borderRadius: "30px",
                        color: "white",
                        background: "red",
                      }}
                    >
                      Beauty
                    </button>
                  </span>
                  <span>21 Nov 2023</span>
                </div>
                <p className="pt-3 pb-1">Unveiling Beauty Secrets</p>
              </div>{" "}
            </div>
          </div>
          </div>
<div className="border-b-2 py-8 border-[#c9c9c9]"></div>
          <div className="md:flex justify-between xl:mx-[10vw] md:mx-[3px] pt-10">
            <div className="md:max-w-[50%] p-3">
              <p className="text-2xl md:text-4xl">Welcome, I'm Caroline</p>
              <br />
              <h3 className="py-2 pb-3">
                My name is Carolina, and I'm delighted to invite you into the
                captivating chapters of my lifestyle journey. Here, within the
                pages of my blog, you'll discover a harmonious blend of beauty,
                fashion, wellness, and the art of mindful living. Join me as we
                navigate the vibrant realms of curated fashion, where personal
                style meets expression.{" "}
              </h3>
              <h3>
                Unveil the secrets of my wellness rituals, each designed to
                embrace a holistic approach to beauty from the inside out.
                Together, let's explore the soulful art of mindful living, where
                every moment becomes an opportunity to dance with style, embrace
                grace, and uncover the enchantment in the ordinary.
              </h3>
              <h3 className="py-3">
                These pages are not just a blog but a sanctuary for those
                seeking inspiration for a life well-lived, adorned with beauty,
                curated fashion, and the essence of mindful elegance. I'm
                thrilled to share this journey with you
              </h3>
            </div>

            <div>nnnnnnnnnnn</div>
          </div>

         
      </div>
    </>
  );
}
