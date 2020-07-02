import React from 'react'
import {inject,observer} from 'mobx-react'
import {  Menu } from 'antd';
import { NotificationOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'
const { SubMenu } = Menu;

@inject("user")
@observer
class LeftMenu extends
React.Component
{
     constructor(){
         super();
         this.state={
             leftMenu:[]
         }
     }
     bindMenu(menulist){

    let MenuList= menulist.map((item,index)=>{

        if(item.menuChilds.length===0){  //没有子菜单
            return <Menu.Item key={item.menuId}><Link to={item.menuUrl}>{item.menuName}</Link></Menu.Item>
        }
        else{
            return <SubMenu key={item.menuId} icon={<NotificationOutlined />} title={item.menuName}>
                {this.bindMenu(item.menuChilds)}
            </SubMenu>
        }

    })

    return MenuList;
}
     componentDidMount(){
         console.log("will mount")
         console.log(this.props.user.user.menuInfo)
         let menuList =this.bindMenu(this.props.user.user.menuInfo);
         this.setState({
             leftMenu :menuList
         })
     }
    render()
    {
        return (
            <Menu
                mode="inline"
                // defaultSelectedKeys={['1']}
                // defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
            >
                {this.state.leftMenu}
            </Menu>
        )
    }
}

export {LeftMenu as default}