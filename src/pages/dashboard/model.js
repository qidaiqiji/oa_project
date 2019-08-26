import router from 'umi/router';
// import { reqList } from './service';

export default {
  namespace: 'dashboard',
  state: {
    infoDetail: {
      businessList: [
        {
          id: 54,
          createBy: '韦洁',
          createTime: '2019-08-21 10:09:56',
          headImgUrl: '',
          tag: [{ name: '未读', bgColor: '#E6F7FF', borderColor: '#91D5FF', color: '#1890FF' }],
          title: '运营活动数据播报8.21',
        },
      ],
      department: '研发部门',
      headImgUrl: '',
      position: '前端开发',
      slogan: '抖擞精神，祝你开心每一天',
      toDoNum: '0',
      weekUnreadNum: '1',
    },
    departmentListMap: {},
    cardLoading: false,
  },
  effects: {},
  reducers: {
    updatePageReducer(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    unmountReducer() {
      return {};
    },
  },
};
