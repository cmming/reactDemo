import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index'
import {Provider} from 'react-redux'
import { LocaleProvider } from 'antd';
import {IntlProvider, addLocaleData} from 'react-intl';
import zhCN from './locales/zh-CN.';  //导入 i18n 配置文件,需要手动创建并填入语言转换信息
import enUS from './locales/en-US';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// import Admin from './pages/layout/index'

import Router from './router/index'

const langMap = {
    'zh': zhCN,
    'en': enUS
};

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>
   , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
