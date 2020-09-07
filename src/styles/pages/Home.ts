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
  }

  textarea {
    background-color: transparent;
    margin-top: 8px;
    border: 2px solid ${props => props.theme.dark.primary};
    border-radius: 4px;
    height: 160px;
    resize: none;
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
`
