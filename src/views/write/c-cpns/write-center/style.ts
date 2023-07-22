import { styled } from 'styled-components'

interface ICenter {
  height: number
}

export const CenterWrapper = styled.div<ICenter>`
  padding: 32px 64px 24px;
  border-radius: 4px;
  background-color: #fff;

  .txtTitle {
    width: 100%;

    color: #606266;
    border: none;

    &::-webkit-input-placeholder {
      color: #c0c4cc;
    }

    &:focus {
      outline: none;
    }
  }

  .head-title {
    border-bottom: 1px solid #e8e7e8;

    .title {
      max-height: 32px;
      font-size: 23px;
      font-weight: 600;
    }
  }

  .content {
    margin-top: 20px;

    .text {
      line-height: 26px;
      height: ${(props) => props.height}px;
    }
  }
`
