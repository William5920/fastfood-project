<template>
	<div class="star" :class="'star-' + size">
		<span class="star-item" v-for="(sc, index) in starClasses" :key="index" :class="sc"></span>
	</div>
</template>

<script>
	export default {
		props: {
			score: Number,
			size: Number
		},
		computed: {
			starClasses() {
				const scs = [] // 用于存放5个星星的类名
				const { score } = this
				const starInteger = Math.floor(score)
				// 添加全星
				for(let i = 0; i<starInteger; i++) {
					scs.push('on')
				}
				// 添加半星
				if(score*10 - starInteger*10 >= 5) {
					scs.push('half')
				}
				// 添加灰星
				while(scs.length < 5) {
					scs.push('off')
				}

				return scs
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/scss/mixins.scss';
	.star { //2x图 3x图
												float: left;
												font-size: 0;

												.star-item {
													display: inline-block;
													background-repeat: no-repeat;
												}

												&.star-48 {
													.star-item {
														width: 20px;
														height: 20px;
														margin-right: 22px;
														background-size: 20px 20px;
														&:last-child {
															margin-right: 0;
														}
														&.on {
															@include bg-image('./images/star48_on')
														}
														&.half {
															@include bg-image('./images/star48_half')
														}
														&.off {
															@include bg-image('./images/star48_off')
														}
													}
												}

												&.star-36 {
													.star-item {
														width: 15px;
														height: 15px;
														margin-right: 6px;
														background-size: 15px 15px;
														&:last-child {
															margin-right: 0;
														}
														&.on {
															@include bg-image('./images/star36_on')
														}
														&.half {
															@include bg-image('./images/star36_half')
														}
														&.off {
															@include bg-image('./images/star36_off')
														}
													}
												}

												&.star-24 {
													.star-item {
														width: 10px;
														height: 10px;
														margin-right: 3px;
														background-size: 10px 10px;
														&:last-child {
															margin-right: 0;
														}
														&.on {
															@include bg-image('./images/star24_on')
														}
														&.half {
															@include bg-image('./images/star24_half')
														}
														&.off {
															@include bg-image('./images/star24_off')
														}
													}
												}
	}	
</style>