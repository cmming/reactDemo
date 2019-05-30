import React from 'react'
import {connect} from 'react-redux'
import {Layout,Icon} from "antd";
import {TOGGLE_MENU_ACTION} from "../../../../../store/modules/layout";

const {Header} = Layout;





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
            </Header>

    }
}

export default Vheader