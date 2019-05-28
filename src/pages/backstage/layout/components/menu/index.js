import React from 'react'
import {Layout, Menu, Icon} from 'antd';
import menuList from '../../../../../config/menuList'
import {Link} from "react-router-dom";

const {Sider,} = Layout;
const SubMenu = Menu.SubMenu;


export default class Menus extends React.Component {

    state = {
        theme: 'dark',
        current: '1',
    };

    // changeTheme = value => {
    //     this.setState({
    //         theme: value ? 'dark' : 'light',
    //     });
    // };

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
                    title={
                        <span>
                            {item.icon ? <Icon type={item.icon}/>:""}
                            <span>
                                {item.title}
                            </span>
                        </span>}
                >
                    {this.renderMenu(item.childrens)}
                </SubMenu>
            }

            return <Menu.Item key={item.key}>
                {<Link to={item.key}>{item.icon ? <Icon type={item.icon}/> : ''}
                    <span>{item.title}</span>

                </Link>}
            </Menu.Item>
        })
    }

    render() {
        return <Sider
            theme={this.state.theme}
            trigger={null}
            collapsible
            collapsed={this.props.collapsed}
            style={{
                overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
            }}
        >
            <div className="logo"/>
            {/*<Switch*/}
                {/*checked={this.state.theme === 'dark'}*/}
                {/*onChange={this.changeTheme}*/}
                {/*checkedChildren="Dark"*/}
                {/*unCheckedChildren="Light"*/}
            {/*/>*/}
            <Menu theme={this.state.theme} mode="inline" defaultSelectedKeys={['1']}>
                {this.state.menuTreeNode}

            </Menu>
        </Sider>

    }
}
