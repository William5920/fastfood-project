<template>
	<header class="header">
		<slot name="left"></slot>
		<span class="header-title">
			<span class="header-title-text ellipsis">{{title}}</span>
		</span>
		<slot name="right"></slot>
	</header>
</template>

<script>
	export default {
		props: {
			title: String
		}
	}
</script>

<style lang="scss" scoped>
	.header {
		background-color: #02a774;
		width: 100%;
		height: 45px;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;

		.header-search {
			position: absolute;
			left: 15px;
			top: 50%;
			transform: translateY(-50%);
			width: 10%;
			height: 50%;

			.icon-icon_sousuo {
				font-size: 25px;
				color: #fff;
			}
		}

		.header-title {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			width: 50%;
			color: #fff;
			text-align: center;

			.header-title-text {
				font-size: 20px;
				color: #fff;
				display: block;
			}
		}

		.header-login {
			position: absolute;
			right: 15px;
			top: 50%;
			transform: translateY(-50%);
			font-size: 14px;
			color: #fff;

			.header-login-text {
				color: #fff;
			}
		}
	}
</style>