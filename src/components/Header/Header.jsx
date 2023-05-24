import * as S from './Header.style';
import Logo from '../Logo';
import { SecondaryButton } from '../../globalStyle';
export default function Header() {
  return (
    <>
      <S.StyledHeader>
        <Logo />
        <SecondaryButton>Pre-order now</SecondaryButton>
      </S.StyledHeader>
    </>
  );
}
