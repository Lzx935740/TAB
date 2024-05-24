import request from '@/utils/request'
import { useUserKeyStore } from '@/stores/index'
const userKey = useUserKeyStore()
// 每日一言
export const getWordOfTheDayService = () => {
  return request({
    method: 'get',
    url:
      'https://www.mxnzp.com/api/daily_word/recommend?app_id=' +
      userKey.ROLL_APP_ID +
      '&app_secret=' +
      userKey.ROLL_APP_SECRET
  })
}

// 获取新闻标题
export const getNewTitleListService = (typeid: number, page: number) => {
  return request({
    method: 'get',
    url: `https://www.mxnzp.com/api/news/list/v2?typeId=${typeid}&page=${page}&app_id=${userKey.ROLL_APP_ID}&app_secret=${userKey.ROLL_APP_SECRET}`
  })
}

// 获取新闻详情
export const getNewsParticularService = (newsid: number) => {
  return request({
    method: 'get',
    url: `https://www.mxnzp.com/api/news/details/v2?newsId=${newsid}&app_id=${userKey.ROLL_APP_ID}&app_secret=${userKey.ROLL_APP_SECRET}`
  })
}

// 获取日期和时间
export const getDateTimeService = () => {
  return request({
    method: 'get',
    url: 'https://quan.suning.com/getSysTime.do'
  })
}
