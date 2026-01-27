import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    COLORS: {
      BACKGROUND: string;
      PRINCIPAL: string;
      SECUNDARIA: string;
      BRANCO: string;
     
    };
    FONT_FAMILY: {
      REGULAR: string;
      BOLD: string;
    };
    FONT_SIZE: {
      SM: number;
      MD: number;
      LG: number;
      XL: number;
    };
  }
}

/* Alguns setups do TS com styled-components/native precisam desta augmentação também */
declare module "styled-components/native" {
  export interface DefaultTheme {
    COLORS: {
      BACKGROUND: string;
      PRINCIPAL: string;
      SECUNDARIA: string;
      BRANCO: string;
    };
    FONT_FAMILY: {
      REGULAR: string;
      BOLD: string;
    };
    FONT_SIZE: {
      SM: number;
      MD: number;
      LG: number;
      XL: number;
    };
  }
}