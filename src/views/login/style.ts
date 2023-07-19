import { styled } from 'styled-components'
import loginBg from '@/assets/svg/login/login-bg.svg'

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff;
  background-image: url(${loginBg});

  .panel {
    color: #333;

    .title {
      font-size: 32px;
      padding-bottom: 20px;
      text-align: center;
    }

    /* 修改组件样式 */
    .ant-form {
      width: 330px;
      padding: 10px 10px 20px;
      border: 1px solid #3333;

      .ant-form-item {
        margin-top: 20px;

        /* 按钮样式 */
        .ant-btn {
          width: 100%;
        }
      }
    }

    .control {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      padding-left: 20px;
    }

    .switch {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      padding: 0 10px;

      .register {
        color: #1677ff;
        cursor: pointer;
      }
    }
  }
`
