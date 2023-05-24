import styled from 'styled-components';
import { Paragraph } from '../../globalStyle';
export const StyledSection = styled.section`
  max-width: 1110px;
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;
  margin-bottom: 128px;
  @media only screen and (max-width: 1110px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 72px;
    padding-left: 39px;
    padding-right: 98px;
    margin-bottom: 142px;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding-left: 24px;
    padding-right: 24px;
    row-gap: 64px;
    margin-bottom: 96px;
  }
`;
export const Card = styled.article`
    @media only screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
`;
export const CardParagraph = styled(Paragraph)`
  font-size: 16px;
  line-height: 26px;
  margin-top: 24px;
`;
