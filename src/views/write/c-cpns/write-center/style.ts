import { styled } from 'styled-components'

export const CenterWrapper = styled.div`
  width: 688px;
  margin-left: 330px;
  padding: 32px 64px 24px;
  border-radius: 4px;
  background-color: #fff;

  .head-title {
    border-bottom: 1px solid #e8e7e8;

    #txtTitle {
      width: 100%;
      min-height: 32px;
      font-size: 23px;
      font-weight: 600;
      color: #606266;
      border: none;

      &::-webkit-input-placeholder {
        color: #c0c4cc;
      }

      &:focus {
        outline: none;
      }
    }
  }

  .content {
    height: 100vh;
  }
`
