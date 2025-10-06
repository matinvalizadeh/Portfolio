import { Button, Result } from "antd";
import { useLanguageStore } from "../States/Store";
import { SmileOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
function NotFound() {
  const { direction, websiteTexts } = useLanguageStore();
  return (
    <Result
      style={{
        direction: direction,
      }}
      title="404"
      icon={
        <img
          src={process.env.PUBLIC_URL + "/images/Not found.svg"} // your custom image
          alt="Not Found"
          className="w-[380px] h-[380px] max-w-[90vw] block mx-auto"
        />
      }
      subTitle={websiteTexts.notFoundSubTitle}
      extra={
        <Link to = {websiteTexts.notFoundButtonDestination}>
          <Button type="primary">{websiteTexts.notFoundButtonText}</Button>
        </Link>
      }
    />
  );
}

export default NotFound;
