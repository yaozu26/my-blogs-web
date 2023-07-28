import { styled } from 'styled-components'

export const InfoWrapper = styled.div`
  height: 36rem;
  background-color: #49b1f5;
  background: url(${require('@/assets/img/page_bg.png')}) center center no-repeat;
  background-size: cover;
  transition: all 2s ease-in;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 36rem;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: brightness(1.4) saturate(180%) blur(15px);
  }

  .cover {
    position: absolute;
    bottom: 50%;
    padding: 0 8%;
    width: 100%;
    transform: translateY(-50%);
    color: var(--theme-write);

    .top {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
      font-weight: 600;

      .theme {
        margin-right: 5px;
        padding: 6px 8px;
        border-radius: 4px;
        background: rgba(255, 255, 255, 0.35);
      }

      .tags {
        color: #fff;
      }
    }

    .title {
      margin: 10px 0 8px;
      font-size: 2.5rem;
      line-height: 1.2;
      -webkit-line-clamp: 2;
    }

    .meta {
      font-weight: 700;
      color: #9d7479;

      .icon {
        margin-right: 4px;
      }
    }
  }
`
