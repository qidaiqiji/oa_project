import { stringify } from 'qs';
import request from '@/utils/request';

// 活动上部基础信息

export async function reqList(params) {
  return request(
    `https://www.easy-mock.com/mock/5d5d1d646bbb6266a064d7ee/activity/goods-list?${stringify(
      params,
    )}`,
  );
}

//设置显示
export async function setGoodsActShow(params) {
  return request(`/operate/goods-activity/set-show`, {
    method: 'POST',
    body: {
      ...params,
    },
  });
}
