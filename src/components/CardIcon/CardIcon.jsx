import * as S from './CardIcon.style';
const CardIcon = ({ icon }) => {
  return (
    <>
      <S.IconContainer>
        <S.Icon src={icon} />
      </S.IconContainer>
    </>
  );
};
export default CardIcon;
