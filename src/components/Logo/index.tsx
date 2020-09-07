import React from 'react'

import { Title } from './styles'

interface IProps {
  size?: number
  dark?: boolean
}

const Logo: React.FC<IProps> = ({ size, dark }) => {
  return (
    <Title size={size || 28} dark={dark}>
      boost
    </Title>
  )
}

export default Logo
