import React from 'react'

import { Title } from './styles'

interface IProps {
  size?: number
}

const Logo: React.FC<IProps> = ({ size }) => {
  return <Title size={size || 28}>boost</Title>
}

export default Logo
