import { reqGetUserInfo, reqLoginOut, reqPhoneNum, reqUserLogin, reqUserRegister } from "@/api";
import { setToken,getToken, clearToken } from "@/utils/token";

const state = {
    code:'',
    token:getToken(),
    userInfo:{},
};
const mutations = {
    GETPHONENUM(state,code){
        state.code = code;
    },
    USERLOGIN(state,token){
        state.token = token;
    },
    USERINFO(state,userInfo){
        state.userInfo = userInfo;
    },
    LOGINOUT(state){
        state.token='';
        state.userInfo={};

        clearToken();
    }
};
const actions = {

    async getPhoneNum({commit},phone){
        let result =await reqPhoneNum(phone);

        if(result.code==200){

            commit('GETPHONENUM',result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    async UserRegister({commit},user){
        let result =  await reqUserRegister(user);

        if(result.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    async UserLogin({commit},data){
        let result = await reqUserLogin(data);
        
        if(result.code==200){
            commit('USERLOGIN',result.data.token)
            setToken(result.data.token);
            return 'ok';

        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    
    async UserInfo({commit}){
        if(getToken()){
            let result = await reqGetUserInfo();
            if(result.code==200){
                commit('USERINFO',result.data)
                return 'ok'
            }else{
                return Promise.reject(new Error('faile'));
            }
        }
    },

    async loginOut({commit}){
        let result = await reqLoginOut();

        if(result.code==200){
            commit('LOGINOUT');
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    }

};
const getters = {

};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}