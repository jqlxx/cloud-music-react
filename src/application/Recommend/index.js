import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getBannerList, getRecommendList } from './store/actionCreators'
import Slider from '../../components/swiper'
import { forceCheck } from 'react-lazyload';
import RecommendList from '../../components/list'
import Scroll from '../../baseUI/scroll/index';
import { Content } from './style'

function Recommend(props) {
  const { bannerList, recommendList } = props
  const { getBannerDataDispatch, getRecommendListDataDispatch } = props

  const bannerListJS = bannerList ? bannerList.toJS() : []
  const recommendListJS = recommendList ? recommendList.toJS() : []

  useEffect(() => {
    getBannerDataDispatch()
    getRecommendListDataDispatch()
  }, [])

  return(
    <Content>
      <Scroll onScroll={forceCheck}>
        <div>
          <Slider bannerList={bannerListJS}></Slider>
          <RecommendList recommendList={recommendListJS}></RecommendList>
        </div>
      </Scroll>
    </Content>
  )
}

const mapStateToProps = (state) => ({
  bannerList: state.getIn(['recommend', 'bannerList']),
  recommendList: state.getIn(['recommend', 'recommendList'])
})

const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(getBannerList())
    },
    getRecommendListDataDispatch() {
      dispatch(getRecommendList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend))