import React from 'react'
import {connect} from 'react-redux'
import {injectIntl} from 'react-intl';
import {Layout,Icon,Menu, Dropdown} from "antd";
import {TOGGLE_MENU_ACTION} from "../../../../../store/modules/layout";
import {TOGGLE_LANGUAGE_ACTION} from "../../../../../store/modules/language";

const {Header} = Layout;


@connect(
    state => state.layout,
    { TOGGLE_MENU_ACTION }
)
@connect(
    state => state.language,
    { TOGGLE_LANGUAGE_ACTION }
)
@injectIntl
class Vheader extends React.Component{

    render() {
        return<Header style={{background: '#fff', padding: 0}}>
                <span className="header-tigger">
                    <Icon
                        className="trigger"
                        type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.props.TOGGLE_MENU_ACTION}
                        style={{paddingLeft: 16}}
                    />
                </span>
                <span className="header-tigger-right">
                    {/* <Dropdown overlay={menu}> */}
                    <Dropdown overlay={()=>{
                        return  <Menu defaultSelectedKeys={[this.props.language]} selectedKeys={[this.props.language]}>
                        <Menu.Item key="zh">
                            <a target="_blank" rel="noopener noreferrer" href="javascript:void(0)" onClick={()=>this.props.TOGGLE_LANGUAGE_ACTION('zh')}>
                                {this.props.intl.formatMessage({id:"intl.header.language.zhCN"})}
                            </a>
                        </Menu.Item>
                        <Menu.Item key="en">
                            <a target="_blank" rel="noopener noreferrer" href="javascript:void(0)" onClick={()=>this.props.TOGGLE_LANGUAGE_ACTION('en')}>
                                {this.props.intl.formatMessage({id:"intl.header.language.enGB"})}
                            </a>
                        </Menu.Item>
                    </Menu>
                    }}>
                        <a className="ant-dropdown-link" href="javascript:void(0)">
                            <Icon type="global" />
                        </a>
                    </Dropdown>
                </span>
            </Header>

    }
}

export default Vheader