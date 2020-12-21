import { CHANGE_BANNER, CHANGE_RECOMMEND_LIST } from './constants'
import { fromJS } from 'immutable'
import { getBannerRequest, getRecommendListRequest } from '../../../api/request'

const changeBannerList = (data) => ({
  type: CHANGE_BANNER,
  data: fromJS(data)
})

const changeRecommendList = (data) => ({
  type: CHANGE_RECOMMEND_LIST,
  data: fromJS(data)
})

export const getBannerList = () => {
  return (dispatch) => {
    getBannerRequest().then(data => {
      const action = changeBannerList(data.banners)
      dispatch(action)
    })
    .catch(() => {
      console.log("轮播图数据获取错误")
    })
  }
}

export const getRecommendList = () => {
  return (dispatch) => {
    getRecommendListRequest().then(data => {
      const action = changeRecommendList(data.result)
      dispatch(action)
    })
  }
}