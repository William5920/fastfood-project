<template>
	<div class="msite">
		<!-- 首页头部 -->
		<HeaderTop :title="address.name">
			<router-link class="header-search" slot="left" to="/search" >
				<i class="iconfont icon-icon_sousuo"></i>
			</router-link>
			<router-link class="header-login" slot="right" :to="userInfo._id ? '/userInfo' : '/login'">
				<span class="header-login-text" v-if="!userInfo._id">
				登录|注册
				</span>
				<span class="header-login-text" v-else>
					<i class="iconfont icon-dengluren"></i>
				</span>
			</router-link>
		</HeaderTop>
		<!-- 首页导航 -->
		<nav class="msite_nav">
			<div class="swiper-container" v-if="categorys.length">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(categorys, index) in categorysArr" :key="index">
						<a href="javascript:" class="link_to_food" v-for="(category, index) in categorys" :key="index">
						  <div class="food_container">
							<img :src="baseImageUrl + category.image_url">
						  </div>
						  <span>{{ category.title }}</span>
						</a>

					</div>

				</div>
				<!-- Add Pagination -->
				<div class="swiper-pagination"></div>
			</div>
			<img src="./images/msite_back.svg" alt="" v-else>
		</nav>
		
		<ShopList/>
	</div>
</template>

<script>

	import Swiper from 'swiper'
	import 'swiper/css/swiper.min.css'

	import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
	import ShopList from '../../components/ShopList/ShopList.vue'

	import { mapState } from 'vuex'

	export default {
		data() {
			return {
				baseImageUrl: 'https://fuss10.elemecdn.com'
			}
		},
		mounted() {

			this.$store.dispatch('getCategorys')
			this.$store.dispatch('getShops')
			
		},
		computed: {
			...mapState(['address', 'categorys', 'userInfo']),

			// 根据categorys生成一个二维数组，小数组的最大个数是8，适用于swiper的结构
			categorysArr() {
				const { categorys } = this
				// 准备空的二维数组
				const arr = []
				let minArr = []
				// 遍历categorys一维数组
				categorys.forEach(c => {
					// 当小数组的长度达到8时，清空小数组
					if(minArr.length === 8) {
						minArr = []
					}
					// 把小数组添加到大数组里面去
					if(minArr.length === 0) {
						arr.push(minArr)
					}

					minArr.push(c)

				})

				return arr
			}
		},
		components: {
			HeaderTop,
			ShopList
		},
		watch: {
			categorys(value) { // 监控数据的变化，在异步更新界面之前执行
				//数据更新导致界面更新之后，才能创建swiper

				this.$nextTick(() => { // 一旦界面更新完成，立即调用（此语句写在数据更新之后）
					//创建一个swiper对象来实现轮播
						new Swiper('.swiper-container', {
					 	loop: true, // 循环模式选项
						pagination: { // 如果需要分页器
					 	el: '.swiper-pagination'
					 }
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/scss/mixins.scss';

	.msite {
		width: 100%;

		.msite_nav {
			@include bottom-border-1px(#e4e4e4);
			margin-top: 45px;
			height: 200px;
			background-color: #fff;

			.swiper-container {
				width: 100%;
				height: 100%;
				/*overflow: hidden;*/

				.swiper-wrapper {
					width: 100%;
					height: 100%;

					.swiper-slide {
						display: flex;
						justify-content: center;
						align-items: flex-start;
						flex-wrap: wrap;

						.link_to_food {
							width: 25%;

							.food_container {
								display: block;
								width: 100%;
								text-align: center;
								padding-bottom: 10px;
								font-size: 0;

								img {
									display: inline-block;
									width: 50px;
									height: 50px;
								}
							}

							span {
								display: block;
								width: 100%;
								text-align: center;
								font-size: 13px;
								color: #666;
							}
						}
					}
				}

				.swiper-pagination {
					>span.swiper-pagination-bullet-active {
						background: #02a774;
					}
				}
			}
		}

		
		
		


	}
	.icon-icon_sousuo {
				font-size: 25px;
				color: #fff;
			}
	.header-login-text {
				color: #fff;
				font-size: 16px;
			}
</style>