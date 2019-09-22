<template>
	<div class="msite">
		<!-- 首页头部 -->
		<HeaderTop title="海淀区中关村清华科技园">
			<span class="header-search" slot="left">
				<i class="iconfont icon-icon_sousuo"></i>
			</span>
			<span class="header-login" slot="right">
				<span class="header-login-text">登录|注册</span>
			</span>
		</HeaderTop>
		<!-- 首页导航 -->
		<nav class="msite_nav">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<a href="javascript:" class="link_to_food">
						  <div class="food_container">
							<img src="./images/nav/1.jpg">
						  </div>
						  <span>甜品饮品</span>
						</a>
						<a href="javascript:" class="link_to_food">
		                  <div class="food_container">
		                    <img src="./images/nav/2.jpg">
		                  </div>
		                  <span>商超便利</span>
		                </a>
		                <a href="javascript:" class="link_to_food">
		                  <div class="food_container">
		                    <img src="./images/nav/3.jpg">
		                  </div>
		                  <span>美食</span>
		                </a>
		                <a href="javascript:" class="link_to_food">
		                  <div class="food_container">
		                    <img src="./images/nav/4.jpg">
		                  </div>
		                  <span>简餐</span>
		                </a>
		                <a href="javascript:" class="link_to_food">
		                  <div class="food_container">
		                    <img src="./images/nav/5.jpg">
		                  </div>
		                  <span>新店特惠</span>
		                </a>
		                <a href="javascript:" class="link_to_food">
		                  <div class="food_container">
		                    <img src="./images/nav/6.jpg">
		                  </div>
		                  <span>准时达</span>
		                </a>
		                <a href="javascript:" class="link_to_food">
		                  <div class="food_container">
		                    <img src="./images/nav/7.jpg">
		                  </div>
		                  <span>预订早餐</span>
		                </a>
		                <a href="javascript:" class="link_to_food">
		                  <div class="food_container">
		                    <img src="./images/nav/8.jpg">
		                  </div>
		                  <span>土豪推荐</span>
		                </a>
					</div>
					<div class="swiper-slide">
						<a href="javascript:" class="link_to_food">
						  <div class="food_container">
							<img src="./images/nav/1.jpg">
						  </div>
						  <span>甜品饮品</span>
						</a>
						<a href="javascript:" class="link_to_food">
		                  <div class="food_container">
		                    <img src="./images/nav/2.jpg">
		                  </div>
		                  <span>商超便利</span>
		                </a>
		                <a href="javascript:" class="link_to_food">
		                  <div class="food_container">
		                    <img src="./images/nav/3.jpg">
		                  </div>
		                  <span>美食</span>
		                </a>
		                <a href="javascript:" class="link_to_food">
		                  <div class="food_container">
		                    <img src="./images/nav/4.jpg">
		                  </div>
		                  <span>简餐</span>
		                </a>
		                <a href="javascript:" class="link_to_food">
		                  <div class="food_container">
		                    <img src="./images/nav/5.jpg">
		                  </div>
		                  <span>新店特惠</span>
		                </a>
		                <a href="javascript:" class="link_to_food">
		                  <div class="food_container">
		                    <img src="./images/nav/6.jpg">
		                  </div>
		                  <span>准时达</span>
		                </a>
		                <a href="javascript:" class="link_to_food">
		                  <div class="food_container">
		                    <img src="./images/nav/7.jpg">
		                  </div>
		                  <span>预订早餐</span>
		                </a>
		                <a href="javascript:" class="link_to_food">
		                  <div class="food_container">
		                    <img src="./images/nav/8.jpg">
		                  </div>
		                  <span>土豪推荐</span>
		                </a>
					</div>
				</div>
				<!-- Add Pagination -->
				<div class="swiper-pagination"></div>
			</div>
		</nav>
		<ShopList/>
	</div>
</template>

<script>

	import Swiper from 'swiper'
	import 'swiper/css/swiper.min.css'

	import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
	import ShopList from '../../components/ShopList/ShopList.vue'

	export default {
		mounted() {
			//创建一个swiper对象来实现轮播
			new Swiper('.swiper-container', {
				 loop: true, // 循环模式选项
				 pagination: { // 如果需要分页器
				 	el: '.swiper-pagination'
				 }
			})
		},
		components: {
			HeaderTop,
			ShopList
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
</style>