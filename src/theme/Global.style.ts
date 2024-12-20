import '@fontsource/quicksand/300.css';
import '@fontsource/quicksand/400.css';
import '@fontsource/quicksand/500.css';
import '@fontsource/quicksand/600.css';
import '@fontsource/quicksand/700.css';

import '@fontsource/jetbrains-mono';
import '@fontsource/days-one';

import { createGlobalStyle } from 'styled-components';
import { getColor, getFontWeight } from './themeUtils';

export const GlobalStyle = createGlobalStyle`
    /* CSS RESET START */
    /*
    1. Use a more-intuitive box-sizing model.
    */
    *, *::before, *::after {
        box-sizing: border-box;
    }

    /*
    2. Remove default margin
    */
    * {
        margin: 0;
        padding: 0;
    }

    /*
    3. Allow percentage-based heights in the application
    */
    html, body {
        height: 100%;
    }

    /*
    Typographic tweaks!
    4. Add accessible line-height
    5. Improve text rendering
    */
    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    /*
    6. Improve media defaults
    */
    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

    /*
    7. Remove built-in form typography styles
    */
    input, button, textarea, select {
        font: inherit;
    }

    /*
    8. Avoid text overflows
    */
    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }

    /*
    9. Create a root stacking context
    */
    #root, #__next {
        isolation: isolate;
    }
    /* CSS RESET END */

    body {
        font-family: "Quicksand", sans-serif;
        background-color: ${getColor('white')};
        color: ${getColor('black')};
    }
    
    h1, h2, h3, h4, h5, h6 {
        font-family: "Days One", sans-serif;
        font-weight: ${getFontWeight('medium')};
    }
`;
