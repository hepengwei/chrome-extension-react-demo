/*global chrome*/
import { Radio } from "antd";
import { useEffect, useState } from "react";
import styles from "./options.module.less";

const Options = () => {
  const [limitValue, setLimitValue] = useState(3);

  // 获取storage中保存的设置数据并进行回显
  const showLimitValue = () => {
    chrome.storage.sync.get("limitLogsNum").then((data) => {
      let limitNum = 3;
      if (data?.limitLogsNum) {
        limitNum = data.limitLogsNum;
      }
      setLimitValue(limitNum);
    });
  };

  // 修改限制日志数量的回调
  const onLimitChange = async (e) => {
    const { value } = e.target;
    // storage中保存用户修改的选项设置
    await chrome.storage.sync.set({ limitLogsNum: value || 3 });
    setLimitValue(value || 3);
  };

  useEffect(() => {
    showLimitValue();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>选项设置</div>
      <div className={styles.option}>
        <span className={styles.label}>日志个数限制:</span>
        <Radio.Group value={limitValue} onChange={onLimitChange}>
          <Radio value={3}>3个</Radio>
          <Radio value={5}>5个</Radio>
        </Radio.Group>
      </div>
    </div>
  );
};

export default Options;
