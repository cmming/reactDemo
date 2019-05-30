import React from 'react'
import {connect} from 'react-redux'

import {Layout,Card} from 'antd';
import '../../../admin.less';

import Menus from './components/menu/index'
import Vheader from './components/header/index'


const {Content, Footer,} = Layout;


@connect(
    state => state.layout
)
class Admin extends React.Component {


    render() {
        return (
            <Layout>
                <Menus collapsed={this.props.collapsed}></Menus>
                <Layout style={{marginLeft: !this.props.collapsed ? 200 : 85}}>
                    <Vheader></Vheader>
                    <Content style={{margin: '24px 16px 0', overflow: 'initial',minHeight:"calc(100vh - 157px)"}}>
                        <Card>
                            {this.props.children}
                        </Card>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        admin tempalte ©2018 Created by chmi
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Admin


