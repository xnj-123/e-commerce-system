import { reqOrderInfo, reqUserAddress } from "@/api"


const state={
    addresslist:[],
    orderInfo:[],
}
const mutations={
    GETADDRESS(state,addresslist){
        state.addresslist = addresslist
    },
    GETORDERINFO(state,orderInfo){
        state.orderInfo = orderInfo;
    }
}
const actions={
    async getAddress({commit}){
        let result = await reqUserAddress();

        if(result.code == 200){
            commit('GETADDRESS', result.data)
        }
    },
    async getOrderInfo({commit}){
        let result = await reqOrderInfo();

        if(result.code==200){
           commit('GETORDERINFO',result.data)
        }
    }
}
const getters={

}

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters,
}