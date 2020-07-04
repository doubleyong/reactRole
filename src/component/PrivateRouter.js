import React from 'react'
import {Route} from 'react-router-dom'
import {inject,observer} from 'mobx-react'
import loadable from '@loadable/component'
// import {AddRole,RoleList} from './user/User'
@inject("user")
@observer
class PrivateRouter extends React.Component
{
    constructor(){
        super();
        this.state={
            routerList:[]
        }
    }
    bindRouter(list){
      let routerList= list.map((item)=>{
            if(item.menuChilds.length===0){
                return  <Route key={item.menuId} path={item.menuUrl} component={ loadable(() => import(`./${item.componentPath}`))}/>
            }else{
                // return [...this.bindRouter(item.menuChilds),<Route key={item.menuId} path={item.menuUrl} component={ loadable(() => import(`./${item.componentPath}`))}/>]
               return  <Route key={item.menuId} path={item.menuUrl} render={() =>{
                   let ComponentName =loadable(() => import(`./${item.componentPath}`));
                   return <ComponentName {...this.props}>
                        {this.bindRouter(item.menuChilds)}
                    </ComponentName>
                       }}>
               </Route>
            }
        })
      return routerList;
    }
    componentDidMount(){
        let menuList =this.bindRouter(this.props.user.user.menuInfo);
        this.setState({
            routerList :menuList
        })
    }
    render()
    {
        return (
            <div>
                {
                    this.state.routerList
                }
            </div>
        )
    }
}

export default PrivateRouter