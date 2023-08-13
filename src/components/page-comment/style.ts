import { styled } from 'styled-components'

export const CommentWrapper = styled.div`
  padding: 20px 40px;
  /* 组件样式 */
  .ant-input-data-count {
    bottom: 4px;
  }

  margin-top: 20px;
  background-color: #fff;
  border-radius: 8px;

  .write {
    margin: 20px 40px 0 80px;
    padding-bottom: 20px;

    .bottom {
      display: flex;
      justify-content: flex-end;
      margin-top: 10px;
    }
  }

  .all-comments {
    padding-left: 80px;

    li {
      margin-top: 30px;

      .info {
        margin: 10px 0;
        font-size: 16px;
      }

      .content {
        margin: 20px 0;
      }

      .replay {
        span {
          margin-left: 4px;
        }
      }
    }
  }
`
