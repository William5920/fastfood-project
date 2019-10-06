<template>
	<div class="cartcontrol">
		<transition name="move">
	      <div class="iconfont icon-icon-remove" v-if="food.count" @click.stop="updateFoodCount(false)"></div>
	    </transition>
	    <div class="cart-count"  v-if="food.count">{{food.count}}</div>
	    <div class="iconfont icon-add_c" @click.stop="updateFoodCount(true)"></div>
	</div>
</template>

<script>
	export default {
		props: {
			food: Object
		},
		methods: {
			// 更新食物的数量
			updateFoodCount(isAdd) {
				this.$store.dispatch('updateFoodCount', {isAdd, food: this.food})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/scss/mixins.scss';
	.cartcontrol {
		font-size: 0;
		display: flex;
		align-items: center;

		.cart-decrease {
		  display: inline-block;
	      padding: 6px;
	      line-height: 18px;
	      font-size: 14px;
	      color: rgb(0, 160, 220);
		}

		.icon-icon-remove {
			 /* display: inline-block;
			  vertical-align: middle;*/
		      padding: 6px;
		      line-height: 20px;
		      font-size: 20px;
		      color: $green;
		      &.move-enter-active, &.move-leave-active {
		      	transition: all .3s;
		      }
		      &.move-enter, &.move-leave-to {
		      	opacity: 0;
		      	transform: translateX(15px) rotate(180deg);
		      }
		}

		.cart-count {
		  /*display: inline-block;*/
	      vertical-align: top;
	      width: 14px;
	      padding-top: 6px;
	      line-height: 24px;
	      text-align: center;
	      font-size: 10px;
	      color: rgb(147, 153, 159);
		}

		.icon-add_c {
		  /*display: inline-block;*/
	      padding: 6px;
	      line-height: 24px;
	      font-size: 24px;
	      color: $green;
		}
	}
</style>