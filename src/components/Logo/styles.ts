import styled from 'styled-components'

interface ITitleProps {
  size: number
}

export const Title = styled.p<ITitleProps>`
  font-family: 'Russo One';
  font-weight: 600;
  color: ${props => props.theme.light.primary};
  font-size: ${props => props.size / 10}rem;
  cursor: default;
`
