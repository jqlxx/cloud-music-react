import styled from 'styled-components';
import style from '../../assets/global-style';

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  .before {
    position: absolute;
    width: 100%;
    height: 100px;
    top: -5px;
    background: ${style["theme-color"]};
  }
  .slider-wrapper {
    position: relative;
    width: 96%;
    margin: 0 auto;
    border-radius: 6px;
    overflow: hidden;
  }
`