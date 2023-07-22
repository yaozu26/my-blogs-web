import { styled } from 'styled-components'

export const TagsWrapper = styled.div`
  display: flex;
  align-items: center;

  .add {
    height: 28px;
    line-height: 28px;
    padding: 0 8px;
    border: 1px solid #e8e8ee;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background: rgba(38, 125, 204, 0.05);
      color: #267dcc;
      border-color: rgba(38, 125, 204, 0.2);
    }
  }
`
