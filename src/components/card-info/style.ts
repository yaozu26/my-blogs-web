import { styled } from 'styled-components'

export const CardInfoWrapper = styled.div`
  padding: 20px 24px;
  font-weight: 700;
  color: #fff;
  border-radius: 10px;
  background-color: var(--theme-bg-color-v2);

  .header {
    display: flex;

    .head {
      border-radius: 50%;
      overflow: hidden;

      img {
        width: 80px;
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-left: 20px;

      .welcome {
        padding: 6px 12px;
        font-size: 14px;
        border-radius: 4px;
        background-color: #fff3;
      }

      .name {
        font-size: 30px;
      }
    }
  }

  .desc {
    margin-top: 24px;

    .tags {
      line-height: 25px;
      margin: 16px 0;
    }

    .say {
      height: 100px;
    }
  }

  .message {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    padding: 10px 20px;
    border-radius: 20px;
    color: #fff;
    background-color: #fff7;
  }
`
