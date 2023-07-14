import { styled } from 'styled-components'

export const HomeWrapper = styled.div`
  padding-top: 20px;

  .content {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    .left {
      flex: 1;
    }

    .right {
      margin-left: 40px;
      width: 300px;
    }
  }
`
