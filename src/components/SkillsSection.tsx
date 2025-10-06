import { useRef, useState } from "react";
import "../css/SkillSection.css";
import { useLanguageStore } from "../States/Store";
import { Skill } from "../Texts/AllTexts";
import { motion } from "framer-motion";

function SkillsSection() {
  const { websiteTexts } = useLanguageStore();

  const initialDetailsBosShow: string[] = [];
  const initialDetailsBoxes: null[] = [];
  for (let skill of websiteTexts.skills) {
    initialDetailsBosShow.push("max-h-0");
    initialDetailsBoxes.push(null);
  }
  const detailsBoxes = useRef<(HTMLDivElement | null)[]>(initialDetailsBoxes);

  const handleSkillDivClick = (clickedIndex: number) => {
    const paddingTop = 8; //px
    const paddingBottom = 18; //px ;
    detailsBoxes.current.forEach((detailsBox, index) => {
      if (clickedIndex == index) {
        if (detailsBox?.style.height == "0px") {
          detailsBox.style.height =
            detailsBox.scrollHeight + paddingTop + paddingBottom + "px";
          detailsBox.style.paddingTop = "8px";
          detailsBox.style.paddingBottom = "18px";
        } else if (detailsBox !== null) {
          detailsBox.style.height = "0px";
          detailsBox.style.paddingTop = "0px";
          detailsBox.style.paddingBottom = "0px";
        }
      }
    });
  };
  return (
    <section className="pt-[30px] pb-16 bg-[#F7F7F7]">
      <h2 className="text-center text-[23px] font-semibold color-black ">
        {websiteTexts.skillsTitle}
      </h2>
      <span className="block text-center color-black text-[15px]">
        {websiteTexts.skillsSubTitle}
      </span>

      <div
        className="mt-8 grid grid-cols-1 md:grid-cols-2 md:gap-x-8 gap-y-[17px] gap-x-0
            max-w-[85%] w-[1000px] mx-auto overflow-x-hidden"
      >
        {websiteTexts.skills.map((skill: Skill, index: number) => (
          //   skill Box
          <motion.div
            className="w-full"
            initial={{
              x: 150 * (-1) ** index,
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
            <div
              key={"skill" + index}
              className={`flex justify-between items-center
                        border-l-[5px] w-full bg-[#EEEEED] pr-[25px] pl-[15px] 
                        h-[66px] cursor-pointer
                        `}
              style={{ borderColor: `${skill.color}` }}
              onClick={() => {
                handleSkillDivClick(index);
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/down-arrow.png"}
                alt="down arrow"
                className="w-[13px] h-[13px]"
              />

              <div className="flex items-center direction-ltr gap-x-4">
                <img
                  src={process.env.PUBLIC_URL + "/images/" + skill.image}
                  alt={skill.alt}
                  className="w-[40px]"
                />
                <span className="font-bold color-black text-[18px]">
                  {skill.name}
                </span>
              </div>
            </div>

            <div
              className={`bg-[#D6D6D6] direction-ltr transition-all 
                        duration-300 pl-[36px]
                        overflow-y-hidden`}
              ref={(el) => {
                detailsBoxes.current[index] = el;
              }}
              style={{ height: "0px", paddingTop: "0px", paddingBottom: "0px" }}
            >
              <ul>
                {skill.details.map((item: string, index: number) => (
                  <li
                    className="list text-[15px] text-[#333333] 
                                        flex items-center leading-normal font-medium mt-[12px]
                                        "
                    key={"detail" + index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
