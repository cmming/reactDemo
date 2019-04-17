import React from 'react'

import {Layout, Menu, Icon} from 'antd';
import '../../admin.less';
import menuList from '../../config/menuList'

const {Header, Content, Footer, Sider,} = Layout;
const SubMenu = Menu.SubMenu;


export default class Admin extends React.Component {

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentWillMount() {
        const menuTreeNode = this.renderMenu(menuList)
        this.setState({
            menuTreeNode
        });
    }

    //菜单渲染
    renderMenu = (data) => {
        return data.map(item => {
            if (item.childrens) {
                return <SubMenu
                    key={item.key}
                    title={<span>{item.icon ? <Icon type={item.icon}/> : ''}{item.title}</span>}
                >
                    {this.renderMenu(item.childrens)}
                </SubMenu>
            }

            return <Menu.Item key={item.key}>
                {<span>{item.icon ? <Icon type={item.icon}/> : ''}{item.title}</span>}
            </Menu.Item>
        })
    }

    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    style={{
                        overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
                    }}
                >
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        {this.state.menuTreeNode}

                    </Menu>
                </Sider>
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
                            ...
                            <br/>
                            Really
                            <br/>...<br/>...<br/>...<br/>
                            long
                            <br/>...<br/>...<br/>...<br/>...<br/>...<br/>...
                            <br/>...<br/>...<br/>...<br/>...<br/>...<br/>...
                            <br/>...<br/>...<br/>...<br/>...<br/>...<br/>...
                            <br/>...<br/>...<br/>...<br/>...<br/>...<br/>...
                            <br/>...<br/>...<br/>...<br/>...<br/>...<br/>...
                            <br/>...<br/>...<br/>...<br/>...<br/>...<br/>...
                            <br/>...<br/>...<br/>...<br/>...<br/>...<br/>
                            content
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
