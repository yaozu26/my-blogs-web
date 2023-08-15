import { styled } from 'styled-components'

export const WriteCommentWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 16px;
  padding-bottom: 20px;

  /* 组件样式 */
  .ant-input-data-count {
    bottom: 4px;
  }

  .left {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }

  .right {
    flex: 1;
  }

  .bottom {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }
`
