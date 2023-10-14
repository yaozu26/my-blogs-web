import styled from 'styled-components'

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 24px;
  font-size: 16px;
  border-radius: 8px;
  background-color: #fff;

  .avatar {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    overflow: hidden;
  }

  .name {
    line-height: 50px;
    font-size: 24px;
    font-weight: 600;
  }

  .intro {
    line-height: 32px;
  }

  .content {
    display: flex;
    justify-content: space-around;
    width: 100%;

    .c-item {
      display: flex;
      flex-direction: column;
      align-items: center;

      &:hover {
        color: #49b1f5;
      }

      .count {
        margin-top: 10px;
      }
    }
  }
`
