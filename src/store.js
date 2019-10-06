import Vue from 'vue'
import Vuex from 'vuex'
import {
	reqAddress,
	reqFoodCategorys,
	reqShops,
	reqUserInfo,
	reqLogout,
  reqShopInfo,
  reqShopRatings,
  reqShopGoods,
  reqSearchShop
} from './api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	latitude: 40.10038,// 纬度
  	longitude: 116.36867,// 经度
  	address: {},// 地址相关信息对象
  	categorys: [],// 食品分类数组
  	shops: [],// 商家数组
  	userInfo: {}, // 存储登录请求返回的用户信息
    info: {}, // 商家信息
    goods: [], // 商品列表
    ratings: [], // 商家评价列表
    cartFoods: [], // 购物车中的商品列表
    searchShops: [], // 搜索出来的商家列表
  },
  mutations: {
  	receive_address(state, {address}) {
  		state.address = address
  	},
  	receive_categorys(state, {categorys}) {
  		state.categorys = categorys
  	},
  	receive_shops(state, {shops}) {
  		state.shops = shops
  	},
  	receive_userInfo(state, {userInfo}) {
  		state.userInfo = userInfo
  	},
  	reset_userInfo(state) {
  		state.userInfo = {}
  	},
    receive_goods(state, {goods}) {
      state.goods = goods
    },
    receive_ratings(state, {ratings}) {
      state.ratings = ratings
    },
    receive_info(state, {info}) {
      state.info = info
    },
    increament_food_count(state,{food}) {
      if(!food.count) {
        Vue.set(food, 'count', 1)
        // 将新增的商品添加到购物车列表里去
        state.cartFoods.push(food)
      } else {
        food.count++
      }
    },
    decreament_food_count(state,{food}) {
      if(food.count) {
        food.count--
        // 将不要的商品从购物车列表里去掉
        if(food.count === 0) {
          state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
        }
      }
    },
    clear_cart(state) {
        // 清空购物车中食物的count
        state.cartFoods.forEach(food => food.count = 0)
        // 清空购物车数组cartFoods
        state.cartFoods = []
    },
    receive_searchShops(state, {searchShops}) {
      state.searchShops = searchShops
    },
  },
  actions: {
  	// 异步获取地址
  	async getAddress({commit, state}) {
  		// 发送一个异步ajax请求
  		const geohash = state.latitude + ',' + state.longitude
  		const result = await reqAddress(geohash)
  		// 提交一个mutation
  		if(result.code === 0) {
  			const address = result.data
  			commit('receive_address', {address})
  		}
  	},
  	// 异步获取食品分类数组
  	async getCategorys({commit}) {
  		// 发送一个异步ajax请求

  		const result = await reqFoodCategorys()
  		// 提交一个mutation
  		if(result.code === 0) {
  			const categorys = result.data
  			commit('receive_categorys', {categorys})
  		}
  	},
  	// 异步获取商家列表
  	async getShops({commit, state}) {
  		// 发送一个异步ajax请求
  		const {longitude, latitude} = state
  		const result = await reqShops(longitude, latitude)
  		// 提交一个mutation
  		if(result.code === 0) {
  			const shops = result.data
  			commit('receive_shops', {shops})
  		}
  	},
  	// 同步记录用户信息
  	recordUser({commit}, userInfo) {
  		commit('receive_userInfo', {userInfo})
  	},
  	// 异步获取用户信息
  	async getUserinfo({commit}) {
  		const result = await reqUserInfo()
  		if(result.code === 0) {
  			const userInfo = result.data
  			commit('receive_userInfo', {userInfo})
  		}

  	},
  	// 异步登出
  	async logout({commit}) {
  		const result = await reqLogout()
  		if(result.code === 0) {
  			commit('reset_userInfo')		 
  		}
  	},
    // 异步获取商家信息
    async getShopInfo({commit}) {
      const result = await reqShopInfo()
      if(result.code === 0) {
        const info = result.data
        commit('receive_info', {info})
      }
    },
    // 异步获取商家评价列表
    async getShopRatings({commit}, callback) {
      const result = await reqShopRatings()
      if(result.code === 0) {
        const ratings = result.data
        commit('receive_ratings', {ratings})
        callback && callback()
      }
    },
    // 异步获取商家商品列表
    async getShopGoods({commit}, callback) {
      const result = await reqShopGoods()
      if(result.code === 0) {
        const goods = result.data
        commit('receive_goods', {goods})
        callback && callback()
      }
    },
    // 同步更新选中的食物数量
    updateFoodCount({commit},{isAdd, food}) {
        if(isAdd) {
          // 食物数量加1
          commit('increament_food_count', {food})
        } else {
          // 食物数量减1
          commit('decreament_food_count', {food})
        }
    },
    // 同步清空购物车
    clearCart({commit}) {
      commit('clear_cart')
    },
    // 异步更新搜索出来的商家列表
    async getSearchShops({commit, state}, keyword) {
      const geohash = state.latitude + ',' + state.longitude
      const result = await reqSearchShop(geohash, keyword)
      if(result.code === 0) {
        const searchShops = result.data
        commit('receive_searchShops', {searchShops})
      }
    },

  },
  getters: {
    // 获取购物车中商品的总数量
    totalCount(state) {
      return state.cartFoods.reduce((preTotal, food) => preTotal+food.count, 0)
    },
    // 获取购物车中商品的总价
    totalPrice(state) {
      return state.cartFoods.reduce((preTotal, food) => preTotal+food.count*food.price, 0)
    },
    // 获取正面评价的数量
    positiveSize(state) {
      return state.ratings.reduce((preTotal, rating) => preTotal+(rating.rateType===0?1:0), 0)
    },
  }
})
