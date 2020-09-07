import React from 'react'
import Head from 'next/head'

import Shoes from '../assets/shoes.png'
import Shoe from '../assets/shoe.png'

import { Container, Section } from '../styles/pages/Home'
import Header from '../components/Header'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Ultra Boost</title>
      </Head>
      <Header />
      <Section id="home">
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
      </Section>

      <Section id="shoe" dark>
        <div className="left">
          <h1>Air Boost</h1>
          <h2>Designed for maximum speed</h2>
          <h3>
            With a soft and lightweight finish to give you the
            <br /> extra boost of speed
          </h3>

          <div className="buttons">
            <div className="main">
              <a href="#">Buy</a>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={Shoe} alt="Shoes image" />
        </div>
      </Section>
    </Container>
  )
}

export default Home
