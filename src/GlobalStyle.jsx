import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

  :root {
    /* Cores de Marcas */
    --primary: #03588C;
    --secondary: #B5DBE8;
    --tertiary: #048ABF;
    --background: #F0F2F0;
    --fonts: #012E40;

    /* Cores de Estados */
    --info: #2F80ED;
    --success: #27AE60;
    --warning: #E2B93B;
    --error: #EB5757;

    /* Tons de cinza */
    --gray-1: #333333;
    --gray-2: #4F4F4F;
    --gray-3: #828282;
    --gray-4: #BDBDBD;
    --gray-5: #E0E0E0;

    /* Tipografia */
      --font: 'Inter', sans-serif;
    }
    
/* Reset de estilo */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
/* Estiilos padrões */
  body {
    background-color: var(--background);
    font-family: var(--font);
    color: var(--fonts);
  }

   a {
    text-decoration: none;
    color: var(--info);
  }

  a:hover {
    cursor: pointer;
    color: var(--tertiary);
  }
`;

export default GlobalStyles;
