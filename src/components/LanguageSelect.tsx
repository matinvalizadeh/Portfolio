import { GlobalOutlined, DownOutlined, CheckOutlined } from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import "../css/LanguageSelect.css";
import { useEffect, useState } from "react";
import { useLanguageStore } from "../States/Store";
import { useNavigate } from "react-router-dom";

function LanguageSelect() {
  const { language, websiteTexts } = useLanguageStore();

  const [buttonLeftDistance, setButtonLeftDistance] = useState<string>("-2px");
  const [buttonRightDistance, setButtonRightDistance] =
    useState<string>("auto");
  const [direction, setDirection] = useState<"rtl" | "ltr">("ltr");

  const navigate = useNavigate();

  // when language changed
  const handleLanguageSelect = (e: any) => {
    const selectedLanguage: "English" | "Persian" = e.key;
    navigate(`/${selectedLanguage}`, { replace: false });
  };

  const menuProps = {
    items: [
      {
        key: "Persian",
        label: (
          <span className="block flex justify-between items-center">
            {websiteTexts.persian}
            {language == "Persian" && <CheckOutlined />}
          </span>
        ),
      },
      {
        key: "English",
        label: (
          <span className="block flex justify-between items-center">
            {websiteTexts.english}
            {language == "English" && <CheckOutlined />}
          </span>
        ),
      },
    ],
    onClick: handleLanguageSelect,
  };

  useEffect(() => {
    if (language === "Persian") {
      setButtonLeftDistance("auto");
      setButtonRightDistance("-6px");
      setDirection("rtl");
    } else {
      setButtonLeftDistance("-6px");
      setButtonRightDistance("auto");
      setDirection("ltr");
    }
  }, [language]);

  return (
    <div id="language_select_div" className="block">
      <Dropdown
        menu={menuProps}
        trigger={["hover"]}
        placement="bottomLeft"
        getPopupContainer={() =>
          document.getElementById("language_select_div") as HTMLElement
        }
      >
        <Button
          type="primary"
          id="languages_button"
          className="fixed top-4 right-3 md:top-[5%] md:right-5 w-[70px] h-[30px] z-50 flex justify-end"
          dir={direction}
          style={{
            right: buttonRightDistance,
            left: buttonLeftDistance,
          }}
        >
          <span
            id="languages_span"
            className="opacity-0 transition duration-400"
          >
            {websiteTexts.languageText}
          </span>
          <GlobalOutlined className="!m-0" />
          <DownOutlined className="!m-0" />
        </Button>
      </Dropdown>
    </div>
  );
}

export default LanguageSelect;
