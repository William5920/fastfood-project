<template>
	<div>
		<ShopHeader />
		<div class="tab">
			<div class="tab-item">
				<router-link to="/shop/goods" replace>商品</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/shop/ratings" replace>评论</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/shop/info" replace>信息</router-link>
			</div>
		</div>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		
	</div>
</template>

<script>
	import ShopHeader from '../../components/ShopHeader/ShopHeader.vue'
	export default {
		mounted() {
			this.$store.dispatch('getShopInfo')
		},
		components: {
			ShopHeader
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/scss/mixins.scss';
	.tab {
		height: 45px;
		line-height: 45px;
		background-color: #fff;
		@include bottom-border-1px(rgba(7, 17, 27, 0.1));
		.tab-item {
			float: left;
			width: 33.33333%;
			text-align: center;
			font-size: 14px;
			color: rgb(77, 85, 93);
			a {
				display: block;
				position: relative;
				color: rgb(77, 85, 93);
				text-decoration: none;
				&.router-link-active {
					color: #02a774;
					&::after {
						content: '';
						position: absolute;
						left: 50%;
						transform: translateX(-50%);
						width: 35px;
						height: 2px;
						bottom: 1px;
						background-color: #02a774;
					}
				}
			}
		}
	}
</style>