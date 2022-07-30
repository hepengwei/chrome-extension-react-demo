import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import styles from "./popup.module.less";

const Popup = () => {
  return (
    <div className={styles.container}>
      <HashRouter>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default Popup;
