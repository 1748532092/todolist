<template>
	<view class="container">
		<view @click="handleSeatClick($event)">
			<image class="bg" src="../static/selfStudyRoomSelection/pic_room.png" mode=""></image>
		</view>
		<view class="cus-header" :style="{'min-height': navBarHeight + 'px', 'padding-top': statusBarHeight + 'px'}">
			<image class="icon" src="/static/home/icon_back.png" @click="handleBack()"></image>
		</view>

		<view class="room-info">
			<view class="room-name">{{roomName}}</view>
			<view class="time">2025.02.18 8:26</view>
			<view class="num">当前专注人数：{{perNum}}人</view>
		</view>

		<view class="" v-if="show" :style="{'position': 'absolute', 'top':yLabel + 'px', 'left': xLabel + 'px'}">
			<image style="width: 45px;height:45px" src="../static/selfStudyRoomSelection/icon_active.png"
				mode=""></image>
			<view class="seat-text">
				<view>已有人</view>
				<view>专注时间：1min</view>
			</view>
		</view>

		<uni-popup ref="popup" type="center">
			<view class="content">
				<view class="title">是否落座</view>
				<view class="btn">
					<view class="item" @click="cancel">离开</view>
					<view class="item" @click="confirm">是</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navBarHeight: getApp().globalData.navBarHeight,
				statusBarHeight: getApp().globalData.statusBarHeight,
				perNum: 0,
				roomName: '',
				xLabel: 0,
				yLabel: 0,
				show: false
			}
		},
		onLoad(options) {
			this.roomName = options.type
		},
		methods: {
			handleBack() {
				uni.navigateBack({})
			},
			handleSeatClick(e) {
				this.$refs.popup.open()
				this.xLabel = parseInt(e.detail.x)
				this.yLabel = parseInt(e.detail.y)
			},
			cancel() {
				this.$refs.popup.close()
			},
			confirm() {
				this.$refs.popup.close()
				this.show = true
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		position: relative;
		height: 100vh;

		.bg {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
		}

		.cus-header {
			display: flex;
			align-items: center;
			padding-left: 20rpx;

			.icon {
				width: 68rpx;
				height: 68rpx;
				margin: 10rpx;
			}
		}

		.room-info {
			position: absolute;
			top: 120rpx;
			left: 36%;

			.room-name {
				font-size: 40rpx;
			}

			.time {
				position: absolute;
				top: 0;
				right: -160rpx;
				width: 60rpx;
				font-size: 12rpx;
				text-align: right;
			}

			.num {
				width: 200rpx;
				position: absolute;
				top: 30rpx;
				left: 90rpx;
				font-size: 20rpx;
			}
		}

		.seat-text {
			position: absolute;
			top: 10rpx;
			left: 10rpx;
			font-size: 10rpx;
		}

		.content {
			width: 50vw;
			border-radius: 30rpx;
			padding: 50rpx;
			background-color: #EBEBC2;

			.title {
				font-size: 44rpx;
				text-align: center;
			}

			.btn {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-top: 50rpx;

				.item {
					width: 148rpx;
					height: 72rpx;
					text-align: center;
					line-height: 72rpx;
					border-radius: 24rpx;
					background-color: #A8C38E;
				}
			}
		}
	}
</style>