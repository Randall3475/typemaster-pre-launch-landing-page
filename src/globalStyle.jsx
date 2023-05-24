import { createGlobalStyle, styled, css } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }
  *, *::before, *::after {
  box-sizing: border-box;
  }
  html, body {
    font-family: 'Barlow', sans-serif;
    font-size: 10px;
    min-height: 100vh;
    overflow-x: hidden;
  }
  img, picture, svg, video {
    display: block;
    max-width: 100%;
  }
  input, textarea, button, select {
    font: inherit;
  }
`;
const Button = css`
  padding-block: 16px;
  padding-left: 26px;
  padding-right: 27px;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  text-transform: uppercase;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease-in-out;
  @media only screen and (max-width: 768px) {
    padding-inline: 14px;
    padding-block: 11px;
  }
`;
export const PrimaryButton = styled.a`
  ${Button}
  background: #F16718;
  color: #FFFFFF;
  &:hover {
    background: #FF9B62;
  }
`;
export const SecondaryButton = styled.a`
  ${Button}
  color: #162542;
  background: #E8EFF2;
  &:hover {
    background: #162542;
    color: #FFFFFF;
  }
`;
export const MainHeading = styled.h1`
  font-size: 56px;
  line-height: 56px;
  text-transform: uppercase;
  color: #162542;
  font-weight: 900;
  @media only screen and (max-width: 1110px) {
    font-size: 48px;
    line-height: 48px;
  }
`;
export const SectionHeading = styled.h2`
  font-size: 32px;
  line-height: 36px;
  text-transform: uppercase;
  color: #162542;
  font-weight: 900;
`;
export const CardHeading = styled.h3`
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;
  color: #162542;
  font-weight: 900;
`;
export const Paragraph = styled.p`
  font-weight: 500;
  color: #7B8BAD;
`;
export const Picture = styled.picture`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
`;
export const PictureSource = styled.source``;
export default GlobalStyle;
