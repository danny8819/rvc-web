import { defineStore } from 'pinia';
import {
  addDiscuss,
  updateDiscuss,
  discussList,
  myDiscussList,
  selectDiscussList,
  tags,
  deleteDiscuss,
  discuss,
  like,
  collect,
  watch,
} from '@/api/discuss';
import { dataType } from 'element-plus/es/components/table-v2/src/common';

export const useArticleStore = defineStore('article', {
  state: () => ({
    data: {
      pageDiscussList: [],
      did: '',
      avatar: '',
      nickname: '',
      createDate: '',
      collectNum: 0,
      commentNum: 0,
      title: '',
      cover: '',
      content: '',
      tagId: '',
      show: 1,
      tags: [],
    },
  }),
  actions: {
    async discussListData(params: object) {
      try {
        const res = await discussList(params);
        this.data.pageDiscussList = res.data.pageDiscussList;
      } catch (error) {
        console.log('error: ', error);
      }
    },
    async discussData(params: object) {
      try {
        const res = await discuss(params);
        this.data = res.data;
      } catch (error) {
        console.log('error: ', error);
      }
    },
    async tagsData(params: object) {
      try {
        const res = await tags(params);
        this.data.tags = res.data.tags;
      } catch (error) {
        console.log('error: ', error);
      }
    },
  },
});
