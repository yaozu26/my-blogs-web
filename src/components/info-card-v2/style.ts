import styled from 'styled-components'

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  padding: 10px;
  background-color: #55ae74;
  border-radius: 8px;

  .left {
    width: 100px;
    img {
      border-radius: 4px;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
    color: #fff;

    .top {
      margin-bottom: 10px;
    }
  }
`
