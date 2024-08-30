import requests from './request.js'
import mockRequest from './mockAjax.js'

export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' });
export const reqGetBannerList = () => mockRequest({ url: '/banner', method: 'get' });
export const reqGetFloorList = () => mockRequest({ url: '/floor', method: 'get' });

export const reqGetSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params });

export const reqGetdetailInfo = (skuid) => requests({ url: `/item/${skuid}`, methods: 'get' });
export const reqUpdateShopCart = ({ skuId, skuNum }) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })

export const reqGetShopCart = ()=>requests({url:'/cart/cartList',method:'get'})

export const reqDelectSku = (skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})

export const reqUpdateChecked = ({skuID,isChecked})=>requests({url:`/cart/checkCart/${skuID}/${isChecked}`,method:'get'})

export const reqPhoneNum = (phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'})

export const reqUserRegister = (data) => requests({url:`/user/passport/register`,method:'post',data})

export const reqUserLogin = (data) => requests({url:'/user/passport/login',method:'post',data})

export const reqGetUserInfo = ()=>requests({url:`/user/passport/auth/getUserInfo`,method:'get'})

export const reqLoginOut = ()=>requests({url:'/user/passport/logout', method:'get'})

export const reqUserAddress = ()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'})

export const reqOrderInfo = ()=>requests({url:'/order/auth/trade',method:'get'})

export const postOrderInfo = (tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})

export const getPayInfo = (orderId) => requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})

export const getOrderState = (orderId) =>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})

export const getOrderList = (page,limit)=>requests({url:`/order/auth/${page}/${limit}`,method:'get'})