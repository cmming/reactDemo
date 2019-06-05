import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index'
import {Provider} from 'react-redux'
import { LocaleProvider } from 'antd';
import azhCN from 'antd/lib/locale-provider/zh_CN';
import aenUS from 'antd/lib/locale-provider/en_US';
import {IntlProvider, addLocaleData} from 'react-intl';
import zhCN from './locales/zh-CN';  //导入 i18n 配置文件,需要手动创建并填入语言转换信息
import enUS from './locales/en-US';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import './icons/index'
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// import Admin from './pages/layout/index'

import Router from './router/index'

addLocaleData([...en, ...zh]);
const langMap = {
    'zh': zhCN,
    'en': enUS
};

let locale = 'zh';
ReactDOM.render(

    <IntlProvider locale={locale} messages={langMap[locale]}>
        <LocaleProvider locale={azhCN}>
            <Provider store={store}>
                <Router />
            </Provider>
        </LocaleProvider>
    </IntlProvider>

   , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
