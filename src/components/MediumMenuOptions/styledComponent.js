import styled from 'styled-components'

export const OptionsContainer = styled.div`
  display: none;
  background-color: ${props => (props.theme === true ? 'black' : 'white')};
  @media screen and (min-width: 768px) {
    width: 25%;
    display: flex;

    min-height: 100vh;
    padding-top: 4%;
    padding-left: 3%;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const LinkName = styled.p`
  color: ${props => (props.theme === true ? '#f1f1f1' : '#7e858e')};
  margin-left: 30px;
  font-size: 18px;
  font-family: 'Roboto';
`
