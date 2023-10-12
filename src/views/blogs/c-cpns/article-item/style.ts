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
  }

  .title {
    margin: 8px 0;
    font-weight: 600;
    font-size: 18px;
  }

  .desc {
    height: 22px;
    line-height: 22px;
    color: #8a919f;
  }
`
