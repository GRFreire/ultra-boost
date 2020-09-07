import styled from 'styled-components'

interface ITitleProps {
  size: number
}

export const Title = styled.p<ITitleProps>`
  font-family: 'Kufam';
  font-weight: 600;
  font-size: ${props => props.size / 10}rem;
`
