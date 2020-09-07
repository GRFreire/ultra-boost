import styled from 'styled-components'

interface ITitleProps {
  size: number
  dark?: boolean
}

export const Title = styled.p<ITitleProps>`
  font-family: 'Kufam';
  font-weight: 600;
  color: ${props =>
    props.dark ? props.theme.light.background : props.theme.dark.background};
  font-size: ${props => props.size / 10}rem;
  cursor: default;
`
