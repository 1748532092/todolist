<template>
	<view class="content">
		<image class="login" src="/static/login.png" @click="toHome"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onLoad() {

		},
		methods: {
			toHome() {
				uni.navigateTo({
					url: '../../pages/home/index'
				})
			}
		}
	}
</script>

<style>
	.content {
		width: 100%;
		height: 100vh;
	}

	.login {
		width: 100%;
		height: 100%;
	}
</style>