import * as S from './Hero.style';
import { MainHeading, PrimaryButton } from '../../globalStyle';
import KeyboardDesktop from '../../assets/images/desktop/image-keyboard.jpg';
import KeyboardTablet from '../../assets/images/tablet/image-keyboard.jpg';
import KeyboardMobile from '../../assets/images/mobile/image-keyboard.jpg';
const Hero = () => {
  return (
    <>
      <S.StyledHero>
        <S.HeroLeft>
          <MainHeading>Typemaster Keyboard</MainHeading>
          <S.HeroParagraph>
            Improve your productivity and gaming without breaking the bank.
            Upgrade to a high quality mechanical typing experience.
          </S.HeroParagraph>
          <S.ButtonBox>
            <PrimaryButton>Pre-order now</PrimaryButton>
            <S.ReleaseDate>Release on 5/27</S.ReleaseDate>
          </S.ButtonBox>
        </S.HeroLeft>
        <S.HeroRight>
          <S.HeroPicture>
            <S.PictureSource
              media="(min-width: 1110px)"
              srcSet={KeyboardDesktop}
              width="540px"
              height="480px"
            />
            <S.PictureSource
              media="(min-width: 768px)"
              srcSet={KeyboardTablet}
              width="478px"
              height="425px"
            />
            <S.HeroImage
              src={KeyboardMobile}
              alt="Image of the typemaster keyboard"
            />
          </S.HeroPicture>
        </S.HeroRight>
      </S.StyledHero>
    </>
  );
};
export default Hero;
