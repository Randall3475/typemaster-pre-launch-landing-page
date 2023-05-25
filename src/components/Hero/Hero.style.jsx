import styled from 'styled-components';
import { Paragraph } from '../../globalStyle';
import SquarePattern from '../../assets/images/shared/pattern-square.svg';
export const StyledHero = styled.section`
  max-width: 1110px;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  &:after {
    content: url('${SquarePattern}');
    position: absolute;
    right: -127.5px;
    top: 196px;
    @media only screen and (max-width: 1400px) {
      display: none;
    }
  }
  @media only screen and (max-width: 1110px) {
    max-width: 100%;
    padding-left: 39px;
    margin-bottom: 40px;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 24px;
    margin-bottom: 24px;
    row-gap: 64px;
  }
`;
export const HeroLeft = styled.article`
  max-width: 445px;
  margin-bottom: 78px;
  @media only screen and (max-width: 1110px) {
    max-width: 339px;
    margin-bottom: 0;
  }
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    padding-right: 24px;
  }
`;
export const HeroParagraph = styled(Paragraph)`
  font-size: 18px;
  line-height: 26px;
  margin-top: 24px;
  margin-bottom: 40px;
  @media only screen and (max-width: 1110px) {
    margin-top: 34px;
    margin-bottom: 39px;
  }
  @media only screen and (max-width: 768px) {
    margin-top: 32px;
    margin-bottom: 32px;
  }
`;
export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 40px;
  @media only screen and (max-width: 1110px) {
    column-gap: 37px;
  }
  @media only screen and (max-width: 768px) {
    column-gap: 32px;
  }
`;
export const ReleaseDate = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  text-transform: uppercase;
  color: #7B8BAD;
`;
export const HeroRight = styled.div`
@media only screen and (max-width: 1110px) {
  margin-right: -157px;
}
@media only screen and (max-width: 768px) {
  margin-right: -21px;
}
`;
export const HeroPicture = styled.picture``;
export const PictureSource = styled.source``;
export const HeroImage = styled.img`
  max-height: 480px;
  border-radius: 20px;
`;
