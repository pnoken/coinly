import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";

const Toast = ({ title, message }) => {
  const openNotification = () => {
    notification.open({
      message: { title },
      description: { message },
      icon: <SmileOutlined style={{ color: "#108ee9" }} />,
    });
  };

  return openNotification;
};

export default Toast;
