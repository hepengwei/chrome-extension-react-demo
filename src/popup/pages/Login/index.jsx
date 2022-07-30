import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import icon from "@public/images/icon.png";
// import { apiFetch } from "@/http/fetch";
// import { loginUrl } from "@/http/api";
import styles from "./index.module.less";

const Login = () => {
  const navigate = useNavigate();

  // 登录
  const onLogin = () => {
    navigate("/home");
    // apiFetch({
    //   method: "post",
    //   url: loginUrl,
    //   data: { userName: "River", password: "123456" },
    //   success: (res) => {
    //     navigate("/home");
    //   },
    //   fail: (err) => {
    //     console.log("登录失败", err);
    //   },
    // });
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={icon} alt="" width="80" height="80" />
      </div>
      <div className={styles.right}>
        <h1>login页面</h1>
        <Button type="primary" onClick={onLogin}>
          登录
        </Button>
      </div>
    </div>
  );
};

export default Login;
