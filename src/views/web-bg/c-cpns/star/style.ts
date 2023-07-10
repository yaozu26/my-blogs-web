import { styled } from 'styled-components'
import { ICoord } from '../../data'

interface IStar {
  coord: ICoord
}

export const StarWrapper = styled.div<IStar>`
  /* 动画 */
  @keyframes tail {
    0% {
      width: 0;
      transform: translateX(0);
    }
    30% {
      width: ${(props) => props.coord.width}px;
    }
    100% {
      opacity: 0;
      width: 0;
      transform: translateX(500px);
    }
  }

  position: absolute;
  left: ${(props) => props.coord.x}%;
  top: ${(props) => props.coord.y}%;
  height: 1px;
  background: linear-gradient(-45deg, #5f91ff, rgba(0, 0, 255, 0));
  animation: tail 3s ease-in-out 10;
  animation-delay: ${(props) => props.coord.delay}ms;
`
