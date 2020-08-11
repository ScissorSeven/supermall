import {request} from "./request";

export function getHomeSwiperData() {
  return request({
    url: '/home/swiperdata'
  })
}

export function getCatitems() {
	return request({
		url: "/home/catitems",
	});
}

export function getTabcontent() {
	return request({
		url: "/home/floordata",
	});  
}
