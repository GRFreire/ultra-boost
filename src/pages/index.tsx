import React from 'react'
import Head from 'next/head'

import Shoes from '../assets/shoes.png'
import Shoe from '../assets/shoe.png'

import { Container, Section, Contact, Form } from '../styles/pages/Home'
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
            With a soft and lightweight finish to give you the extra boost of
            speed
          </h3>

          <div className="buttons">
            <div className="main">
              <a href="#contact">Buy</a>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={Shoe} alt="Shoes image" className="keep-small" />
        </div>
      </Section>

      <Contact id="contact">
        <div className="left">
          <h1>Contact Us</h1>
        </div>
        <div className="right">
          <Form>
            <label htmlFor="name">Name</label>
            <input type="text" name="Name" id="name" />

            <label htmlFor="email">Email</label>
            <input type="text" name="Email" id="email" />

            <label htmlFor="message">Message</label>
            <textarea name="Message" id="message" />

            <button type="submit">Submit</button>
          </Form>
        </div>
      </Contact>
    </Container>
  )
}

export default Home
