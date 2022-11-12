import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      primaryHover: string;
      backgroundColor: string;
      primaryText: string;
      light: string;
      gray: string;
    };
  }
}
