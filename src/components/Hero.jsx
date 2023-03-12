import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

// styled component
const Section = styled.div`
  height:100vh;
  scroll-snap-align: center;
`

const Hero = () => {
  return (
    <Section>
      <Navbar/>
    </Section>
  )
}

export default Hero