import { styled } from 'styled-components'

export const CommentWrapper = styled.div`
  padding: 20px 40px 20px 24px;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 8px;

  > .title {
    margin-left: 16px;
  }

  .write {
    display: flex;
    margin-top: 20px;
    margin-left: 16px;
    padding-bottom: 20px;

    .left {
      width: 40px;
      height: 40px;
      margin-right: 20px;
    }
  }
`
