import ReactDOM from 'react-dom';
import Content from './Content';

// 将content页面添加到body
const contentRoot = document.createElement("div");
contentRoot.id = "CRX-contentRoot";
document.body.appendChild(contentRoot);
const root = ReactDOM.createRoot(contentRoot);
root.render(<Content />);
