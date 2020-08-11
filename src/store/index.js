import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

 const store = new Vuex.Store({
		state: {
			cartList: [],
			totalprice: 0,
			totalcommit: 0,
			isSelectAll: false,
			// isShow: false,
		},
		mutations: {
			//添加购物车
			addcart(state, products, duration=1500) {
				const has = state.cartList.find(
					(item, index) => item.cid == products.cid
				);
				if (has != undefined) {
					has.commit++;
				} else {
					state.cartList.push(products);
				}
				console.log(state.cartList);
				//显示toast
				// state.isShow = true;
				//在规定的时间后消失
				// setInterval(() => {
				// 	state.isShow = false;
				// }, duration);
			},
			//商品选中状态
			checked(state, cid) {
				const checked = state.cartList.find((item, index) => item.cid == cid);
				checked.checked = !checked.checked;
			},
			//总价
			total(state) {
				if (state.cartList.length > 0) {
					let filter = state.cartList.filter((item) => item.checked == true);
					state.totalprice = 0;
					state.totalcommit = 0;
					filter.forEach((item) => {
						state.totalprice += item.price * item.commit;
						state.totalcommit += item.commit;
					});
				}
			},
			//全选按钮因列表商品选中状态改变
			selectAll(state) {
				state.isSelectAll = !state.cartList.find(
					(item) => item.checked == false
				);
			},
			//全选按钮改变商品选中状态
			isSelect(state) {
				state.cartList.forEach((item) => {
					if (state.isSelectAll) {
						item.checked = true;
					} else {
						item.checked = false;
					}
					console.log(item);
				});
			},
			//商品减
			subtract(state, cid) {
				let commit = state.cartList.find((item, index) => item.cid == cid);
				commit.commit--;
			},
			//商品加
			plus(state, cid) {
				let commit = state.cartList.find((item, index) => item.cid == cid);
				commit.commit++;
			},
			//判断是否删除商品
			delete(state, cid){
				let find = state.cartList.find((item, index) => item.cid == cid);
				if(find.commit==0){
					var r = confirm("是否从购物车删除此商品");
					if(r){
						let del = state.cartList.findIndex((item, index) => item.cid == cid);
						state.cartList.splice(del, 1);
					}else{
						find.commit=1;
					}
				}
			}
		},
		actions: {},
		modules: {},
 });
export default store;