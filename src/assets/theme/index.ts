const theme = {
  color: {
    primary: '#012345'
  },
  mixin: {
    hoverActive: `
      font-size: 18px;
      font-weight: 700;
      border-radius: 8px;
      padding: 6px 8px;
      &:hover,
      &.active {
        color: #fff;
        background-color: var(--theme-active-bg-color);
      }
    `
  }
}

export default theme
