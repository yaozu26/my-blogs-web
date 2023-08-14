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

    .replay {
      .img {
        width: 20px;
        height: 20px;
      }

      .text {
        margin-left: 4px;
      }
    }
  }
`
