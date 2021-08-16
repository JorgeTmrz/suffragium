import { createGlobalStyle } from "styled-components";
import { themeParam } from "./theme";

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }: themeParam) => theme.body};
        color: ${({ theme }: themeParam) => theme.text};
        font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
        transition: all 0.5s linear;
    }
`;
