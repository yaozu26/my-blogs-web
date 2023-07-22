import { styled } from 'styled-components'

export const BottomWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 64px;
  border-top: 1px solid #e8e8e8;
  background-color: #fff;

  .box {
    display: flex;
    align-items: center;
    justify-content: end;
    width: 880px;
    height: 100%;
    margin: 0 auto;

    .issue {
      display: flex;
      align-items: center;
      width: 64px;
      height: 24px;
      padding: 8px 16px;
      border-radius: 24px;
      font-size: 16px;
      color: #fff;
      background-color: #fc5531;
      cursor: pointer;

      &:hover {
        background-color: #fc1944;
      }
    }
  }
`
