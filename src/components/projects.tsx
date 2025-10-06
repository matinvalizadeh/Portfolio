import { useLanguageStore } from "../States/Store";
import type { Project } from "../Texts/AllTexts";
import { motion } from "framer-motion";
import { isDesktop } from "react-device-detect" ; 

function Projects() {
  const { websiteTexts, direction } = useLanguageStore();

  return (
    <>
      <h2 className="font-bold text-[23px] text-center mt-[25px] color-black leading-normal">
        {websiteTexts.projectsTitle}
      </h2>
      <div
        className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-[80px] gap-x-[0px]"
        style={{
          direction: direction,
        }}
      >
        {websiteTexts.projects.map((project: Project, index: number) => (
          // Project Box
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
              delay: isDesktop ? 0.2 * index : 0,
            }}
            viewport={{ once: true }}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/" + project.image}
              className="w-[75px] mx-auto"
              alt={project.alt}
            />
            <span className="block text-center mt-4 font-semibold text-[19px] text-[#252525]">
              {project.title}
            </span>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Projects;
