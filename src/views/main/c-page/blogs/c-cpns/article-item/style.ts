import { styled } from 'styled-components'

export const ArticleItemWrapper = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid #e4e6eb;
  cursor: pointer;

  .top {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #8a919f;

    .line {
      padding: 0 8px;
      color: #e4e6eb;
    }

    .tags {
      .dot {
        margin: 0 4px;
        color: #666;
        font-weight: 500;
      }
    }
  }

  .title {
    margin: 8px 0;
    font-weight: 600;
  }
`
