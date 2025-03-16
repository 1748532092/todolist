<template>
	<view class="container">
		<view class="cus-header" :style="{'min-height': navBarHeight + 'px', 'padding-top': statusBarHeight + 'px'}">
			<image class="icon" src="/static/home/icon_back.png" mode="" @click="handleBack"></image>
			<view class="header">添加新事项</view>
		</view>

		<view class="main">
			<view class="item-title">
				<view>这个事情叫什么</view>
				<view>常用</view>
			</view>
			<view class="add-input-box" :style="{'background-color': curColor}">
				<input class="uni-input" v-model="inputText" focus placeholder="在这里输入" />
				<view class="set-box" @click="handleFinish">
					<text> √ </text>
					<text> 设置</text>
				</view>
			</view>
			<view class="color-choose">
				<view :class="[ curColor === item ? 'color-active': '','color']" v-for="(item, index) in colorList"
					:key="index" :style="{'background-color': item}" @click="handleColor(item)"></view>
			</view>
			<view class="check-goal">
				<view>打卡目标</view>
				<view class="right">
					<view class="right-item" :style="{'background-color': checkGoal === 0 ? curColor : ''}"
						@click="handleChangeGoal(0)">单次打卡</view>
					<view class="right-item" :style="{'background-color': checkGoal === 1 ? curColor : ''}"
						@click="handleChangeGoal(1)">统计打卡</view>
				</view>
			</view>
			<view class="check-fre">
				<view>打卡频率</view>
				<view class="right">
					<view class="right-item" :style="{'background-color': checkFre === index ? curColor : ''}"
						@click="handleChangeFre(index)" v-for="(item, index) in cycleList" :key="index">{{item}}</view>
				</view>
			</view>
			<view class="week">
				<view class="week-item" :style="{'background-color': curColor}" v-for="(item, index) in weekList"
					:key="index">{{item}}</view>
			</view>
			<view class="start-date">
				<view>开始日期</view>
				<view class="date">
					<view class="date-item">
						今天
					</view>
					<view class="date-item">
						自定义
					</view>
				</view>
			</view>
			<view style="margin: 20rpx 0">休息时间</view>
			<view class="break">
				<view class="break-item" :style="{'background-color': curColor}" v-for="(item, index) in breakList"
					:key="index">{{item}}</view>
			</view>
			<view style="margin: 20rpx 0;font-size: 28rpx;">设置提醒</view>
			<view class="add-btn">
				＋点击添加提醒时间
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
				inputText: '',
				colorList: ['#F36257', '#F7A078', '#FAE75B', '#48C975', '#8FE0CA', '#4AA5D2', '#D89CB7', '#F36259',
					'#F78778', '#FAD85B', '#A3DF7E', '#87B38F', '#B9E6F0', '#CAABD7', '#A26157'
				],
				curColor: '#F36257',
				checkGoal: 0,
				checkFre: 0,
				cycleList: ['固定', '按周', '按月', '待办'],
				weekList: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
				weekIndex: 0,
				breakList: ['10分钟', '20分钟', '30分钟', '自定义']
			}
		},
		methods: {
			handleBack() {
				uni.navigateBack({})
			},
			handleFinish() {

			},
			handleColor(val) {
				this.curColor = val
			},
			handleChangeGoal(val) {
				this.checkGoal = val
			},
			handleChangeFre(val) {
				this.checkFre = val
			}
		},
	}
</script>

<style scoped lang="scss">
	.container {
		min-height: 100vh;
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

			.header {
				font-size: 34rpx;
				margin-left: 160rpx;
			}
		}

		.main {
			padding: 40rpx;

			.item-title {
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 28rpx;
			}

			.add-input-box {
				height: 150rpx;
				display: flex;
				align-items: center;
				border-radius: 52rpx;
				justify-content: space-around;
				border-radius: 30rpx;
				background-color: red;
				margin: 20rpx 0;

				.uni-input {
					color: #000;
				}

				.set-box {
					color: #fff;
				}
			}

			.color-choose {
				display: flex;
				flex-wrap: wrap;
				align-items: center;

				.color {
					width: 68rpx;
					height: 68rpx;
					border-radius: 50%;
					margin: 10rpx 8rpx;
				}
				
				.color:nth-child(8n) {
					margin-right: 0 !important;
				}
				

				.color-active {
					border: 2rpx solid #000;
				}
			}

			.check-goal,
			.check-fre,
			.break {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin: 20rpx 0;
			}

			.right {
				display: flex;
				align-items: center;
				justify-content: space-around;
				font-size: 24rpx;
				border-radius: 12rpx;
				background-color: #F8F8E9;
				padding: 10rpx;

				.right-item {
					padding: 10rpx 16rpx;
					border-radius: 12rpx;
				}
			}

			.week {
				display: flex;
				align-items: center;
				justify-content: space-between;
				overflow: scroll;
				white-space: nowrap;

				.week-item {
					width: 92rpx;
					height: 98rpx;
					text-align: center;
					line-height: 98rpx;
					border-radius: 32rpx;
					border: 4rpx solid #000;
					padding: 0 20rpx;
					margin-right: 30rpx;
				}

				/* 隐藏滚动条 */
				ul::-webkit-scrollbar {
					display: none;
				}
			}

			.start-date {
				margin: 20rpx 0;

				.date {
					display: flex;
					align-items: center;
					justify-content: flex-end;
					margin: 20rpx 0;

					.date-item {
						border-radius: 20rpx;
						padding: 10rpx 20rpx;
						background-color: #fff;
						margin-right: 20rpx;
					}
				}
			}

			.break {
				.break-item {
					border-radius: 32rpx;
					border: 4rpx solid #000;
					padding: 20rpx 10rpx;
				}
			}
			.add-btn {
				width: 100%;
				text-align: center;
				background-color: #F8F8E9;
				    padding: 30rpx 0;
				    border-radius: 30rpx;
			}
		}

	}
</style>