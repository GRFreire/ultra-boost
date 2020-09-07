import React from 'react'
import Head from 'next/head'

import Shoes from '../assets/shoes.png'

import { Container, Home as HomeContainer } from '../styles/pages/Home'
import Header from '../components/Header'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Ultra Boost</title>
      </Head>

      <Header />

      <HomeContainer>
        <div className="left">
          <h1>Run Faster</h1>
          <h2>Made for high speed running</h2>

          <div className="buttons">
            <div className="main">
              <a href="#shoe">See shoe</a>
            </div>
            <div>
              <a href="#contact">Contact us</a>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={Shoes} alt="Shoes image" />
        </div>
      </HomeContainer>
    </Container>
  )
}

export default Home
