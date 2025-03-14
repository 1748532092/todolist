<script>
	export default {
		globalData: {
			navBarHeight: 0, // 导航栏高度
			statusBarHeight: 0 // 获取状态栏+导航栏的高度
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
			uni.getSystemInfo({
				success: (res) => {
					console.log(res, 'res')
					let menuButtonObject = uni.getMenuButtonBoundingClientRect();
					this.globalData.windowWidth = res.windowWidth
					this.globalData.windowHeight = res.windowHeight
					//导航栏高度=菜单按钮高度+（菜单按钮与顶部距离-状态栏高度）*2
					this.globalData.navBarHeight = menuButtonObject.height + (menuButtonObject.top - res
							.statusBarHeight) *
						2
					//状态栏高度
					this.globalData.statusBarHeight = res.statusBarHeight
					this.globalData.menuLeft = menuButtonObject.left
					this.globalData.bottom = res.safeAreaInsets.bottom
				},
				fail: (err) => {
					console.log(err, 'err')
				}
			})
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>