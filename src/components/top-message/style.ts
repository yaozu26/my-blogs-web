import { styled } from 'styled-components'

export const TopMessageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 32px;
  padding: 8px 20px;
  border: 1px solid #fff5;
  border-radius: 10px;
  background-color: var(--theme-bg-clor-v1);

  .text {
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    color: var(--theme-color);
  }
`
