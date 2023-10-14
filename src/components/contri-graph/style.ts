import styled from 'styled-components'

export const GraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  height: 170px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 8px;

  .graph {
    width: 100%;

    .graph__cells {
      height: 16px;
    }
  }

  .desc {
    line-height: 100%;
    margin-top: 10px;
    font-size: 14px;
    font-weight: 700;

    .text2 {
      margin-left: 4px;
      color: #999;
    }
  }
`
