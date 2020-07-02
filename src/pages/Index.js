import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import LeftMenu from '../component/LeftMenu'
// import PrivateRouter from '../component/PrivateRouter'
import loadable from '@loadable/component'
import {Route} from 'react-router-dom'
// import UserManger from './../component/user/UserManger'
// const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
// import {
//     BrowserRouter as Router,
//     Route
// } from 'react-router-dom'
class Index extends React.Component
{
    render()
    {
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        {/*这里写一个组件，根据数据生成Menu*/}
                     <LeftMenu />
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            {/*<Route key="1" path="/index/user" component={ loadable(() => import(`./../component/user/UserManger`))}/>*/}
                            {/*显示Route*/}
                            {this.props.children}
                            {/*<PrivateRouter/>*/}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export {Index as default}