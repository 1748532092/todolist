<template>
	<view class="container">
		<view class="cus-header" :style="{ 'min-height': navBarHeight + 'px', 'padding-top': statusBarHeight + 'px' }">
			<image class="icon" src="../static/time/icon_music_playback.png" mode=""></image>
			<image class="icon" src="../static/time/icon_add.png" mode=""></image>
		</view>
		<view class="mode-list-box">
			<view class="mode-list">
				<view class="mode-item" v-for="(modeItem, modeIndex) in modeList" :key="modeIndex">
					<image class="icon" :src="modeItem.iconPath"></image>
					<view class="text">{{ modeItem.text }}</view>
				</view>
			</view>
			<view class="arrow-box">
				<image style="width: 30rpx; height: 26rpx" src="../static/time/icon_triangle.png" mode=""></image>
			</view>
		</view>

		<view class="time-box">
			<image v-if="status === 0" class="icon-time" src="../static/time/icon_time.png" mode=""></image>
			<image v-else class="icon-time" src="../static/time/icon_time2.png" mode=""></image>
		</view>

		<view class="opera-btn">
			<view class="pause" v-if="status === 1" @click="handleOperate(2)">
				<image class="icon" src="../static/time/icon_pause.png" mode=""></image>
				<text>暂停</text>
			</view>
			<view class="choose" v-else-if="status === 2">
				<view class="finish" @click="handleFinish">
					<image class="icon" src="../static/time/icon_finish.png" mode=""></image>
					<text>结束</text>
				</view>
				<view class="continue" @click="handleContinue">
					<image class="icon" src="../static/time/icon_play.png" mode=""></image>
					<text>继续</text>
				</view>
			</view>
			<view class="start" v-else @click="handleOperate(1)">开始专注</view>
		</view>

		<div class="auto-next">
			<checkbox style="transform: scale(0.7)" />
			<text style="color: #fff">完成休息后开启下一轮专注</text>
		</div>

		<!-- 弹窗 -->
		<uni-popup ref="showPopup" background-color="#fff">
			<view class="popu-box">
				<view class="popup-content">
					<view>本次专注时常为15分钟， 是否继续？</view>
					<view style="margin-top: 30rpx">（可奖励金币1枚）</view>
				</view>
				<view class="popConfig-btn">
					<view class="finish-btn" @click="handleFinish">结束</view>
					<view class="continue-btn" @click="handleContinue">继续专注</view>
				</view>
			</view>
		</uni-popup>
		<TabBar />
	</view>
</template>

<script>
import TabBar from '@/components/TabBar.vue'
export default {
	components: {
		TabBar
	},
	data() {
		return {
			navBarHeight: getApp().globalData.navBarHeight,
			statusBarHeight: getApp().globalData.statusBarHeight,
			modeList: [
				{
					iconPath: '../static/time/icon_clock.png',
					text: '时钟模式'
				},
				{
					iconPath: '../static/time/screen-lock-portrait.png',
					text: '学霸模式'
				},
				{
					iconPath: '../static/time/icon_self_study.png',
					text: '自习室'
				},
				{
					iconPath: '../static/time/icon_customize.png',
					text: '自定义模式'
				}
			],
			status: 0 // 0:初始状态；1：暂停；2：结束/继续
		}
	},
	methods: {
		handleOperate(val) {
			if (val == 2) {
				this.$refs.showPopup.open('center')
			} else {
				this.status = val
			}
		},
		handleFinish() {
			this.status = 0
			this.$refs.showPopup.close()
		},
		handleContinue() {
			this.status = 1
			this.$refs.showPopup.close()
		}
	}
}
</script>

<style scoped lang="scss">
.container {
	height: 100vh;
	background-color: #ebebc2;

	.cus-header {
		padding-left: 20rpx;

		.icon {
			width: 76rpx;
			height: 76rpx;
			margin: 10rpx;
		}
	}

	.mode-list-box {
		position: relative;
		margin: 50rpx 0;

		.arrow-box {
			position: absolute;
			top: 120rpx;
			left: 80rpx;
		}
	}
	.mode-list {
		display: flex;
		align-items: center;
		justify-content: space-around;

		.mode-item {
			width: 160rpx;
			height: 132rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			background-color: #ffffff;
			border-radius: 10rpx;
			opacity: 50%;

			.icon {
				width: 50rpx;
				height: 50rpx;
			}

			.text {
				font-size: 26rpx;
				color: #bfbfbf;
				margin-top: 10rpx;
				// text-align: center;
			}
		}
	}

	.time-box {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 100rpx 0 30rpx 0;

		.icon-time {
			width: 500rpx;
			height: 500rpx;
		}
	}

	.opera-btn {
		display: flex;
		align-items: center;
		justify-content: center;

		.start,
		.pause,
		.continue {
			width: 300rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #fff;
			font-size: 34rpx;
			background-color: #000;
			padding: 10rpx 0;
			border-radius: 30rpx;
		}

		.icon {
			width: 50rpx;
			height: 50rpx;
			margin-right: 10rpx;
		}

		.choose {
			display: flex;
			align-items: center;
			justify-content: center;

			.finish {
				width: 200rpx;
				padding: 10rpx 0;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #000;
				font-size: 34rpx;
				background-color: #fff;
				border-radius: 30rpx;

				.icon {
					width: 40rpx !important;
					height: 40rpx !important;
					margin-right: 10rpx;
				}
			}

			.continue {
				width: 200rpx !important;
				margin-left: 50rpx;

				.icon {
					width: 40rpx !important;
					height: 40rpx !important;
					margin-right: 10rpx;
				}
			}
		}
	}

	.auto-next {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 20rpx;
	}
	
	.popu-box {
		width: 600rpx;
		padding: 30rpx;
		background-color: #fff;
		border-radius: 48rpx;
		border: 2rpx solid #707070;
	}
	.popup-content {
		font-size: 50rpx;
		text-align: center;
	}

	.popConfig-btn {
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin-top: 30rpx;
		.finish-btn {
			border: 2rpx solid #707070;
		}
		.finish-btn,
		.continue-btn {
			width: 230rpx;
			height: 76rpx;
			color: #000;
			line-height: 76rpx;
			text-align: center;
			background-color: #ffffff;
			border-radius: 30rpx;
		}

		.continue-btn {
			color: #fff !important;
			background-color: #000 !important;
		}
	}
}
</style>
