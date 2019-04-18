import React from 'react'
import {Layout, Menu, Icon} from 'antd';
import menuList from '../../../../../config/menuList'
import {Link} from "react-router-dom";
// import SetupSvg from '../../../../../icons/setup.svg'

const {Sider,} = Layout;
const SubMenu = Menu.SubMenu;


export default class Menus extends React.Component {


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
                    title={<Link to={item.key}>{item.icon ? <Icon type={item.icon}/> : ''}
                        <span>
                            {item.title}
                        </span>
                    </Link>}
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
            trigger={null}
            collapsible
            collapsed={this.props.collapsed}
            style={{
                overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
            }}
        >
            <div className="logo"/>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                {this.state.menuTreeNode}

            </Menu>
        </Sider>

    }
}
