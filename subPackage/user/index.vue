<template>
	<view class="container">
		<view class="cus-header" :style="{'min-height': navBarHeight + 'px', 'padding-top': statusBarHeight + 'px'}">
			<text>更多More</text>
		</view>

		<view class="module">
			<view class="item" v-for="(item, index) in moduleOne" :key="index">
				<view class="left">
					<image class="icon" :src="item.iconPath"></image>
					<text class="item-text">{{item.text}}</text>
				</view>
				<view class="right">
					<text class="" v-if="index === 0">
						已登录
					</text>
					<text>></text>
				</view>
			</view>
		</view>

		<view class="module">
			<view class="item" v-for="(item, index) in moduleTwo" :key="index">
				<view class="left">
					<image class="icon" :src="item.iconPath"></image>
					<text class="item-text">{{item.text}}</text>
				</view>
				<view class="right">
					<text>></text>
				</view>
			</view>
		</view>

		<view class="module">
			<view class="item" v-for="(item, index) in moduleThree" :key="index">
				<view class="left">
					<image class="icon" :src="item.iconPath"></image>
					<text class="item-text">{{item.text}}</text>
				</view>
				<view class="right">
					<text>></text>
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
				moduleOne: [{
						iconPath: '../static/user/icon_account.png',
						text: '账号',
					},
					{
						iconPath: '../static/user/icon_vip.png',
						text: 'VIP',
					},
					{
						iconPath: '../static/user/icon_upload.png',
						text: '备份/云同步',
					},
					{
						iconPath: '../static/user/icon_room.png',
						text: '自习室',
					}
				],
				moduleTwo: [{
						iconPath: '../static/user/icon_theme.png',
						text: '主题选择',
					},
					{
						iconPath: '../static/user/icon_switch.png',
						text: '触觉开关',
					},
					{
						iconPath: '../static/user/icon_clock.png',
						text: '时钟模式',
					},
					{
						iconPath: '../static/user/icon_music.png',
						text: '白噪音（背景音乐）',
					},
					{
						iconPath: '../static/user/icon_personalization.png',
						text: '个性化自定义',
					}
				],
				moduleThree: [{
						iconPath: '../static/user/icon_help.png',
						text: '使用帮助',
					},
					{
						iconPath: '../static/user/icon_wb.png',
						text: '我们的微博',
					},
					{
						iconPath: '../static/user/icon_wx.png',
						text: '微信公众号',
					},
					{
						iconPath: '../static/user/icon_problem.png',
						text: '常见问题/客服',
					},
					{
						iconPath: '../static/user/icon_share.png',
						text: '分享给你的朋友',
					}
				],
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		background-color: #EBEBC2;
		padding-bottom: 200rpx;

		.cus-header {
			font-size: 50rpx;
		}

		.module {
			width: 80vw;
			font-size: 30rpx;
			font-weight: bold;
			background-color: #fff;
			padding: 20rpx;
			border-radius: 40rpx;
			margin: 30rpx auto;

			.item {
				height: 80rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.left {
					display: flex;
					align-items: center;
					justify-content: center;

					.icon {
						width: 54rpx;
						height: 54rpx;
						margin-right: 30rpx;
					}

					.item-text {}
				}

			}
		}
	}
</style>