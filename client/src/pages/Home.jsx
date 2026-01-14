import React from "react";
import Navbar from "../components/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import CircularText from "../components/CircularText";

const Home = () => {
  gsap.registerPlugin(SplitText);
  useGSAP(() => {
      const text = new SplitText(".TEXT", {
      type: "lines,chars",
    });
    // const para = new SplitText(".para", {
    //   type: "lines,chars",
    // });
    gsap.from(text.chars, {
      duration: 1.8,
      opacity: 0,
      yPercent: 100,
      stagger: 0.05,
      ease: "expo.out",
      delay:1.5
    });
    gsap.from(".detail", {
      duration: 1.8,
      opacity: 0,
      y: 50,
      ease: "Power3.InOut",
      delay: 2,
    });
    gsap.from(".detail1,.detail2,.detail3", {
      duration: 1.8,
      opacity: 0,
      y: 50,
      stagger: 0.05,
      ease: "Power3.InOut",
      delay: 2,
});
gsap.fromTo(".coffeemug", {
    opacity: 0,
    y:250,
    x:-200,
    scale:0.5,
    rotate:-25,
    duration:1.8
},{
    opacity: 1,
    y:-50,
    x:-200,
    duration: 1.2,
    ease: "Power3.InOut",
    delay:2.5,
    scale:1,
    rotate:0
});
gsap.fromTo(".custom-class",{
  opacity: 0,
  scale:5,
},{
  opacity: 1,
  scale: 1,
  duration: 1.2,
  ease: "Power3.InOut",
  delay: 2.5
});

    }, []);
  return (
    <>
      <section
        className="main overflow-hidden w-full relative h-screen"
        style={{
          backgroundImage: "url('./green.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // backgroundBlendMode: "darken",
          backgroundColor: "rgba(20, 40, 20, 0.85)",
        }}
      >
        <div className="h-22 ">
          <Navbar />
        </div>
       <h1
  className="TEXT text-center text-white tracking-wide text-8xl mt-2 font-semibold"
  style={{
    background: "linear-gradient(120deg, #fff 10%, #ffbf1d 40%, #111 90%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    textShadow: "2px 2px 2px #111, 0 6px 20px #000"
  }}
>
  THE BEST COFFEE IS HERE IN YOUR CITY
</h1>
        <div className="detailbox flex md:px-20 mt-10 justify-between w-full   px-2 ">
          <div className="detail md:w-68">
            <p className="para text-xs  md:text-base text-gray-300 ">
              <span className="text-white text-base md:text-xl ">
                Claric Cafe
              </span>{" "}
              - where every cup is a premimum experience. Come,savor the
              differences!{" "}
            </p>
            <button className="text-xs md:text-base md:mt-2 bg-[#ffbf1d] text-[#935d15] font-medium px-2 py-1 rounded-xl">
              Explore Our Product
            </button>
          </div>
          <div className="md:w-78 details ">
            <div className="detail1 flex items-start gap-2">
              <i className="ri-seedling-fill text-center bg-[#e7c970]  text-emerald-900 md:w-9 md:text-sm  rounded-full"></i>
              <p className="para text-gray-300 md:text-base">
                <span className="text-sm md:text-lg text-white">
                  Premium Beans
                </span>
                : Sourced frim the finest farms, roasted to perfection.
              </p>
            </div>
            <div className="detail2 flex gap-2 items-start md:text-base text-xs  mt-1">
              <i className="ri-seedling-fill text-center bg-[#e7c970]  text-emerald-900 md:w-11 md:text-sm rounded-full"></i>
              <p className="para text-gray-300 md:text-base">
                <span className="text-sm text-white md:text-lg">
                  Nice Ambience
                </span>
                :A cozy welcoming space for work, relaxarion or catching up with
                friends
              </p>
            </div>
            <div className="detail3 flex items-start gap-2 md:text-base text-xs mt-1">
              <i className="ri-seedling-fill text-center bg-[#e7c970]  text-emerald-900 md:w-9 md:text-sm rounded-full"></i>
              <p className="para text-gray-300 md:text-base">
                <span className="text-sm text-white md:text-lg">
                  Affordable Prices
                </span>
                :Enjoy top-qulaity coffee without breaking the bank
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] md:left-1/2 md:-translate-x-1/2   w-full h-full absolute  md:-translate-y-[14%] translate-y-[20%]  rounded-full bg-[#092c23] "></div>
        <img
          className="coffeemug absolute  md:h-[75%] md:top-[45%] md:left-1/2 md:-translate-x-[43%] md:-translate-y-[12%] h-[75%] translate-x-[7%] translate-y-[20%] bottom-0"
          src="./coffeemug.png"
          alt=""
        />
        <CircularText
  text="CLARICE*CAFE*COZINAH*"
  onHover="slowDown"
  spinDuration={5}
  className="custom-class absolute right-10"
/>
      </section>
    </>
  );
};

export default Home;
