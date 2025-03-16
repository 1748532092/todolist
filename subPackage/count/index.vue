<template>
	<view class="container">
		<view class="cus-header" :style="{'min-height': navBarHeight + 'px', 'padding-top': statusBarHeight + 'px'}">
			<text>统计</text>
		</view>

		<view class="filter">
			<view :class="[curIndex == index ? 'filter-item-active' : '','filter-item']"
				v-for="(item, index) in filterList" :key="index" @click="handleChange(index)">{{item}}</view>
		</view>

		<view class="cur-date">
			<image class="icon" src="../static/count/icon_arrow.png" mode="" @click="handleChange(curIndex - 1)"></image>
			<view>{{curDate}}</view>
			<image class="icon_2" src="../static/count/icon_arrow.png" mode="" @click="handleChange(curIndex + 1)"></image>
		</view>

		<view class="acc-data">
			<view class="acc-item">
				<view class="acc-title">累计专注时常</view>
				<view>
					<text
						class="spec-data">{{curIndex === 0 ? dayObj.accFocusTimeHour : weekObj.accFocusTimeHour}}</text>
					<text>小时</text>
					<text
						class="spec-data">{{curIndex === 0 ? dayObj.accFocusTimeMinute : weekObj.accFocusTimeMinute}}</text>
					<text>分钟</text>
				</view>
			</view>
			<view class="acc-item">
				<view class="acc-title">累计次数</view>
				<view class="">
					<text class="spec-data">{{curIndex === 0 ? dayObj.number : weekObj.number}}</text>
				</view>
			</view>
			<view class="acc-item">
				<view class="acc-title">单次最长时长</view>
				<view class="">
					<text class="spec-data">{{curIndex === 0 ? dayObj.maxDurationHour : weekObj.maxDurationHour}}</text>
					<text>小时</text>
				</view>
			</view>
		</view>

		<view class="acc-for">
			<view class="title">占比</view>
			<view class="for-content">
				<view class="left">
					<view class="for-item">
						学习{{curIndex === 0 ? dayObj.study : weekObj.study}}
					</view>

					<view class="for-item">
						运动{{curIndex === 0 ? dayObj.motion : weekObj.motion}}
					</view>
					<view class="for-item" v-if="curIndex !== 0">
						生活{{curIndex === 0 ? dayObj.live : weekObj.live}}
					</view>
				</view>
				<image class="icon-pie" v-if="curIndex === 0" src="../static/count/icon_pie.png" mode=""></image>
				<image class="icon-pie" v-else src="../static/count/icon_pie (2).png" mode=""></image>
			</view>
		</view>

		<view class="list">
			<view class="list-item">
				<view class="list-left">
					<view class="title">平均专注时常</view>
					<image class="icon" src="../static/count/icon_clock.png" mode=""></image>
					<view class="title">
						<text class="spec-data">{{curIndex === 0 ? dayObj.aveTime : weekObj.aveTime}}</text>
						<text>分钟</text>
					</view>
				</view>
				<view class="list-right">
					<view class="title">连续专注时常</view>
					<image class="icon" src="../static/count/icon_tomato.png" mode=""></image>
					<view class="title">
						<text
							class="spec-data">{{curIndex === 0 ? dayObj.continuousTime : weekObj.continuousTime}}</text>
						<text>分钟</text>
					</view>
				</view>
			</view>
			<view class="list-item">
				<view class="list-left">
					<view class="title">最早专注时间</view>
					<image class="icon" src="../static/count/icon_sun.png" mode=""></image>
					<view class="title">
						<text class="spec-data">{{curIndex === 0 ? dayObj.earliestTime : weekObj.earliestTime}}</text>
					</view>
				</view>
				<view class="list-right">
					<view class="title">最晚专注时间</view>
					<image class="icon" src="../static/count/icon_moon.png" mode=""></image>
					<view class="title">
						<text class="spec-data">{{curIndex === 0 ? dayObj.latestTime : weekObj.latestTime}}</text>
					</view>
				</view>
			</view>
			<view class="list-item">
				<view class="list-left">
					<view class="title">最长去的自习室</view>
					<image class="icon" src="../static/count/icon_room.png" mode=""></image>
					<view class="title">
						<text class="spec-data">{{curIndex === 0 ? dayObj.oftenRoom : weekObj.oftenRoom}}</text>
					</view>
				</view>
				<view class="list-right">
					<view class="title">专注日记</view>
					<image class="icon" src="../static/count/icon_diary.png" mode=""></image>
					<view class="title">
						<text class="spec-data">{{curIndex === 0 ? dayObj.focusDiary : weekObj.focusDiary}}</text>
						<text>篇</text>
					</view>
				</view>
			</view>
		</view>

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
				curIndex: 0,
				curDate: '',
				filterList: ['按日', '按周', '按月', '按年'],
				dayObj: {
					accFocusTimeHour: '8',
					accFocusTimeMinute: '42',
					number: '4',
					maxDurationHour: '3',
					maxDurationMinute: '5',
					study: '82%',
					motion: '18%',
					aveTime: '45',
					continuousTime: '63',
					earliestTime: '7:40',
					latestTime: '23:30',
					oftenRoom: '大学生6班',
					focusDiary: '6'
				},
				weekObj: {
					accFocusTimeHour: '50',
					accFocusTimeMinute: '12',
					number: '32',
					maxDurationHour: '5',
					maxDurationMinute: '9',
					study: '82%',
					motion: '11%',
					live: '7%',
					aveTime: '50',
					continuousTime: '90',
					earliestTime: '7:40',
					latestTime: '23:30',
					oftenRoom: '大学生6班',
					focusDiary: '18'
				},
			}
		},
		mounted() {
			this.getCurDate()
		},
		methods: {
			handleChange(val) {
				if (val < 0) {
					this.curIndex = 3
				} else if (val > 3) {
					this.curIndex = 0
				} else {
					this.curIndex = val
				}
				this.getCurDate()
			},
			getCurDate() {
				const d = new Date()
				if (this.curIndex === 0) {
					this.curDate = (d.getMonth() + 1) + '月' + d.getDate() + '日'
				} else if (this.curIndex === 1) {
					const start = d.getDate() - d.getDay() + (d.getDay() === 0 ? -6 : 1)
					this.curDate = (d.getMonth() + 1) + '月' + start + '日 - ' + (d.getMonth() + 1) + '月' + (start + 7) +
						' 日'
				} else if (this.curIndex === 2) {
					this.curDate = d.getFullYear() + '年' + (d.getMonth() + 1) + '月'
				} else if (this.curIndex === 3) {
					this.curDate = d.getFullYear() + '年'
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		background-color: #EBEBC2;
		padding-bottom: 200rpx;

		.cus-header {
			color: #fff;
			font-size: 40rpx;
			font-weight: bold;
			padding-left: 20rpx;
		}

		.filter {
			width: 90vw;
			display: flex;
			align-items: center;
			justify-content: space-around;
			margin: 20px auto;
			background-color: #ADB971;
			border-radius: 20rpx;

			.filter-item,
			.filter-item-active {
				width: 166rpx;
				height: 54rpx;
				line-height: 54rpx;
				text-align: center;
				color: #A8C38E;
			}

			.filter-item-active {
				background-color: #fff !important;
				border-radius: 20rpx;
			}
		}

		.cur-date {
			width: 90vw;
			display: flex;
			align-items: center;
			justify-content: space-between;
			color: #A8C38E;
			margin: auto;

			.icon,
			.icon_2 {
				width: 50rpx;
				height: 50rpx;
			}

			.icon_2 {
				transform: rotate(180deg);
			}
		}

		.acc-data {
			width: 80vw;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			padding: 30rpx 40rpx;
			background-color: #fff;
			margin: 30rpx auto;
			border-radius: 30rpx;

			.acc-item {
				width: 50%;

				.acc-title {
					font-size: 30rpx;
				}
			}

			.acc-item:nth-child(3) {
				margin-top: 50rpx;
			}
		}

		.spec-data {
			font-size: 50rpx;
			color: #A8C38E;
			margin: 0 6rpx;
		}

		.acc-for {
			width: 80vw;
			font-size: 26rpx;
			background-color: #fff;
			padding: 30rpx 40rpx;
			margin: 30rpx auto;
			border-radius: 30rpx;

			.for-content {
				display: flex;
				align-items: center;
				justify-content: center;

				.for-item {
					display: flex;
					align-items: center;
				}

				.icon-pie {
					width: 236rpx;
					height: 236rpx;
					margin-left: 100rpx;
				}
			}
		}

		.list {
			margin: 0 40rpx;

			.list-item {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-top: 40rpx;

				.list-left,
				.list-right {
					padding: 30rpx 20rpx;
					background-color: #fff;
					border-radius: 32rpx;

					.title {
						font-size: 26rpx;
					}

					.icon {
						width: 160rpx;
						height: 160rpx;
						margin: 30rpx 50rpx;
					}
				}

				.list-right {}
			}
		}
	}
</style>