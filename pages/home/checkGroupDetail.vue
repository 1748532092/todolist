<template>
	<view class="container">
		<view class="cus-header" :style="{'min-height': navBarHeight + 'px', 'padding-top': statusBarHeight + 'px'}">
			<image class="icon" src="/static/home/icon_back.png" @click="handleBack()"></image>
			<image class="icon" src="/static/home/icon_add.png"></image>
			<view class="title">V我50</view>
		</view>
		<view class="top">
			<text>今日速度冠军</text>
			<image class="head" src="/static/head/head (9).png" mode=""></image>
		</view>
		<view class="top">
			<text>自律总榜</text>
			<image class="head" src="/static/head/head (1).png" mode=""></image>
			<image class="head" src="/static/head/head (2).png" mode=""></image>
			<image class="head" src="/static/head/head (3).png" mode=""></image>
		</view>
		<view class="remind">提醒伙伴</view>
		<view class="message-box">
			<view class="time">02-12 8：24</view>
			<view class="message-content">
				<image class="head" src="/static/head/head (1).png" mode=""></image>
				<view class="message">#试卷一套</view>
			</view>
			<view class="message-content">
				<image class="head" src="/static/head/head (2).png" mode=""></image>
				<view class="message">#早起</view>
			</view>
			<view class="time">02-12 11：40</view>
			<view class="message-content">
				<image class="head" src="/static/head/head (1).png" mode=""></image>
				<view class="message">#预习新课</view>
			</view>
			<view class="message-content" style="justify-content: flex-end;">
				<view class="message">#仰卧起坐100个</view>
				<image class="head" src="/static/head/head (2).png" mode=""></image>
			</view>
		</view>

		<view class="check-input">
			<view class="left">
				<image class="icon" src="/static/home/icon_voice.png" mode=""></image>
				<text>立即打卡</text>
			</view>
			<view class="right">
				<image class="icon" src="/static/home/icon_smile.png" mode=""></image>
				<image class="icon" src="/static/home/icon_add_black.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				navBarHeight: getApp().globalData.navBarHeight,
				statusBarHeight: getApp().globalData.statusBarHeight,
				messages: [{
						sender: '晴晴',
						time: '02-15 13:25',
						content: '今天超额完成任务'
					},
					{
						sender: '晴晴',
						time: '02-15 13:25',
						content: '太有实力啦'
					},
					{
						sender: '晴晴',
						time: '02-15 13:25',
						content: '嘿嘿嘿'
					},
					{
						sender: '我',
						time: '前天 20:33',
						content: '我剩一篇作文没写'
					},
					{
						sender: '我',
						time: '前天 20:33',
						content: '我还有阅读'
					},
					{
						sender: '我',
						time: '前天 20:33',
						content: '加油！明天放假'
					},
					{
						sender: '我',
						time: '前天 22:16',
						content: '我今天任务都完成啦！'
					}
				],
			}
		},
		methods: {
			handleBack() {
				uni.navigateBack({})
			},
		}
	}
</script>

<style scoped lang="scss">
	.container {
		min-height: 100vh;
		padding-bottom: 20rpx;
		background-color: #EBEBC2;

		.cus-header {
			display: flex;
			align-items: center;
			padding-left: 20rpx;

			.icon {
				width: 76rpx;
				height: 76rpx;
				margin: 10rpx;
			}

			.title {
				margin-left: 150rpx;
			}
		}

		.head {
			width: 84rpx;
			height: 84rpx;
			margin: 20rpx;
			border-radius: 50%;
		}

		.top {
			width: 80vw;
			display: flex;
			align-items: center;
			font-size: 44rpx;
			background-color: #A8C38E;
			padding: 0 30rpx;
			margin: 50rpx auto 20rpx auto;
			border-radius: 44rpx;
		}

		.remind {
			position: absolute;
			right: 50rpx;
			width: 136rpx;
			display: flex;
			justify-content: center;
			font-size: 24rpx;
			text-align: center;
			background-color: #A8C38E;
			border-radius: 30rpx;
		}

		.message-box {
			width: 100vw;
			margin-top: 70rpx;
			padding-bottom: 100rpx;
			background-color: #fff;
			border-radius: 62rpx 62rpx 0 0;

			.time {
				color: #A1A1A1;
				font-size: 30rpx;
				text-align: center;
				padding-top: 30rpx;
			}

			.message-content {
				display: flex;
				align-items: center;

				.message {
					font-size: 30rpx;
					background-color: #A8C38E;
					border-radius: 24rpx;
					padding: 10rpx;
				}

			}
		}

		.check-input {
			width: 90vw;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 20rpx;
			background-color: #fff;
			border-radius: 32rpx;
			margin: 30rpx auto;
			
			.left {
				display: flex;
				align-items: center;
				color: #A1A1A1;
				font-size: 30rpx;
			}
			.icon {
				width: 60rpx;
				height: 60rpx;
				margin: 10rpx;
			}
		}
	}
</style>