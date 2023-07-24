import { styled } from 'styled-components'

export const TopMessageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  padding: 8px 20px;
  border: 1px solid #fff5;
  border-radius: 10px;
  background-color: var(--theme-write);
  cursor: pointer;
  transition: all 500ms;

  &:hover {
    border-color: var(--theme-active-bg-color);
    box-shadow: 0 0 10px 1px var(--theme-active-bg-color);
  }

  .text {
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    color: var(--theme-color);
  }
`
