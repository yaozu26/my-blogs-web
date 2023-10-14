import { styled } from 'styled-components'

export const CenterWrapper = styled.div`
  display: flex;
  a {
    display: flex;
    align-items: center;
    margin: 0 5px;
    ${(props) => props.theme.mixin.hoverActive}

    .text {
      margin-left: 4px;
    }
  }
`
