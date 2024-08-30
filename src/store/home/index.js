import { reqCategoryList, reqGetFloorList } from "@/api";
import { reqGetBannerList } from "@/api";

const state = {
    // num:1,
    categoryList:[],
    getbannerList:[],
    floorList:[],
};
const mutations = {
    // JIA(state){
    //     state.num++;
    // }
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state,getbannerList){
        state.getbannerList = getbannerList;
    },
    GETFLOORLIST(state,getfloorList){
        state.floorList = getfloorList;
    }
};
const actions = {
    // jia(context,value){
    //     context.commit('JIA',value)
    // }
    async categoryList({commit}){
        let result = await reqCategoryList();
        if(result.code == 200){
            commit('CATEGORYLIST',result.data)
        }
    },
    async getbannerList({commit}){
        let result = await reqGetBannerList();
        if(result.code == 200){
            commit('GETBANNERLIST',result.data);
        }
    },
    async getfloorList({commit}){
        let result = await reqGetFloorList();
        if(result.code == 200){
            commit('GETFLOORLIST',result.data);
        }
    }
};
const getters = {};

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}