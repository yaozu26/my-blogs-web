import { styled } from 'styled-components'

export const WebBgWrapper = styled.div`
  /* 动画 */
  @keyframes tail {
    0% {
      width: 0;
      transform: translateX(0);
    }
    30% {
      width: 100px;
    }
    100% {
      width: 0;
      transform: translateX(300px);
    }
  }

  position: fixed;
  z-index: -999;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  .night {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotateZ(40deg);
  }
`
