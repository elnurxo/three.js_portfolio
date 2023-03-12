import styled from 'styled-components'
import './App.css'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Who from './components/Who'
import Works from './components/Works'

// styled component
const Container = styled.div`
  height:100vh;
  background-color: rebeccapurple;
`


function App() {

  return (
    <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
    </Container>
  )
}

export default App