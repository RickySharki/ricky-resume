import { css } from '@emotion/css'

export const layoutCss = css`
  width: 80rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  border-left: 1px solid var(--font-color);
  border-right: 1px solid var(--font-color);
  .resume-header {
    display:flex; 
    .header-tabs {
      width: 10rem;
      border: 1px solid var(--shadow-color);
      box-shadow: 1px 1px 3px var(--shadow-color);
      border-radius: 25px;
    }
  }
`
