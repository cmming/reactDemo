import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import menuList from '../../../config/menuList'
import { Route, Link } from "react-router-dom";

const { Sider, } = Layout;
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
                    title={<span>{item.icon ? <Icon type={item.icon} /> : ''}<span>{item.title}</span></span>}
                >
                    {this.renderMenu(item.childrens)}
                </SubMenu>
            }

            return <Menu.Item key={item.key}>
                {<span>{item.icon ? <Icon type={item.icon} /> : ''}<span>{item.title}</span></span>}
            </Menu.Item>
        })
    }
    render(){
        return <Sider
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
        style={{
            overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
        }}
    >
        <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                {this.state.menuTreeNode}

            </Menu>
            {/* <Route exact path="/" component={Home} />
            <Route path="/about" component={About} /> */}
    </Sider>
        
    }
}

function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
  
  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }