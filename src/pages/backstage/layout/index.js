import React from 'react'

import {Layout, Icon} from 'antd';
import '../../../admin.less';

import Menus from './components/menu/index'


const {Header, Content, Footer,} = Layout;


export default class Admin extends React.Component {

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Layout>
                <Menus collapsed={this.state.collapsed}></Menus>
                <Layout style={{marginLeft: !this.state.collapsed ? 200 : 85}}>
                    <Header style={{background: '#fff', padding: 0}}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                            style={{paddingLeft: 16}}
                        />
                    </Header>
                    <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
                        <div style={{background: '#fff', textAlign: 'center'}}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        admin tempalte ©2018 Created by chmi
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}


