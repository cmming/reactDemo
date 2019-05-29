import React from 'react'
import {Layout} from "antd";
const {Header, Icon} = Layout;

export default class Headers extends React.Component{

    render() {
        return  <Header style={{background: '#fff', padding: 0}}>
            <Icon
                className="trigger"
                type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
                style={{paddingLeft: 16}}
            />
        </Header>
    }
}