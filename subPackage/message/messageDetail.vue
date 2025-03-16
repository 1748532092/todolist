<template>
	<view class="container">
		<view class="cus-header" :style="{'min-height': navBarHeight + 'px', 'padding-top': statusBarHeight + 'px'}">
			<image class="icon" src="/static/home/icon_back.png" @click="handleBack()"></image>
			<image class="head" src="../static/message/pic_head1.jpg"></image>
			<view class="title">晴晴</view>
		</view>

		<view class="message">
			<view class="message-item" v-for="(message, index) in messageList" :key="index">
				<view v-if="message.sender == '我'">
					<view class="time" v-if="message.time">{{message.time}}</view>
					<view class="message-content" style="justify-content: flex-end;">
						<view class="message">{{message.content}}</view>
						<image class="head" src="/static/home/pic_head3.jpg" mode=""></image>
					</view>
				</view>
				<view class="" v-else>
					<view class="time" v-if="message.time">{{message.time}}</view>
					<view class="message-content">
						<image class="head" src="/static/home/pic_head1.jpg" mode=""></image>
						<view class="message">{{message.content}}</view>
					</view>
				</view>
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
		data() {
			return {
				navBarHeight: getApp().globalData.navBarHeight,
				statusBarHeight: getApp().globalData.statusBarHeight,
				messageList: [{
						sender: '我',
						time: '02-15 13:25',
						content: '今天超额完成任务'
					},
					{
						sender: '晴晴',
						// time: '02-15 13:25',
						content: '太有实力啦'
					},
					{
						sender: '我',
						// time: '02-15 13:25',
						content: '嘿嘿嘿'
					},
					{
						sender: '晴晴',
						time: '前天 20:33',
						content: '我剩一篇作文没写'
					},
					{
						sender: '我',
						// time: '前天 20:33',
						content: '我还有阅读'
					},
					{
						sender: '晴晴',
						// time: '前天 20:33',
						content: '加油！明天放假'
					},
					{
						sender: '我',
						time: '前天 22:16',
						content: '我今天任务都完成啦！'
					}
				],
				newMessage: ''
			};
		},
		methods: {
			handleBack() {
				uni.navigateBack({})
			},
			sendMessage() {
				if (this.newMessage.trim()) {
					this.messages.push({
						sender: '我',
						time: '刚刚',
						content: this.newMessage
					});
					this.newMessage = '';
				}
			}
		}
	};
</script>

<style scoped lang="scss">
	.container {
		height: 100vh;
		background-color: #EBEBC2;

		.cus-header {
			display: flex;
			align-items: center;
			padding-left: 20rpx;

			.icon {
				width: 68rpx;
				height: 68rpx;
				margin: 10rpx;
			}

			.title {
				font-size: 44rpx;
				margin-left: 30rpx;
			}
		}

		.head {
			width: 104rpx;
			height: 104rpx;
			border-radius: 50%;
		}

		.message {
			font-size: 30rpx;
			padding: 0 20rpx;

			.message-item {
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
						background-color: #fff;
						border-radius: 24rpx;
						padding: 10rpx 20rpx;
						margin: 0 10rpx;
					}

				}
			}
		}

		.check-input {
			position: absolute;
			left: 2.5%;
			bottom: 30rpx;
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