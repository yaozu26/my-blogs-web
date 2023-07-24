import { styled } from 'styled-components'

export const CenterWrapper = styled.div`
  display: flex;
  a {
    display: flex;
    align-items: center;
    margin: 0 5px;
    padding: 6px 8px;
    font-size: 18px;
    font-weight: 700;
    border-radius: 8px;

    &:hover,
    &.active {
      color: #fff;
      background-color: var(--theme-active-bg-color);
    }

    .text {
      margin-left: 4px;
    }
  }
`
