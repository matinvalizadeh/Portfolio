import "../css/firstView.css";
import { Button } from "antd";
import { Link } from "react-scroll";
import { useLanguageStore } from "../States/Store";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";

function FirstView() {
  const { websiteTexts, direction, oppositeDirection } = useLanguageStore();

  return (
    <section className="h-screen w-screen relative">
      <video
        id="background_video"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        disablePictureInPicture
        className="h-full w-full object-cover absolute top-0 right-0"
      >
        <source
          src={process.env.PUBLIC_URL + "/background-video.mp4"}
          type="video/mp4"
        />
      </video>

      <div
        className="z-10 absolute top-1/2 right-1/2 translate-x-1/2
        -translate-y-1/2 w-[85vw] md:flex md:justify-between max-w-[1000px]
        md:items-center "
        style={{
          direction: oppositeDirection,
        }}
      >
        {/* Picture Circle */}
        <motion.div
          initial={{
            x: isMobile ? 0 : 150,
          }}
          animate={{
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="w-[60vw] h-[60vw] md:w-[280px] md:h-[280px] mx-auto flex justify-center items-center
          md:m-0 lg:w-[350px] lg:h-[350px]"
          id="picture_circle"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/Matin-Valizadeh.png"}
            alt={websiteTexts.profileImageAlt}
            className="rounded-full w-[93%] h-[93%] md:w-[96%] md:h-[96%]"
          />
        </motion.div>

        {/* Title, Job-title, the Button */}
        <motion.div
          style={{
            direction: direction,
          }}
          initial={{
            x: isMobile ? 0 : -150,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          <h1
            className={`block font-black color-black text-[43px] mt-8 md:text-[48px] lg:text-[70px] ${
              direction === "rtl" ? "text-right" : "text-left"
            } text-center md:text-${direction === "rtl" ? "right" : "left"}`}
          >
            {websiteTexts.fullName}
          </h1>

          <span
            className={`block text-[#888888] text-[18px] mt-[5px] md:text-[20px] lg:text-[23px] ${
              direction === "rtl" ? "text-right" : "text-left"
            }`}
          >
            {websiteTexts.jobTitle}
          </span>
          <Link to="portfolios" smooth={true} duration={300}>
            <Button
              type="primary"
              className="mt-[30px] block w-[180px] h-[47px] text-[18px] mx-auto md:mx-0
            lg:text-[21px] lg:w-[190px] lg:h-[48px]"
            >
              {websiteTexts.portfoliosButtonText}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default FirstView;
