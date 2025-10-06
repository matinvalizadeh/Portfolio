import { Button, Card, Tag } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { useLanguageStore } from "../States/Store";
import type { Portfolio } from "../Texts/AllTexts";
import { motion } from "framer-motion";

function Portfolios() {
  const { websiteTexts, direction } = useLanguageStore();
  return (
    <section
      className="w-full bg-[#EEEEED]
        pt-[30px] pb-16"
      id="portfolios"
    >
      <h2 className="text-center block font-semibold text-[23px] color-black">
        {websiteTexts.portfoliosTitle}
      </h2>
      <div
        className="mt-8 grid justify-center grid-cols-[repeat(auto-fit,minmax(200px,400px))]
        gap-x-8 gap-y-8 w-[90%] mx-auto"
        style={{
          direction: direction,
        }}
      >
        {(websiteTexts.portfolios as Portfolio[]).map(
          (portfolio: any, index: number) => (
            // Portfolio Card
            <motion.a
              href={portfolio.userLink}
              target="_blank"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 0.4,
                delay: 0.2 * index,
              }}
              viewport={{ once: true }}
            >
              <Card
                className="mt-0 max-w-[100%] md:max-w-[90vw] bg-[#fcfcfc] 
              h-[550px] relative"
                hoverable
                key={"portfolio" + index}
                cover={
                  <img
                    className="max-w-full"
                    src={
                      process.env.PUBLIC_URL +
                      "/images/portfolio-images/" +
                      portfolio.imageSrc
                    }
                    alt={portfolio.imageAlt}
                  />
                }
              >
                <span
                  className="text-center block
                            text-[18px] color-black font-bold"
                >
                  {portfolio.title}
                </span>
                <div
                  className="flex justify-center mt-4 flex-wrap
                            max-w-[90%] mx-auto gap-x-2 gap-y-2"
                >
                  {portfolio.skills.map((skill: string, index: number) => (
                    <Tag
                      key={"skill" + index}
                      color="#888888"
                      className="m-0 font-semibold"
                    >
                      {skill}
                    </Tag>
                  ))}
                </div>

                <ul
                  className="mt-4"
                  style={{
                    direction: direction,
                  }}
                >
                  {portfolio.explaintions.map(
                    (explaintion: string, index: number) => (
                      <li
                        key={"explaintion" + index}
                        className="explaintion text-[13px] 
                    text-[#888888] flex justify-start 
                    gap-x-2 flex items-center mt-2 text-justify"
                      >
                        <img
                          src={process.env.PUBLIC_URL + "/images/circle.png"}
                          alt="black full circle"
                          className="w-[7px] h-[7px] block"
                        />
                        <span>{explaintion}</span>
                      </li>
                    )
                  )}
                </ul>

                <a
                  href={portfolio.githubLink}
                  target="_blank"
                  className="absolute bottom-[20px] right-[24px]"
                >
                  <Button className="mt-4">
                    {websiteTexts.seeInGithubText}
                    <GithubOutlined style={{ fontSize: "18px" }} />
                  </Button>
                </a>
              </Card>
            </motion.a>
          )
        )}
      </div>
    </section>
  );
}

export default Portfolios;
