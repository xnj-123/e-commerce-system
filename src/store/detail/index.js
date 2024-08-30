import { reqGetdetailInfo, reqUpdateShopCart  } from "@/api";
import {getUUID} from "@/utils/uuid_token";

const state = {
    detail: {},
    uuid_token:getUUID(),
};
const mutations = {
    GETDETAILINFO(state, detail) {
        state.detail = detail;
    }
};
const actions = {
    async getdetailInfo({ commit }, skuid) {
        let result = await reqGetdetailInfo(skuid);
        if (result.code == 200) {
            commit('GETDETAILINFO', result.data);
        }
    },
    async addShopCart({commit},{skuId,skuNum}){
        let result = await reqUpdateShopCart({skuId,skuNum});
        if(result.code == 200){
            return "ok"
        }else{
            return Promise.reject(new Error('faile'))
        }
    }
};
const getters = {
    categoryView(state){
        return state.detail.categoryView || {};
    },
    skuInfo(state){
        return state.detail.skuInfo || {};
    },
    spuSaleAttrList(state){
        return state.detail.spuSaleAttrList ||[];
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}