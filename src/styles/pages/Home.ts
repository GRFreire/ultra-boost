import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 5.4rem;
    color: ${props => props.theme.light.primary};
  }
`

interface ISectionProps {
  dark?: boolean
}

export const Section = styled.section<ISectionProps>`
  background-color: ${props =>
    props.dark ? props.theme.dark.background : props.theme.light.background};
  color: ${props =>
    props.dark ? props.theme.dark.text : props.theme.light.primary};
  font-size: 2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 20px 200px 4vh 200px;
  padding: 10px 75px;

  border-radius: 30px;

  .left {
    margin-right: 5%;
    font-family: 'Russo One';
    font-weight: 400;

    h1 {
      font-size: 4.2rem;
      text-transform: uppercase;
    }
    h2 {
      font-size: 3rem;
      margin-top: 30px;
    }
    h3 {
      font-size: 2rem;
      margin-top: 25px;
      font-family: 'Roboto';
      font-weight: 600px;
    }

    .buttons {
      margin-top: 50px;
      display: flex;
      flex-direction: row;

      div {
        width: 200px;
        height: 60px;
        margin: 10px;

        background-color: ${props => props.theme.light.background};
        border: 3px solid ${props => props.theme.light.secondary};
        border-radius: 4px;

        font-size: 1.4rem;
        font-family: 'Roboto';
        font-weight: 600;
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;

        a {
          color: ${props => props.theme.light.secondary};
        }

        &.main {
          background-color: ${props => props.theme.light.primary};
          border: none;

          a {
            color: ${props => props.theme.light.text};
          }
        }

        a {
          text-decoration: none;
        }
      }
    }
  }

  .right img {
    width: 500px;
  }
`
