import styled from 'styled-components';
export const StyledHeader = styled.header`
  max-width: 1110px;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 55px;
  margin-bottom: 83px;
  @media only screen and (max-width: 1110px) {
    max-width: 100%;
    padding-top: 40px;
    margin-bottom: 62px;
    padding-inline: 39px
  }
  @media only screen and (max-width: 768px) {
    padding-top: 23px;
    margin-bottom: 64px;
    padding-left: 24px;
    padding-right: 24px;
  }
`;
