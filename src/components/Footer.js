import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Container>
      <Foot>
        <a href="#">Tesla &copy; 2023</a>
        <a href="#">Privacy & Legal</a>
        <a href="#">Vehicle Recalls</a>
        <a href="#">Contact</a>
        <a href="#">Careers</a>
        <a href="#">News</a>
        <a href="#">Engage</a>
        <a href="#">Locations</a>
      </Foot>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-item: center;
  justify-content: center;
  

  
`

const Foot = styled.div`


@media (max-width: 877px){
    a{
        padding: 7px;
        font-size: 10px;
    }

 }

 a {
    padding: 15px;
    font-size: 16px;
    font-weight: 600;
    
 }
 
`
