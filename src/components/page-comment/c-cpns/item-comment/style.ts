import { styled } from 'styled-components'

export const ItemCommentWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;

  .left {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }

  .right {
    flex: 1;

    .top {
      display: flex;
      justify-content: space-between;

      .name {
        font-size: 16px;
        font-weight: 500;
      }
    }

    .content {
      margin: 16px 0;
    }

    .action-box {
      display: flex;
      justify-content: space-between;

      .reply {
        display: flex;
        align-items: center;
        cursor: pointer;
        &:hover {
          color: #1e80ff;

          .icon-reply {
            fill: #1e80ff;
          }
        }

        .icon-reply {
          fill: #aaa;
        }

        .text {
          margin-left: 4px;
        }
      }

      .delete {
        cursor: pointer;

        &:hover {
          color: red;
        }
      }
    }

    .active-box {
      position: relative;
      z-index: 9999;
      margin-top: 20px;
    }

    .cover {
      position: fixed;
      z-index: 9998;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }
`
