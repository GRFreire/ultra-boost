import React from 'react'

import { Container, Separator } from './styles'
import Logo from '../Logo'

interface IProps {
  dark?: boolean
}

const Header: React.FC<IProps> = ({ dark }) => {
  return (
    <>
      <Container dark={dark}>
        <Logo size={28} />
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#shoe">Shoe</a>
            </li>
            <li>
              <a href="#contact">Contact us</a>
            </li>
          </ul>
        </nav>
      </Container>
      <Separator>.</Separator>
    </>
  )
}

export default Header
