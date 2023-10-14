import styled from 'styled-components'

export const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 10px 20px;
  height: 28px;
  background-color: #fff;
  border-radius: 8px;
  transition: all 500ms;
  &:hover {
    border-color: var(--theme-active-bg-color);
    box-shadow: 0 0 10px 1px var(--theme-active-bg-color);
  }

  .left {
    display: flex;
    align-items: center;

    .theme-list {
      display: flex;
      margin-left: 10px;
      .item {
        margin: 0 6px;
        cursor: pointer;
        ${(props) => props.theme.mixin.hoverActive}
      }
    }
  }
`
