import { request } from "./request";

export function getGoodsListData(cid) {
	return request({
    url: "/goods/search",
    params:{
      cid:cid
    }
	});
}