import styled from 'styled-components';
import style from '../../assets/global-style';

export const ListWrapper = styled.div`
  .title{
    font-weight: 700;
    line-height: 60px;
    padding-left: 6px;
    color: ${style["font-color"]};
  }
`

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around
`

export const ListItem = styled.div`
  width: 30%;
  padding-bottom: 12px;
  .img_wrapper {
    position: relative;
    .play_count {
      position: absolute;
      right: 2px;
      top: 2px;
      font-size: ${style["font-size-s"]};
      color: ${style["font-color-light"]};
    }
    img {
      border-radius: 3px;
    }
  }
  .desc {
    overflow: hidden;
    line-height: 1.4;
    font-size: ${style["font-size-s"]};
    color: ${style["font-color-desc"]};
    margin-top: 2px;
  }
`