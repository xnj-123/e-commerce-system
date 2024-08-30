import VueRouter from 'vue-router'

import routes from '@/router/routes'

import store from '@/store'

let orginPush = VueRouter.prototype.push;

VueRouter.prototype.push = function (location, resolve, reject) {
	if (resolve && reject) {
		orginPush.call(this, location, resolve, reject);
	} else {
		orginPush.call(this, location, () => { }, (err) => { });
	}
}

const router =  new VueRouter({
	routes,
	// mode:'history',
	scrollBehavior(to, from, savedPosition) {
		// 始终滚动到顶部
		return { y: 0 }
	  },
})

router.beforeEach(async (to,from,next)=>{
	
	let token = store.state.user.token;
	let username = store.state.user.userInfo.name
	if(token){
		if(to.path=='/login'){
			next('/')
		}else{
			if(username){
				next();
			}
			else{
				try {
					await store.dispatch('user/UserInfo')
					next();
				} catch (error) {
					await store.dispatch('user/loginOut')
				}
			}
		}
	}else{
		let toPath = to.path;
		if(toPath.indexOf('/pay')!=-1 ||toPath.indexOf('/trade')!=-1 || toPath.indexOf('/center')!=-1){
			next('/login?redirect='+toPath)
		}else{
			next()
		}
		
	}

})
export default router;
