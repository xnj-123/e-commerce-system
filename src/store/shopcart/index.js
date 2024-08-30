import { reqDelectSku, reqUpdateChecked,reqGetShopCart } from "@/api";

const state = {
    shopcart:[],
};
const mutations = {
    GETSHOPCART(state,shopcart){
        state.shopcart = shopcart;
    }
};
const actions = {
    async getshopcart({commit}){
        let result = await reqGetShopCart();
        if(result.code==200){
            commit('GETSHOPCART',result.data)
        }
    },
    async delectSku({commit},skuId){
        let result = await reqDelectSku(skuId);
        if(result.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    async changeChecked({commit},{skuID,isChecked}){
        let result = await reqUpdateChecked({skuID,isChecked})
        if(result.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'));
        }
    },

    deleteAllChecked({getters,dispatch}){
        let Promiselist=[];
        getters.cartInfoList.cartInfoList.forEach(element => {
            let promise = element.isChecked==1?dispatch('delectSku',element.skuId):'';
            Promiselist.push(promise);
        });
        return Promise.all(Promiselist)
    },
    updateAllChecked({getters,dispatch},isChecked){
        let promiseList=[];
        getters.cartInfoList.cartInfoList.forEach(item=>{
            if(item.isChecked!=isChecked) {
                let promise = dispatch('changeChecked',{skuID:item.skuId,isChecked:isChecked});
                promiseList.push(promise);
            }  
        })
        return Promise.all(promiseList);
    }

};
const getters = {
    cartInfoList(state){
        return state.shopcart[0] || {};
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}