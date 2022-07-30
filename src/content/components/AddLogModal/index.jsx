/*global chrome*/
import Modal from "antd/es/modal";
import Input from "antd/es/input";
import "antd/es/modal/style/index.css";
import "antd/es/input/style/index.css";
import styles from "./index.module.less";

// 获取外部完整的图片URL
const image = chrome.runtime.getURL("images/icon.png");

const AddLogModal = (props) => {
  const { value, onChange, onSave, onCancel } = props;

  return (
    <Modal
      className="CRX-antd-diy"
      title="添加日志"
      visible
      onOk={onSave}
      onCancel={onCancel}
      okText="保存"
      cancelText="取消"
      width={500}
    >
      <div className={styles.img}>
        <img src={image} alt="" width="60" height="60" />
      </div>
      <Input value={value} onChange={onChange} />
    </Modal>
  );
};

export default AddLogModal;
