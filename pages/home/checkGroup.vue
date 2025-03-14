<template>
	<view class="container">
		<view class="cus-header" :style="{'min-height': navBarHeight + 'px', 'padding-top': statusBarHeight + 'px'}">
			<image class="icon" src="/static/home/icon_back.png" @click="handleBack()"></image>
			<image class="icon" src="/static/home/icon_add.png"></image>
			<view class="title">打卡组</view>
		</view>

		<view class="my-group">
			<view class="title">我的小组</view>
			<view class="group-box" @click="toGroupDetail()">
				<image class="head" src="/static/home/pic_group_head.jpg" mode=""></image>
				<view class="center">
					<view class="group-name">V我50</view>
					<view class="content">
						25人/今日已18人完成打卡
					</view>
					<view class="tips">
						您今日还未完成打卡
					</view>
				</view>
				<view class="right">
					<view style="width: 50rpx;">点击进入</view>
					<checkbox style="transform:scale(0.6)" color="#000000" :checked="false" />
				</view>
			</view>
			<view class="group-box">
				<image class="head" src="/static/home/pic_group_head.jpg" mode=""></image>
				<view class="center">
					<view class="group-name">决战6级</view>
					<view class="content">
						72人/今日已37人完成打卡
					</view>
					<view style="color: #FFEF00;">
						您今日已完成打卡
					</view>
				</view>
				<view class="right">
					<view style="width: 50rpx;">点击进入</view>
					<checkbox style="transform:scale(0.6)" color="#000000" checked />
				</view>
			</view>
		</view>

		<view class="bottom">
			<view class="left">
				<view class="left-title">2月挑战</view>
				<view style="color: #C8BEBE;font-size: 30rpx;">剩余8天！</view>
				<image class="pic-challenge" src="/static/home/pic_challenge.png" mode=""></image>
				<view class="btn">立即参与</view>
			</view>
			<view class="right">
				<view class="right-top" @click="goToDetail">
					<view class="">勋章墙</view>
					<image class="icon_medal_wall" src="/static/home/icon_medal_wall.png" mode=""></image>
				</view>
				<view class="right-bottom">
					<view class="item">
						<view class="">个人挑战</view>
						<image class="icon" src="/static/home/icon_per.png" mode=""></image>
					</view>
					<view class="item">
						<view class="">小组挑战</view>
						<image class="icon" src="/static/home/icon_group.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				navBarHeight: getApp().globalData.navBarHeight,
				statusBarHeight: getApp().globalData.statusBarHeight,
			}
		},
		methods: {
			handleBack() {
				uni.navigateBack({})
			},
			toGroupDetail () {
				uni.navigateTo({
					url: '/pages/home/checkGroupDetail'
				})
			},
			goToDetail () {
				uni.navigateTo({
					url: '/pages/home/medalWall'
				})
			}
		}
	}
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
				margin-left: 150rpx;
			}
		}

		.my-group {
			position: relative;
			width: 84vw;
			padding: 40rpx 30rpx;
			margin: 100rpx auto 50rpx auto;
			background-color: #fff;
			border-radius: 54rpx;

			.title {
				position: absolute;
				top: -40rpx;
				left: 30rpx;
				font-size: 50rpx;
			}

			.group-box {
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-radius: 70rpx;
				background-color: #A8C38E;
				padding: 30rpx 20rpx;
				margin-top: 30rpx;

				.head {
					width: 104rpx;
					height: 104rpx;
				}

				.center {
					font-size: 20rpx;

					.group-name {
						font-size: 36rpx;
					}

					.content {
						margin: 16rpx 0;
					}

					.tips {
						color: #E90909;
					}
				}

				.right {
					display: flex;
					align-items: center;
					font-size: 20rpx;
				}
			}
		}

		.bottom {
			width: 90vw;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin: 0 auto;

			.left {
				width: 326rpx;
				padding: 20rpx;
				background-color: #fff;
				border-radius: 32rpx;

				.left-title {
					font-size: 40rpx;
				}

				.pic-challenge {
					width: 206rpx;
					height: 206rpx;
					margin: 20rpx 0 20rpx 140rpx;
				}

				.btn {
					width: 156rpx;
					font-size: 26rpx;
					text-align: center;
					padding: 10rpx 40rpx;
					border-radius: 32rpx;
					background-color: #A8C38E;
				}
			}

			.right {

				.right-top,
				 {
					display: flex;
					font-size: 40rpx;
					padding: 20rpx;
					background-color: #fff;
					border-radius: 32rpx;

					.icon_medal_wall {
						width: 108rpx;
						height: 108rpx;
					}
				}
				.right-bottom {
					font-size: 40rpx;
					background-color: #fff;
					border-radius: 32rpx;
					margin-top: 50rpx;
					.item {
						display: flex;
						align-items: center;
						padding: 20rpx;
						
						.icon {
							width: 60rpx;
							height: 60rpx;
							margin-left: 20rpx;
						}
					}
					.item:nth-child(1) {
						border-bottom: 4rpx solid #707070;
					}
				}
			}
		}
	}
</style>