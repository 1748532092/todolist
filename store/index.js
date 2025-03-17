import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//实例store对象
const store = new Vuex.Store({
	state: {
		currentTabIndex: 0
	},
	mutations: {
		CHANGE_TAB(state, value) {
			state.currentTabIndex = value
		},
	}
})

//导出store对象
export default store
