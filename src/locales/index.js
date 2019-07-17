import React from 'react';
import {connect} from 'react-redux'
import { LocaleProvider } from 'antd';
import azhCN from 'antd/lib/locale-provider/zh_CN';
import aenUS from 'antd/lib/locale-provider/en_US';
import {IntlProvider, addLocaleData} from 'react-intl';
import zhCN from './lang/zh-CN/index';  //导入 i18n 配置文件,需要手动创建并填入语言转换信息
import enUS from './lang/en-US/index';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
// 日期组件的多语言
import moment from 'moment';
import 'moment/locale/zh-cn';

addLocaleData([...en, ...zh]);
const langMap = {
    'zh': zhCN,
    'en': enUS
};


@connect(
    state => state.language,
)
class Locales extends React.Component{

    componentDidMount(){
        if(this.props.language==='en'){
            //默认使用的就是 英文
        }else{
            moment.locale('zh-cn');
        }
    }
    render(){
        return(
            <IntlProvider locale={this.props.language} messages={langMap[this.props.language]}>
                <LocaleProvider locale={this.props.language==='en'?aenUS:azhCN}>
                        {this.props.children}
                </LocaleProvider>
            </IntlProvider>
        )
    }
}

export default Locales