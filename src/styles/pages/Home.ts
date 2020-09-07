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

  margin: 2vh 205px 9.2vh 205px;
  padding: 100px 75px;

  border-radius: 30px;

  @media (max-width: 1500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 75px 75px 0;

    .buttons {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .right img {
      display: none;

      &.keep-small {
        display: block;
        height: 50%;
        object-fit: cover;
        margin-top: 50px;
        margin-bottom: -200px;
      }
    }
  }

  @media (max-width: 980px) {
    h3 {
      font-size: 1.4rem !important;
    }
  }

  @media (max-width: 956px) {
    h1 {
      font-size: 3.4rem !important;
    }

    h2 {
      font-size: 2rem !important;
    }

    .right img.keep-small {
      display: block;
      height: 60%;
      object-fit: contain;
      margin-bottom: -350px;
    }
  }

  @media (max-width: 845px) {
    margin: 1vh 5vw 9.2vh 5vw;
    padding: 100px 75px;
    padding-bottom: 40px;

    .right img.keep-small {
      display: none;
    }

    h1 {
      font-size: 2.4rem !important;
    }

    h2 {
      font-size: 1.4rem !important;
    }
  }

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

      @media (max-width: 500px) {
        flex-direction: column;
      }

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

export const Contact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 9.2vh 200px 4vh 200px;
  padding: 10px 75px;

  .left h1 {
    font-family: 'Russo One';
    font-size: 4rem;
    white-space: nowrap;
  }

  @media (max-width: 1640px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 920px) {
    h1 {
      font-size: 3.2rem !important;
    }
  }

  @media (max-width: 832px) {
    h1 {
      font-size: 2.4rem !important;
    }
  }

  @media (max-width: 570px) {
    margin: 9.2vh 0 0 0;
    width: 100%;
    padding-bottom: 0;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  padding: 100px 125px 50px 125px;
  width: 700px;
  height: 700px;

  border-radius: 350px;

  background-color: ${props => props.theme.dark.background};

  @media (max-width: 1640px) {
    border-radius: 15px;
    width: 75vw;
    height: 700px;
  }

  label {
    margin-top: 30px;
    font-size: 1.4rem;
    font-weight: 600;
  }

  input {
    background-color: transparent;
    margin-top: 8px;
    border: 2px solid ${props => props.theme.dark.primary};
    border-radius: 4px;
    height: 40px;
    color: ${props => props.theme.dark.text};
    font: 'Roboto';
    padding-left: 10px;
  }

  textarea {
    background-color: transparent;
    margin-top: 8px;
    border: 2px solid ${props => props.theme.dark.primary};
    border-radius: 4px;
    height: 160px;
    resize: none;
    color: ${props => props.theme.dark.text};
    font: 'Roboto';
    padding-left: 10px;
    padding-top: 10px;
  }

  button {
    width: 150px;
    height: 45px;

    background-color: ${props => props.theme.light.primary};
    border: none;
    border-radius: 4px;

    font-size: 1.2rem;
    font-family: 'Roboto';
    font-weight: 600;
    cursor: pointer;

    color: ${props => props.theme.dark.text};

    margin-top: 30px;

    align-self: center;
  }

  @media (max-width: 570px) {
    display: flex;
    flex-direction: column;

    margin: 0;
    padding: 0 20px 30px 20px;
    width: 100vw;
    height: auto;
    border-radius: 0px;
  }
`
