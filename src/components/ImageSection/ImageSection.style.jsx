import styled from 'styled-components';
import { Paragraph, Picture } from '../../globalStyle';
import SquarePattern from '../../assets/images/shared/pattern-square.svg';
export const StyledSection = styled.section`
  max-width: 1110px;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 168px;
  &:before {
    content: url('${SquarePattern}');
    position: absolute;
    left: -127.5px;
    top: 950px;
    @media only screen and (max-width: 1400px) {
      display: none;
    }
  }
  @media only screen and (max-width: 1110px) {
    max-width: 100%;
    flex-direction: column;
    row-gap: 72px;
    margin-bottom: 142px;
  }
  @media only screen and (max-width: 768px) {
    margin-bottom: 111px;
    row-gap: 75px;
  }
`;
export const SectionImages = styled.div`
  display: flex;
  column-gap: 30px;
  @media only screen and (max-width: 1110px) {
    margin-inline: 39px;
    margin
  }
  @media only screen and (max-width: 768px) {
    column-gap: 24px;
    margin-right: 24px;
    margin-left: -24px;
  }
`;
export const SectionImage = styled.img``;
export const OveralyedImage = styled(Picture)`
  &:after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: #F16718;
    mix-blend-mode: multiply;
  }
`;
export const SectionText = styled.div`
  max-width: 255px;
  @media only screen and (max-width: 1110px) {
    max-width: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 39px;
    padding-right: 39px;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;
export const SectionParagraph = styled(Paragraph)`
  font-size: 16px;
  line-height: 26px;
  margin-top: 27px;
  @media only screen and (max-width: 1110px) {
    max-width: 398px;
    margin-top: 0;
  }
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    margin-top: 24px;
  }
`;
