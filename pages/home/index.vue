<template>
	<view class="container">
		<view class="cus-header" :style="{'min-height': navBarHeight + 'px', 'padding-top': statusBarHeight + 'px'}">
			<image class="icon" src="/static/home/home_head.png" mode=""></image>
			<image class="icon" src="/static/home/icon_add.png" mode="" @click="handleAdd"></image>
		</view>

		<view class="todo-list-box">
			<view class="date-section">
				<view v-for="(dateItem, dateIndex) in curWeek" :key="dateIndex"
					:class="[ curIndex === dateIndex ? 'dateItem-active' : '', 'dateItem']" @click="handleSec(dateIndex)">
					<view :class="[curIndex === dateIndex ? 'date-active' : '', 'date']">
						{{dateIndex + 1 == curDay ? '今天' : dateIndex == curDay ? '明天' : dateItem.week }}
					</view>
					<view :class="[curIndex === dateIndex ? 'date-active' : '', 'date']">{{dateItem.date}}</view>
				</view>
				<view class="dateItem">
					<image class="icon_clock" src="/static/home/icon_clock.png"></image>
				</view>
			</view>
			<view class="daily-to-do">
				<view class="todo-list" :style="{ backgroundColor: colors[contentIndex]}"
					v-for="(contentItem, contentIndex) in todoList[curDay-1].content" :key="contentIndex">
					<view class="left">
						<checkbox style="transform:scale(0.8)" color="#000000" :checked="contentItem.isFinish" />
						<view class="spec-content">
							{{contentItem.specContent}}
						</view>
					</view>
					<view class="right">
						<view v-if="contentItem.completedDays">
							<view>{{contentItem.completedDays}}d</view>
							<view>完成天数</view>
						</view>
						<image class="icon-more" src="/static/home/icon_more.png" mode=""></image>
					</view>
				</view>
			</view>

		</view>

		<view class="bottom-menu">
			<view class="right-top">
				<image class="icon" src="/static/home/icon_message.png" @click="goMessage()"></image>
				<image class="icon" src="/static/home/icon_menu.png" mode=""></image>
			</view>
			<view class="menu-item" v-for="(item, index) in menuList" :key="index" @click="handleClick(index)">
				<image class="icon" :src="item.iconPath"></image>
				<view class="text">{{item.text}}</view>
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
				curWeek: [],
				curDay: 1,
				curIndex: 0,
				colors: ['#FFD7D7', '#99CCFF', '#FF9999', '#99FF99', '#CC99FF'], // 预定义颜色数组
				todoList: [{
						id: 1,
						content: [{
								isFinish: true,
								completedDays: 20,
								specContent: '早起☀'
							},
							{
								isFinish: false,
								completedDays: 15,
								specContent: '阅读30分钟📚'
							},
							{
								isFinish: true,
								completedDays: 0,
								specContent: '喝三杯温水❤'
							},
							{
								isFinish: false,
								completedDays: 176,
								specContent: '蹲起20个'
							},
							{
								isFinish: true,
								completedDays: 0,
								specContent: '午休15分钟💤'
							}
						]
					},
					{
						id: 2,
						content: [{
							isFinish: false,
							completedDays: 15,
							specContent: '阅读30分钟📚'
						}]
					},
					{
						id: 3,
						content: [{
								isFinish: true,
								completedDays: 20,
								specContent: '早起☀'
							},
							{
								isFinish: false,
								completedDays: 15,
								specContent: '阅读30分钟📚'
							},
							{
								isFinish: false,
								completedDays: 0,
								specContent: '喝三杯温水❤'
							},
							{
								isFinish: true,
								completedDays: 176,
								specContent: '蹲起20个'
							},
							{
								isFinish: false,
								completedDays: 0,
								specContent: '午休15分钟💤'
							}
						]
					},
					{
						id: 4,
						content: [{
								isFinish: true,
								completedDays: 20,
								specContent: '试卷两份'
							},
							{
								isFinish: false,
								completedDays: 14,
								specContent: '阅读30分钟📚'
							},
							{
								isFinish: false,
								completedDays: 6,
								specContent: '慢跑30分钟'
							},
							{
								isFinish: true,
								completedDays: 0,
								specContent: '仰卧起坐100个'
							}
						]
					},
					{
						id: 4,
						content: [{
							isFinish: false,
							completedDays: 15,
							specContent: '阅读30分钟📚'
						}]
					}
				],
				menuList: [{
						iconPath: '/static/home/icon_room.png',
						text: '自习室',
					},
					{
						iconPath: '/static/home/icon_clock_in.png',
						text: '打卡组',
					},
					{
						iconPath: '/static/home/icon_medal.png',
						text: '勋章',
					},
					{
						iconPath: '/static/home/icon_count.png',
						text: '统计',
					},
					{
						iconPath: '/static/home/icon_store.png',
						text: '商店',
					},
					{
						iconPath: '/static/home/icon_sleep.png',
						text: '睡眠',
					},
					{
						iconPath: '/static/home/icon_clock_active.png',
						text: '闹钟',
					},
					{
						iconPath: '/static/home/icon_todo_list.png',
						text: '待办清单',
					},

				]
			}
		},
		mounted() {
			this.getThisWeekDates()
		},
		methods: {
			handleAdd() {
				uni.navigateTo({
					url: '/pages/home/addNewItem'
				})
			},
			handleSec(val) {
				this.curIndex = val
			},
			getThisWeekDates() {
				const dates = []
				const today = new Date()
				const dayOfWeek = today.getDay() // 获取今天是本周的第几天（0-6，0 是周日 ）
				this.curDay = dayOfWeek
				this.curIndex = dayOfWeek - 1
				let startOfWeek = new Date(today) // 复制今天的日期
				const start = today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1)
				startOfWeek.setDate(today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1)); // 调整到本周的第一天（周一）
				for (let i = 0; i < 5; i++) {
					const currentDay = new Date(startOfWeek)
					currentDay.setDate(startOfWeek.getDate() + i)
					let week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
					const day = start + i
					const curDayOfWeek = currentDay.getDay()
					dates.push({
						week: week[curDayOfWeek],
						date: day,
					})
				}
				this.curWeek = dates
			},
			goMessage () {
				uni.navigateTo({
					url: '../../subPackage/message/index'
				})
			},
			handleClick(val) {
				console.log(val)
				if (val === 0) {
					uni.navigateTo({
						url: '../../subPackage/selfStudyRoomSelection/index'
					})
				} else if (val === 1) {
					uni.navigateTo({
						url: '/pages/home/checkGroup'
					})
				} else if (val === 2) {
					uni.navigateTo({
						url: '/pages/home/medalWall'
					})
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		background-color: #EBEBC2;

		.cus-header {
			padding-left: 20rpx;

			.icon {
				width: 76rpx;
				height: 76rpx;
				margin: 10rpx;
			}
		}

		.todo-list-box {
			height: 46vh;
			background-image: url('/static/home/todo_bg.png');
			background-size: 136% 124%;
			background-position: center;
			background-repeat: no-repeat;
			margin-bottom: 50rpx;

			.date-section {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				margin-bottom: 40rpx;
				padding: 20rpx 40rpx 0 40rpx;
				border-bottom: 8rpx solid #fff;

				.dateItem {
					width: 100%;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					margin-right: 4rpx;
					border-right: 8rpx solid #fff;

					.date {
						color: #BFBFBF;
						font-size: 32rpx;
					}

					.date:nth-child(2n) {
						margin-top: 4rpx;
					}

					.date-active {
						color: #fff;
					}

					.icon_clock {
						width: 70rpx;
						height: 70rpx;
					}

				}

				.dateItem-active {
					background-color: #ADB971;
				}

				.dateItem:nth-last-child(1) {
					border-right: none !important;
				}

				.today {
					color: white;
					background-color: #ADB971;
				}
			}

			.daily-to-do {
				display: flex;
				flex-wrap: wrap;
				justify-content: center;

				.todo-list {
					width: 440rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					border-radius: 40rpx;
					padding: 6rpx 40rpx;
					margin-bottom: 20rpx;

					.left {
						display: flex;
						align-items: center;
						justify-content: center;
					}

					.right {
						display: flex;
						align-items: center;
						font-size: 20rpx;

						.icon-more {
							width: 6rpx;
							height: 34rpx;
							margin-left: 20rpx;
						}
					}
				}
			}

		}

		.bottom-menu {
			// width: 100%;
			// height: 420rpx;
			position: relative;
			display: flex;
			align-items: center;
			justify-content: space-between;
			flex-wrap: wrap;
			background-color: #fff;
			padding: 30rpx 20rpx 0 20rpx;
			border-radius: 20rpx 20rpx 0 0;

			.right-top {
				position: absolute;
				top: -20rpx;
				right: 10rpx;

				.icon {
					width: 40rpx;
					height: 40rpx;
					margin-right: 20rpx;
				}
			}

			.menu-item {
				width: 150rpx;
				// height: 114rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				margin: 30rpx 0;

				.icon {
					width: 50rpx;
					height: 50rpx;
				}

				.text {
					font-size: 26rpx;
					color: #BFBFBF;
					margin-top: 10rpx;
					// text-align: center;
				}
			}
		}
	}
</style>