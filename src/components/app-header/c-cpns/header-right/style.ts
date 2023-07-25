import { styled } from 'styled-components'

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;

  .github {
    padding-left: 20px;
  }

  .top-head {
    display: flex;
    justify-content: flex-end;
    width: 64px;
    margin-left: 20px;
    font-weight: 700;

    cursor: pointer;
    .login {
      padding: 8px 16px;
      color: var(--theme-color);
      border-radius: 8px;
      &:hover {
        color: var(--theme-active-text-color);
        background-color: var(--theme-active-bg-color);
      }
    }
  }
`
