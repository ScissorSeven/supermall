import { request } from "./request";

export function getDetail(goods_id) {
	return request({
		url: "/goods/detail",
		params: {
			goods_id: goods_id,
		},
	});
}
