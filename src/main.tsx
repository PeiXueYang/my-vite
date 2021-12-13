import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'antd/dist/antd.css'
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN"; // 引入中文包
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");
ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <App />
    </ConfigProvider>,
    document.getElementById('root')
)
