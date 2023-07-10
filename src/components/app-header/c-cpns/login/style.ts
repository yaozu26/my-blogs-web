import { styled } from 'styled-components'

export const LoginWrapper = styled.div`
  margin-left: 20px;

  .btn {
    padding: 8px 16px;
    font-weight: 700;
    color: var(--theme-color);
    border-radius: 8px;

    &:hover {
      color: #fff;
      background-color: var(--theme-hover-bg-color);
    }
  }
`
