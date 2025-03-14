<template>
	<view class="container">
		<view class="cus-header" :style="{'min-height': navBarHeight + 'px', 'padding-top': statusBarHeight + 'px'}">
			<image class="icon" src="/static/home/icon_back.png" @click="handleBack()"></image>
			<view class="title">消息</view>
		</view>

		<view class="message-list">
			<view class="left">
				<view class="item">好友消息</view>
				<image class="arrow" src="/subPackage/message/static/icon_arrow.png" mode=""></image>
			</view>
			<view class="item">小组消息</view>
		</view>

		<view class="message-box">
			<view class="message-item" v-for="(item, index) in messageList" :key="index" @click="handleDetail(index)">
				<view class="left">
					<image class="head" src="/subPackage/message/static/pic_head2.jpg"></image>
					<view class="sender">
						<view>{{item.sender}}</view>
						<view class="content">
							{{item.content}}
						</view>
					</view>

				</view>
				<view class="right">
					<view class="time">
						{{item.time}}
					</view>
					<view class="num">
						{{item.unReadNum}}
					</view>
				</view>
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
					headPic: '',
					sender: '晴晴',
					time: '刚刚',
					content: '我今天任务都完成啦',
					unReadNum: 1
				}, {
					headPic: '',
					sender: 'f789622',
					time: '14：06',
					content: '这周末要出去玩吗',
					unReadNum: 10
				}, {
					headPic: '',
					sender: 'nikounikou',
					time: '14：07',
					content: '有六级的材料吗',
					unReadNum: 3
				}, {
					headPic: '',
					sender: '你好星期八',
					time: '14：09',
					content: '上次真的太感谢了',
					unReadNum: 7
				}, {
					headPic: '',
					sender: 'BYE',
					time: '14：30',
					content: '[图片]',
					unReadNum: 15
				}, ]
			}
		},
		methods: {
			handleBack() {
				uni.navigateBack({})
			},
			handleDetail(val) {
				uni.navigateTo({
					url: './messageDetail'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
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
				margin-left: 200rpx;
			}
		}

		.message-list {
			display: flex;
			align-items: center;
			justify-content: space-around;
			margin: 20rpx auto 50rpx auto;

			.left {
				.arrow {
					position: absolute;
					left: 20%;
					width: 56rpx;
					height: 50rpx;
				}
			}

			.item {
				width: 260rpx;
				color: #fff;
				font-size: 40rpx;
				text-align: center;
				background-color: #A8C38E;
				border-radius: 30rpx;
				padding: 30rpx 20rpx;


			}
		}

		.message-box {
			background-color: #fff;
			border-radius: 32rpx 32rpx 0 0;
			margin-top: 100rpx;

			.message-item {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 20rpx;
			}

			.left {
				display: flex;
				align-items: center;
				font-size: 44rpx;

				.head {
					width: 106rpx;
					height: 106rpx;
					border-radius: 50%;
				}

				.sender {
					margin-left: 20rpx;

					.content {
						font-size: 26rpx;
						color: #707070;
						margin-top: 10rpx;
					}
				}

			}

			.right {
				width: 100rpx;
				display: flex;
				flex-direction: column;
				align-items: center;

				.time {
					font-size: 26rpx;
					color: #707070;
				}

				.num {
					width: 50rpx;
					height: 40rpx;
					color: #fff;
					text-align: center;
					font-size: 26rpx;
					line-height: 40rpx;
					border-radius: 32rpx;
					background-color: #FF0000;
					margin-top: 20rpx;
				}
			}
		}
	}
</style>