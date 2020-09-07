import styled from 'styled-components'

interface IContainerProps {
  dark?: boolean
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 200px 0 200px;
  margin-top: 15px;

  background-color: ${props =>
    props.dark ? props.theme.dark.background : props.theme.light.background};

  nav ul {
    display: flex;

    li {
      list-style: none;

      a {
        text-decoration: none;
        color: ${props =>
          props.dark
            ? props.theme.light.background
            : props.theme.dark.background};
        text-transform: uppercase;
        font-size: 1.2rem;
        padding: 1.2rem;
        transition: all 250ms linear 0s;

        &:hover {
          background: rgba(255, 255, 255, 0.15);
        }
      }
    }
  }
`
