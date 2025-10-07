import { GlobalOutlined, DownOutlined, CheckOutlined } from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import { useLanguageStore } from "../States/Store";
import { useNavigate } from "react-router-dom";

function LanguageSelect() {
  const { language, websiteTexts } = useLanguageStore();
  const navigate = useNavigate();

  const handleLanguageSelect = (e: any) => {
    e.domEvent.preventDefault();
    const selectedLanguage: "English" | "Persian" = e.key;
    navigate(`/${selectedLanguage}`, { replace: false });
  };

  const menuProps = {
    items: [
      {
        key: "Persian",
        label: (
          <span className="flex justify-between items-center w-full">
            {websiteTexts.persian}
            {language === "Persian" && <CheckOutlined />}
          </span>
        ),
      },
      {
        key: "English",
        label: (
          <span className="flex justify-between items-center w-full">
            {websiteTexts.english}
            {language === "English" && <CheckOutlined />}
          </span>
        ),
      },
    ],
    onClick: handleLanguageSelect,
  };

  const direction = language === "Persian" ? "rtl" : "ltr";

  const containerStyle =
    language === "Persian"
      ? { right: 0 }
      : { left: 0};

  return (
    <div className="fixed top-4 z-50" style={containerStyle}>
      <Dropdown
        menu={menuProps}
        trigger={["click"]}
        placement="bottomLeft"
        getPopupContainer={() => document.body}
      >
        <Button
          type="primary"
          dir={direction}
          className="w-[70px] h-[30px] flex justify-center items-center"
        >
          <GlobalOutlined className="!m-0" />
          <DownOutlined className="!m-0" />
        </Button>
      </Dropdown>
    </div>
  );
}

export default LanguageSelect;
