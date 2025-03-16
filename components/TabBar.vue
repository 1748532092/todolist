<template>
	<!-- tabbar -->
	<view class="tabbar-container">
		<view class="tabbar-box">
			<view class="tabbar-item" v-for="(item, index) in tabbarList" :key="index" :class="[currentTabIndex === index ? 'tabbar-item-active' : '']" @click="changeTab(index)">
				<image class="icon" :src="item.activeIconPath" v-if="currentTabIndex === index"></image>
				<image class="icon" :src="item.iconPath" v-else></image>
				<view class="text">{{ item.text }}</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tabbarList: [],
		}
	},
	computed: {
		currentTabIndex() {
			return this.$store.state.currentTabIndex
		}
	},
	mounted() {
		this.tabbarList = [
			{
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
		}
	},
	methods: {
		// 切换tab
		changeTab(index) {
			const that = this
			uni.redirectTo({
				url: that.tabbarList[index].url,
				success() {
					that.$store.commit('CHANGE_TAB', index)
				},
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
	height: 154rpx;
	position: fixed;
	bottom: 0;
	background: #a8c38e;
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
				color: #2c2c2c !important;
			}
		}
	}
}
</style>
