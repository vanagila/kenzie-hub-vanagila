import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    /* primary-palette */
    --primary: #ff577f;
    --primary-focus: #ff427f;
    --primary-negative: #59323f
    
    /* grey scale palette */
    --grey-0: #f8f9fa
    --grey-1: #868e96;
    --grey-2: #343b41;
    --grey-3: #212529;
    --grey-4: #121214;

    /* feedback palette */
    --sucess: #3fe864;
    --negative: #e83f5b;
  }

  body, input, button, h1, h2, h3, h4, h5, h6, p, span {
    font-family: 'Inter', sans-serif;
  }

  body {
    background: var(--grey-4);
  }

`;
