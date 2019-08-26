import router from 'umi/router';
// import { reqList } from './service';

export default {
  namespace: 'createMessage',
  state: {
    departmentListMap: {
      2: '采购部门',
      3: '仓库部门',
      4: '人事行政部门',
      5: '设计部门',
      6: '市场部门',
      7: '销售部门',
      8: '研发部门',
      9: '运营部门',
      10: '财务部门',
    },
    departmentMap: {
      1: '全体人员',
      2: '采购部门',
      3: '仓库部门',
      4: '人事行政部门',
      5: '设计部门',
      6: '市场部门',
      7: '销售部门',
      8: '研发部门',
      9: '运营部门',
    },
    employeeMap: {
      1091: 'linda',
      1459: 'linda',
      1970: '欧纯',
      2147: 'garaaluo',
      3079: '肖云',
      3104: '李玉贤',
      3307: '曾龄仪(EE)',
    },
    statusMap: { 1: '未读', 2: '待执行', 3: '已读', 4: '我发布的' },
    fileList: [],
    currentData: {
      consigneeList: [],
      consigneeDepartmentList: [],
      title: '',
      content: '',
    },
    files: [],
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
      return {
        departmentListMap: {
          2: '采购部门',
          3: '仓库部门',
          4: '人事行政部门',
          5: '设计部门',
          6: '市场部门',
          7: '销售部门',
          8: '研发部门',
          9: '运营部门',
          10: '财务部门',
        },
        departmentMap: {
          1: '全体人员',
          2: '采购部门',
          3: '仓库部门',
          4: '人事行政部门',
          5: '设计部门',
          6: '市场部门',
          7: '销售部门',
          8: '研发部门',
          9: '运营部门',
        },
        employeeMap: {
          1091: 'linda',
          1459: 'linda',
          1970: '欧纯',
          2147: 'garaaluo',
          3079: '肖云',
          3104: '李玉贤',
          3307: '曾龄仪(EE)',
        },
        statusMap: { 1: '未读', 2: '待执行', 3: '已读', 4: '我发布的' },
        fileList: [],
        currentData: {
          consigneeList: [],
          consigneeDepartmentList: [],
          title: '',
          content: '',
        },
        files: [],
      };
    },
  },
};
