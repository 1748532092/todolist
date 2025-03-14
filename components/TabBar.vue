<template>
	<!-- tabbar -->
	<view class="tabbar-container">
		<view class="tabbar-box">
			<view class="tabbar-item" v-for="(item, index) in tabbarList" :key="index"
				:class="[currentTabIndex===index ? 'tabbar-item-active':'']" @click="changeTab(index)">
				<image class="icon" :src="item.activeIconPath" v-if="currentTabIndex === index"></image>
				<image class="icon" :src="item.iconPath" v-else></image>
				<view class="text">{{item.text}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabbarList: [],
				state: 'initialized',
				currentTabIndex: 0
			}
		},
		computed: {
			// currentTabIndex() {
			// 	return this.$store.state.currentTabIndex
			// },
			// userStaffLogin() {
			// 	return this.$store.state.userInfo.ifAdmin === '0'
			// }
		},
		mounted() {
			console.log(this.$store, 'that.$store')
			this.tabbarList = [{
					text: '首页',
					iconPath: '../static/tabbar/icon_home.png',
					activeIconPath: '../static/tabbar/icon_home_active.png',
					url: '../../pages/home/index'
				},
				{
					text: '番茄钟',
					iconPath: '../static/tabbar/icon_time.png',
					activeIconPath: '../static/tabbar/icon_time_active.png',
					url: '../../subPackage/time/index'
				},
				{
					text: '统计',
					iconPath: '../static/tabbar/icon_count.png',
					activeIconPath: '../static/tabbar/icon_count_active.png',
					url: '../../subPackage/count/index'
				},
				{
					text: '我的',
					iconPath: '../static/tabbar/icon_user.png',
					activeIconPath: '../static/tabbar/icon_user_active.png',
					url: '../../subPackage/user/index'
				}
			]
		},
		watch: {
			currentTabIndex(val) {
				this.$forceUpdate()
			},
			// userStaffLogin(val) {
			// 	this.getTabList()
			// }
		},
		methods: {
			// 切换tab
			changeTab(index) {
				const that = this
				uni.redirectTo({
					url: this.tabbarList[index].url,
					// success() {
					// 	that.$store.commit('CHANGE_TAB', index)
					// },
					fail(err) {
						console.log(err)
					}
				})
			}

		}
	}
</script>
<style scoped lang="scss">
	view {
		box-sizing: border-box;
	}

	.tabbar-container {
		z-index: 1000;
		width: 100%;
		height: 180rpx;
		position: fixed;
		bottom: 0;
		background: #A8C38E;
		box-shadow: 0px -10px 40px 0px rgba(31, 40, 51, 0.05);
		padding-bottom: env(safe-area-inset-bottom);

		.tabbar-box {
			width: 100%;
			height: 100%;
			font-size: 26rpx;
			display: flex;
			align-items: center;
			justify-content: space-around;
			grid-template-columns: repeat(4, 25%);

			.tabbar-item {
				padding-top: 11rpx;
				width: 100%;
				// height: 93rpx;
				// line-height: 100rpx;
				display: flex;
				flex-direction: column;
				align-items: center;

				.icon {
					width: 50rpx;
					height: 50rpx;
				}

				.text {
					color: #707070;
					font-size: 26rpx;
					line-height: 26rpx;
					margin-top: 10rpx;
				}
			}

			.tabbar-item-active {
				.text {
					color: #2C2C2C !important;
				}
			}
		}
	}
</style>