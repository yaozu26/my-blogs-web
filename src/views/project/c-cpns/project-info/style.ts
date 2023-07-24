import { styled } from 'styled-components'

export const InfoWrapper = styled.div`
  position: absolute;
  bottom: 50%;
  padding: 0 8%;
  width: 100%;
  transform: translateY(50%);
  color: var(--theme-text-color-v1);

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
      color: #ccc;
    }
  }

  .title {
    margin: 10px 0 8px;
    font-size: 2.5rem;
    line-height: 1.2;
    -webkit-line-clamp: 2;
  }
`
