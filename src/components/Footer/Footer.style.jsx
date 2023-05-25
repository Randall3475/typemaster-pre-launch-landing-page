import styled from 'styled-components';
import { Paragraph } from '../../globalStyle';
export const StyledFooter = styled.footer`
  max-width: 1110px;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  padding-bottom: 39px;
  column-gap: 6px;
  @media only screen and (max-width: 1110px) {
    padding-bottom: 43px;
  }
  @media only screen and (max-width: 768px) {
    padding-bottom: 50px;
  }
`;
export const CompanyName = styled(Paragraph)`
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
`;
export const Trademark = styled(Paragraph)`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
`;
