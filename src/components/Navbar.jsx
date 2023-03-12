import React from 'react'
import styled from 'styled-components'

// styled component
const Section = styled.div`
    display: flex;
    justify-content: center;
`
const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
`;
const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`;
const Logo = styled.img`
    height: 50px;
`;
const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
`;
const ListItem = styled.li``;
const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`;
const Icon = styled.img`
    cursor: pointer;
    width: 20px;
`;
const Button = styled.button`
    width: 100px;
    padding: 10px;
    background-color: pink;
    color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
`;


const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
                <Logo src="../../public/img/search.png"/>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Home 1</ListItem>
                    <ListItem>Home 2</ListItem>
                    <ListItem>Home 3</ListItem>
                </List>
            </Links>
            <Icons>
                <Icon src="../../public/img/search.png"/>
                <Button>Hire Now</Button>
            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar