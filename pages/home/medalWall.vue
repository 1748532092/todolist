<template>
	<view class="container">
		<image class="icon" src="/static/home/icon_back.png" mode="" @click="handleBack"></image>
		<image class="pic" src="/static/home/pic_medal.png" mode=""></image>
	</view>
</template>

<script>
	export default {
		methods: {
			handleBack () {
				uni.navigateBack({})
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		position: relative;

		.pic {
			width: 100vw;
			height: 100vh;
		}

		.icon {
			width: 80rpx;
			height: 80rpx;
			position: absolute;
			top: 50rpx;
			left: 30rpx;
			z-index: 2;
		}
	}
</style>