import { css } from '@emotion/css'

export const layoutCss = css`
  width: 80rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  border-left: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  .resume-header {
    display:flex; 
    .header-tabs {
      width: 10rem;
      border: 1px solid var(--shadow-color);
      box-shadow: 1px 1px 3px var(--shadow-color);
      border-radius: 25px;
    }
    #my-avatar{
      transform: translate3d(-0.222222rem, 5rem, 0px) scale(1.5);
    }
  }
  .main-container{
    min-width: 1280px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
