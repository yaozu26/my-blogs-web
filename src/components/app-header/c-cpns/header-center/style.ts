import { styled } from 'styled-components'

export const CenterWrapper = styled.div`
  display: flex;
  a {
    display: flex;
    align-items: center;
    margin: 0 5px;
    padding: 6px 8px;
    font-weight: 700;
    color: var(--theme-color);
    border-radius: 8px;

    &:hover,
    &.active {
      color: var(--theme-text-color-v1);
      background-color: var(--theme-hover-bg-color);
    }

    .text {
      margin-left: 4px;
    }
  }
`
