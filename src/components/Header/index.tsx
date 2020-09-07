import React from 'react'

import { Container } from './styles'
import Logo from '../Logo'

interface IProps {
  dark?: boolean
}

const Header: React.FC<IProps> = ({ dark }) => {
  return (
    <Container dark={dark}>
      <Logo size={20} dark={dark} />
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact us</a>
          </li>
        </ul>
      </nav>
    </Container>
  )
}

export default Header
