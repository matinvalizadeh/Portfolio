import { ConfigProvider } from "antd";
import LanguageSelect from "../components/LanguageSelect";
import FirstView from "../components/firstView";
import SecondSection from "../components/secondSectoin";
import SkillsSection from "../components/SkillsSection";
import Portfolios from "../components/Portfolios";
import Footer from "../components/Footer";
import { useEffect } from "react";
import theme from "../Theme/ThemeConfig";
import { useParams } from "react-router-dom";
import { useLanguageStore } from "../States/Store";
import allTexts from "../Texts/AllTexts";

function Landing() {
  const { language } = useParams();

  useEffect(() => {
    let lang: "Persian" | "English";
    let direction: "ltr" | "rtl";
    let oppositeDirection: "ltr" | "rtl";
    let sign: 1 | -1;

    if (language == "Persian") {
      lang = "Persian";
      direction = "rtl";
      oppositeDirection = "ltr";
      document.title =
        "وبسایت معرفی متین ولی زاده | برنامه نویس فرانت‌اند(React)";
      sign = -1;
    } else {
      lang = "English";
      direction = "ltr";
      oppositeDirection = "rtl";
      document.title =
        "Front-End Developer (React) | Matin Valizadeh's Portfolio Website";
      sign = 1;
    }

    useLanguageStore.setState({
      language: lang,
      direction: direction,
      oppositeDirection: oppositeDirection,
      websiteTexts: allTexts[lang],
      sign: sign,
    });

    document.documentElement.classList.remove("Persian", "English");
    document.documentElement.classList.add(lang);
  }, [language]);

  return (
    <div>
      <LanguageSelect />
      <FirstView />
      <SecondSection />
      <SkillsSection />
      <Portfolios />
      <Footer />
    </div>
  );
}

export default Landing;
