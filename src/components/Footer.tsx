import { useLanguageStore } from "../States/Store";
import { motion } from "framer-motion";
import { Typography } from "antd";

const { Text } = Typography;
function Footer() {
  const { websiteTexts, direction } = useLanguageStore();
  const socialNetworks = [
    {
      image: "Telegram.png",
      alt: "Telegram",
      link: "https://t.me/matinvlz",
    },

    {
      image: "github.webp",
      alt: "github",
      link: "https://github.com/matinvalizadeh",
    },
    {
      image: "linkedin.png",
      alt: "linkedin",
      link: "https://www.linkedin.com/in/matin-valizadeh/",
    },
  ];
  return (
    <motion.footer
      className="bg-[#1D1D1D] pt-4 pb-16"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
    >
      <div className="w-[420px] max-w-[90vw] mx-auto">
        {/* Profile Picture */}
        <img
          src={process.env.PUBLIC_URL + "/images/Matin-Valizadeh.png"}
          alt="profile picture"
          className="w-[120px] h-[120px] rounded-full mx-auto"
        />

        {/* Title and Subtitle */}
        <div className="max-w-[90%] mx-auto w-[450px] md:w-[500px] lg:w-[550px]">
          <h2
            className="text-center mt-2 font-semibold text-[18px] text-[#EAEAEA]
        lg:text-[20px]"
            style={{
              direction: direction,
            }}
          >
            {websiteTexts.footerTitle}
          </h2>
          <span
            className="mt-[5px] text-[#EAEAEA] text-center block text-[15px] lg:[16px]
        leading-relaxed"
            style={{
              direction: direction,
            }}
          >
            {websiteTexts.footerDescription}
          </span>
        </div>

        {/* Contact */}
        <div
          className="w-full lg:w-[380px] mx-auto"
          style={{
            direction: direction,
          }}
        >
          <div className="flex justify-between mt-16">
            <Text
              className="text-[#EAEAEA] font-semibold
                text-[15px]"
            >
              {websiteTexts.phoneNumberLabel}
            </Text>
            <a href={`tel:${websiteTexts.phoneNumber}`}>
              <Text className="text-[#EAEAEA] text-[15px]">
                {websiteTexts.phoneNumber}
              </Text>
            </a>
          </div>

          <div className="flex justify-between mt-2 lg:mt-0">
            <Text
              className="text-[#EAEAEA] font-semibold
            text-[15px]"
            >
              {websiteTexts.emailLabel}
            </Text>
            <a href={`mailto:${websiteTexts.email}`}>
              <Text className="text-[#EAEAEA] text-[15px]">
                {websiteTexts.email}
              </Text>
            </a>
          </div>
        </div>

        {/* Social Networks */}
        <div className="flex justify-center gap-x-8 items-center max-w-[90%] mx-auto mt-8">
          {socialNetworks.map((socialNetwork, index) => (
            <a href={socialNetwork.link} target="_blank">
              <img
                src={process.env.PUBLIC_URL + "/images/" + socialNetwork.image}
                alt={socialNetwork.alt}
                className="w-[32px] h-[32px]"
                key={"socialNetwork" + index}
              />
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
