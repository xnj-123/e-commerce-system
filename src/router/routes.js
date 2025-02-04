import Home from "@/pages/Home";
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Search from '@/pages/Search';
import Detail from '@/pages/Detail';
import AddCartSuccess from '@/pages/AddCartSuccess';
import ShopCart from '@/pages/ShopCart';
import Trade from '@/pages/Trade';
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'

import MyOrder from '@/pages/Center/MyOrder'
import GroupOrder from '@/pages/Center/GroupOrder'

export default
    [
        {
            path:'/center',
            component:()=>import('@/pages/Center'),
            meta:{show:true},
            children:[
                {
                    path:'myorder',
                    component:MyOrder,
                },
                {
                    path:'grouporder',
                    component:GroupOrder,
                },
                {
                    path: '/center',
                    redirect: '/center/myorder'
                }
            ]
        },
        {
            path:'/paysuccess',
            component:PaySuccess,
            meta:{show:true}
        },
        {
            path: '/pay',
            component: Pay,
            meta: { show: true, },
        },
        {
            path: '/trade',
            component: Trade,
            meta: { show: true, },
            beforeEnter:(to,from,next)=>{
                if(from.path=='/shopcart'){
                    next();
                }else{
                    next(false);
                }
            }
        },
        {
            path: '/shopcart',
            component: ShopCart,
            meta: { show: true, },
        },
        {
            path: '/addcartsuccess',
            component: AddCartSuccess,
            meta: { show: true, },
            name: 'addcartsuccess'
        },
        {
            path: '/home',
            component: Home,
            meta: { show: true, }
        }, {
            path: '/login',
            component: Login,
            meta: { show: false }
        }, {
            path: '/register',
            component: Register,
            meta: { show: false }
        }, {
            path: '/search/:keyword?',
            component: Search,
            meta: { show: true, },
            name: 'search'
        }, {
            path: '/detail/:skuid',
            component: Detail,
            meta: { show: true }
        }



        , {
            path: '*',
            redirect: '/home'
        }
    ]