import * as S from './ImageSection.style';
import { SectionHeading, Picture, PictureSource } from '../../globalStyle';
import KeyboardSmartphoneDesktop from '../../assets/images/desktop/image-phone-and-keyboard.jpg';
import KeyboardSmartphoneTablet from '../../assets/images/tablet/image-phone-and-keyboard.jpg';
import KeyboardSmartphoneMobile from '../../assets/images/mobile/image-phone-and-keyboard.jpg';
import KeyboardGlassDesktop from '../../assets/images/desktop/image-glass-and-keyboard.jpg';
import KeyboardGlassTablet from '../../assets/images/tablet/image-glass-and-keyboard.jpg';
import KeyboardGlassMobile from '../../assets/images/mobile/image-glass-and-keyboard.jpg';
const ImageSection = () => {
  return (
    <>
      <S.StyledSection>
        <S.SectionImages>
          <S.OveralyedImage>
            <PictureSource
              media="(min-width: 1110px)"
              srcSet={KeyboardSmartphoneDesktop}
              width="255px"
              height="480px"
            />
            <PictureSource
              media="(min-width: 768px)"
              srcSet={KeyboardSmartphoneTablet}
            />
            <S.SectionImage
              src={KeyboardSmartphoneMobile}
              alt="Image of a smartphone and a keyboard laying on a desk"
            />
          </S.OveralyedImage>
          <Picture>
            <PictureSource
              media="(min-width: 1110px)"
              srcSet={KeyboardGlassDesktop}
              width="445px"
              height="480px"
            />
            <PictureSource
              media="(min-width: 768px)"
              srcSet={KeyboardGlassTablet}
            />
            <S.SectionImage
              src={KeyboardGlassMobile}
              alt="Image of a glass and a keyboard laying on a desk"
            />
          </Picture>
        </S.SectionImages>
        <S.SectionText>
          <SectionHeading>
            Mechanical <br /> wireless
            <br /> Keyboard
          </SectionHeading>
          <S.SectionParagraph>
            The Typemaster keyboard boasts top-notch build and practical design.
            It offers a wide variety of switches and keycaps, along with
            reliable wireless connectivity.
          </S.SectionParagraph>
        </S.SectionText>
      </S.StyledSection>
    </>
  );
};
export default ImageSection;
