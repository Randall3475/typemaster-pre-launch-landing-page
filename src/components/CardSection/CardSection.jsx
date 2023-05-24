import * as S from './CardSection.style';
import CardIcon from '../CardIcon/CardIcon';
import { CardHeading } from '../../globalStyle';
import CompatibleIcon from '../../assets/images/shared/icon-compatible.svg';
import BluetoothIcon from '../../assets/images/shared/icon-bluetooth.svg';
import BatteryIcon from '../../assets/images/shared/icon-battery.svg';
import LightIcon from '../../assets/images/shared/icon-light.svg';
const CardSection = () => {
  return (
    <>
      <S.StyledSection>
        <S.Card>
          <CardIcon icon={CompatibleIcon} />
          <CardHeading>
            HIGHLY
            <br /> COMPATIBLE
          </CardHeading>
          <S.CardParagraph>
            Easy to use and works well with all major computer brands, gaming
            consoles and mobile devices. Plug & play, no installation or driver
            <br />
            needed.
          </S.CardParagraph>
        </S.Card>
        <S.Card>
          <CardIcon icon={BluetoothIcon} />
          <CardHeading>
            WIRELESS
            <br /> WITH BLUETOOTH
          </CardHeading>
          <S.CardParagraph>
            Powerful 2.4G RF technology allows you to connect the cordless
            keyboard from up to 30ft away. Simply plug the unifying receiver
            into your computer.
          </S.CardParagraph>
        </S.Card>
        <S.Card>
          <CardIcon icon={BatteryIcon} />
          <CardHeading>
            HIGH CAPACITY <br /> BATTERY
          </CardHeading>
          <S.CardParagraph>
            Equipped with a long-lasting built-in battery, you’ll never have to
            spend a dime on replaceable ones. Enjoy 40 hours of usage time
            between charges.
          </S.CardParagraph>
        </S.Card>
        <S.Card>
          <CardIcon icon={LightIcon} />
          <CardHeading>
            RGB BACKLIT
            <br /> MODES
          </CardHeading>
          <S.CardParagraph>
            Choose from 4 backlight brightness levels and adjustable breathing
            speed. Each key glows intensely in the dark and helps you type in
            low light conditions.
          </S.CardParagraph>
        </S.Card>
      </S.StyledSection>
    </>
  );
};
export default CardSection;
