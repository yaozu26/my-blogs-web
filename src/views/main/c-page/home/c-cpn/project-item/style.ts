import { styled } from 'styled-components'

export const ItemWrapper = styled.div`
  width: 49%;
  margin-top: 10px;
  color: var(--theme-color);
  background-color: var(--theme-bg-clor-v1);
  border-radius: 10px;
  border: 1px solid #fff5;
  cursor: pointer;
  overflow: hidden;

  &:hover img {
    transform: scale(1.1);
  }

  .cover {
    height: 225px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      transition: transform 500ms linear;
    }
  }

  .info {
    padding: 20px 30px;

    .title {
      height: 56px;
      line-height: 28px;
      font-weight: 700;
      font-size: 20px;
    }

    .time {
      margin-top: 10px;
      font-weight: 700;
      font-size: 14px;
    }

    .tags {
      height: 32px;
      line-height: 32px;
      font-size: 13px;
      font-weight: 700;

      .tag {
        margin-right: 8px;

        .i {
          margin-right: 2px;
        }
      }
    }
  }
`
