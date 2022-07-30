/*global chrome*/
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import styles from "./index.module.less";

const hello = chrome.i18n.getMessage("helloWorld");

const Home = () => {
  const navigate = useNavigate();
  const [logList, setLogList] = useState([]);

  // 获取日志数据
  const getlogList = () => {
    chrome.storage.sync.get("logs").then((data) => {
      if (data?.logs?.length) {
        setLogList(data.logs);
      }
    });
  };

  // 点击删除按钮的回调
  const onDelete = async (value) => {
    // 获取日志数据
    const data = await chrome.storage.sync.get("logs");
    if (data?.logs?.length) {
      const newLogs = data.logs.filter((log) => log !== value);
      // 重新保存日志数据
      await chrome.storage.sync.set({ logs: newLogs });
      // 修改数据刷新页面
      setLogList(newLogs);
      // 更改插件图标上徽标文字
      chrome.action.setBadgeText({
        text: newLogs.length ? newLogs.length.toString() : "",
      });
    }
  };

  // 回到登录页
  const backLogin = () => {
    navigate("/login");
  };

  // 打开React中文官网页面
  const openReact = () => {
    chrome.tabs.create({ url: `https://react.docschina.org/` });
  };

  useEffect(() => {
    getlogList();
  }, []);

  return (
    <div className={styles.container}>
      <h3>{hello}</h3>
      <div className={styles.logList}>
        {logList.length ? (
          <div>
            <p className={styles.title}>日志列表</p>
            {logList.map((log) => {
              return (
                <div key={log} className={styles.log}>
                  <span className={styles.dot} />
                  <p>{log}</p>
                  <button onClick={() => onDelete(log)}>X</button>
                </div>
              );
            })}
          </div>
        ) : (
          <span>
            暂无日志，您可以去
            <a href="https://react.docschina.org/" onClick={openReact}>
              React中文官网
            </a>
            页面选中文字并点击鼠标右键添加日志
          </span>
        )}
      </div>

      <Button type="primary" onClick={backLogin}>
        返回登录
      </Button>
    </div>
  );
};

export default Home;
