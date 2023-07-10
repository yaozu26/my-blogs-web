import { styled } from 'styled-components'

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 35px;
  border-bottom: 1px solid #6669;
  background-color: var(--theme-bg-color);
`

export const LeftWrapper = styled.div`
  display: flex;
  .logo {
    padding: 0 20px;
    font-size: 18px;
    font-weight: 700;
    color: var(--theme-color);
  }
`

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
`
