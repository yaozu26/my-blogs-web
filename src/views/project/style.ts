import { styled } from 'styled-components'

export const ProjectWrapper = styled.div`
  .page-header {
    position: relative;
    height: 36rem;
    background-color: #49b1f5;
    background-image: url(${require('@/assets/img/project/project_bg.png')});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    transition: all 2s ease-in;

    &::before {
      position: absolute;
      width: 100%;
      height: 100%;
      content: '';
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: brightness(1.4) saturate(180%) blur(15px);
    }
  }

  .page-main {
    padding-top: 20px;
  }
`
