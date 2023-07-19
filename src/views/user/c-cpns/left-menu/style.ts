import { styled } from 'styled-components'

interface IMenu {
  isCollapsed: boolean
}

export const MenuWrapper = styled.div`
  height: 100vh;
  background-color: #001529;
  transition: width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;

  .logo {
    display: flex;
    align-items: center;
    height: 28px;
    padding: 12px 10px 8px;

    .icon {
      height: 100%;
      margin-left: 6px;
    }

    .title {
      padding-left: 10px;
      font-size: 16px;
      color: #fff;
      white-space: nowrap;
    }
  }
`
