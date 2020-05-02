import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      color1: string;
      color2: string;
      color3: string;
      color4: string;
      color5: string;
    };
    sizes: {
      containerWidth: string;
    };
    breakPoints: {
      tablet: string;
      mobile: string;
    };
  }
}
