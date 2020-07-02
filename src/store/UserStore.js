/**
 * Created by doubleyong on 2020/7/1.
 */
import {observable,action} from 'mobx'
import Axios from '../util/axios'
import Api from '../api/index'
export default class UserStore{
    @observable user = sessionStorage.getItem("user")?JSON.parse():[]
    @observable isLogin = false;
    @observable token = ""

    @action
    login=()=>{
        return new Promise((resolve,reject)=>{
            Axios.post(Api.user.userLogin,
                {userName:'abc',userPwd:'123'}
                )
                .then((res)=>{
                console.log(res)
                if(res.data.returnCode===200){
                    console.log(res.data.data)
                    this.user = res.data.data;
                    this.token = res.data.token;
                    resolve('登录成功')
                }else{
                    reject('登录失败')
                }
            })
        })
    }
}