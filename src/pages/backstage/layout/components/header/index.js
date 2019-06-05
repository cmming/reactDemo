import React from 'react'
import {connect} from 'react-redux'
import {Layout,Icon,Menu, Dropdown} from "antd";
import {TOGGLE_MENU_ACTION} from "../../../../../store/modules/layout";

const {Header} = Layout;

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                1st menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                2nd menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                3rd menu item
            </a>
        </Menu.Item>
    </Menu>
);



@connect(
    state => state.layout,
    { TOGGLE_MENU_ACTION }
)
class Vheader extends React.Component{

    render() {
        return<Header style={{background: '#fff', padding: 0}}>
                <Icon
                    className="trigger"
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.TOGGLE_MENU_ACTION}
                    style={{paddingLeft: 16}}
                />
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" href="#">
                        Hover me <Icon type="down" />
                    </a>
                </Dropdown>,
            </Header>

    }
}

export default Vheader