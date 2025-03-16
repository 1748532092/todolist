<template>
	<view class="container">
		<image class="bg" src="../static/selfStudyRoomSelection/pic_bg.png" mode=""></image>
		<view class="cus-header" :style="{'min-height': navBarHeight + 'px', 'padding-top': statusBarHeight + 'px'}">
			<image class="icon" src="/static/home/icon_back.png" @click="handleBack()"></image>
			<view class="title">自习室</view>
		</view>

		<view class="select-box">
			<view class="picker-box">
				<picker mode="selector" :range="options" @change="handleChange">
					<view class="picker">
						{{ selectedOption }}
					</view>
				</picker>
				<image style="width: 30rpx;height: 30rpx;margin-left: 10rpx"
					src="../static/time/icon_triangle.png" mode=""></image>
			</view>

			<view class="room-list">
				<view :class="[ curIndex === index ?  'active': '','room-item']"
					v-for="(item, index) in roomList[selectedOption]" :key="index" @click="handleClick(index)">
					{{item}}
				</view>
			</view>

			<view class="btn-box">
				<view class="btn">下一页</view>
				<view class="btn" @click="toDetail">确定</view>
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
				value: 0,
				curIndex: 0,
				selectedOption: '专业楼',
				options: ['专业楼', '年级楼', '在职楼', '星座楼'],
				roomList: {
					'专业楼': ['工学', '理学', '法学', '经管类', '教育类', '艺术类'],
					'年级楼': ['小学', '初中', '高一', '高二', '高三', '大一', '大二', '大三'],
					'在职楼': [],
					'星座楼': []
				}
			}
		},
		methods: {
			handleBack() {
				uni.navigateBack({})
			},
			handleChange(e) {
				const index = e.detail.value;
				this.selectedOption = this.options[index];
			},
			handleClick(val) {
				this.curIndex = val
			},
			toDetail() {
				const curRoom = this.roomList[this.selectedOption][this.curIndex]
				uni.navigateTo({
					url: `./roomDetail?type=${curRoom}`
				})
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

			.title {
				margin-left: 200rpx;
			}
		}

		.select-box {
			width: 600rpx;
			// height: 820rpx;
			margin: 100rpx auto;
			padding-bottom: 50rpx;
			border-radius: 40rpx;
			background-color: #EBEBC2;

			.picker-box {
				display: flex;
				align-items: center;
				padding: 20rpx 30rpx;
			}

			.room-list {
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: space-around;
				padding: 0 20rpx;

				.room-item {
					flex: 25%;
					text-align: center;
					margin: 20rpx;
					padding: 10rpx 20rpx;
					border-radius: 24rpx;
					background-color: #A8C38E;
					border: 4rpx solid #A8C38E
				}

				.active {
					border: 4rpx solid #fff
				}
			}

			.btn-box {
				display: flex;
				align-items: center;
				justify-content: space-around;
				margin-top: 20rpx;

				.btn {
					height: 54rpx;
					line-height: 54rpx;
					text-align: center;
					background-color: #A8C38E;
				}

				.btn:nth-child(1) {
					width: 220rpx;
				}

				.btn:nth-child(2) {
					width: 300rpx;
				}
			}
		}
	}
</style>