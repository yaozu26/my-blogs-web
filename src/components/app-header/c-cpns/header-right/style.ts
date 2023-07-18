import { styled } from 'styled-components'

interface IRight {
  mode: string
}

export const RightWrapper = styled.div<IRight>`
  display: flex;
  align-items: center;

  .titles {
    display: flex;
    a {
      height: 60px;
      line-height: 60px;
      margin: 0 5px;
      padding: 0 20px;
      font-weight: 700;
      color: var(--theme-color);

      &:hover,
      &.active {
        color: green;
      }
    }
  }

  .appearance {
    margin-left: 10px;

    .switch {
      position: relative;
      display: flex;
      width: 40px;
      height: 20px;
      border: 2px solid var(--theme-color);
      border-radius: 12px;
      background-color: ${(props) => (props.mode === 'sun' ? '#f1f1f1' : '#4448')};
      cursor: pointer;

      .icon {
        position: absolute;
        top: 50%;
        left: ${(props) => (props.mode === 'sun' ? '0' : '20px')};
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: var(--theme-primary-color);
        transition: all 0.3s;
      }
    }
  }

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
        color: #fff;
        background-color: var(--theme-hover-bg-color);
      }
    }
  }
`
