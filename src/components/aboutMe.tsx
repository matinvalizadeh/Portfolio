import { DownloadOutlined } from "@ant-design/icons";
import { useLanguageStore } from "../States/Store";
import { motion } from "framer-motion";
import { isDesktop } from "react-device-detect";

function AboutMe() {
  const { websiteTexts, direction, oppositeDirection } = useLanguageStore();
  return (
    <>
      <h2 className="font-semibold text-center color-black text-[23px]">
        {websiteTexts.aboutMeH2Text}
      </h2>
      <div
        className="lg:flex lg:justify-between mt-8
        "
        style={{
          direction: oppositeDirection,
        }}
      >
        {/* About Me Text */}
        <motion.p
          className="text-justify text-[18px] color-black leading-loose
        lg:max-w-[45%]"
          style={{
            direction: direction,
          }}
          initial={{
            x: isDesktop ? 150 : 0,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
        >
          {websiteTexts.aboutMeText}
        </motion.p>
        {/* Second Text and Download Button */}
        <motion.div
          className="lg:max-w-[45%]"
          style={{
            direction: direction,
          }}
          initial={{
            x: isDesktop ? -150 : 0,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
        >
          <p
            className="hidden lg:block font-bold text-[23px] leading-[1.7]
          text-justify"
          >
            {websiteTexts.aboutMeSecondText}
          </p>
          <a
            href={process.env.PUBLIC_URL + "/" + websiteTexts.resumeFileName}
            target="_blank"
            download
          >
            {/* download button */}
            <button
              className="border-2 border-black rounded-[6px] w-[240px] 
                h-[52px] text-[20px] mt-8 color-black lg:w-[240px] lg:h-[53px]"
            >
              <DownloadOutlined />
              &nbsp; {websiteTexts.resumeDownloadText}
            </button>
          </a>
        </motion.div>
      </div>
    </>
  );
}

export default AboutMe;
