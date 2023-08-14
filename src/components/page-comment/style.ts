import { styled } from 'styled-components'

export const CommentWrapper = styled.div`
  padding: 20px 24px;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 8px;

  /* 组件样式 */
  .ant-input-data-count {
    bottom: 4px;
  }

  > .title {
    margin-left: 16px;
  }

  .write {
    margin-top: 20px;
    padding-bottom: 20px;

    .bottom {
      display: flex;
      justify-content: flex-end;
      margin-top: 10px;
    }
  }
`
