import { createGlobalStyle } from "styled-components";
import { Josefin_Sans } from 'next/font/google'

const josefinSans = Josefin_Sans({
    weight: ["400", "700"],
    subsets: ['latin']
})

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${josefinSans.style.fontFamily};
    }

    body {
        background-color: ${({theme}) => theme.colors.background};
    }
`