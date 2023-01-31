import React from 'react'
import Section from './Section'
import styled from 'styled-components'

function Home() {
  return (
    <Container>
      <Section
        title = "Model S"
        description = "Order Online for Touchless delivery"
        backgroundImg = "model-s.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Demo Drive"
        downArrow = "./images/down-arrow.svg"
      />
      <Section
         title = "Model Y"
         description = "Order Online for Touchless delivery"
         backgroundImg = "model-y.jpg"
         leftBtnText = "Custom Order"
         rightBtnText = "Demo Drive"
      />
      <Section
         title = "Model 3"
         description = "Order Online for Touchless delivery"
         backgroundImg = "model-3.jpg"
         leftBtnText = "Custom Order"
         rightBtnText = "Demo Drive"
      />
      <Section
         title = "Model X"
         description = "Order Online for Touchless delivery"
         backgroundImg = "model-x.jpg"
         leftBtnText = "Custom Order"
         rightBtnText = "Demo Drive"
      />
      <Section
         title = "Lowest Cost Solar Panels in the World"
         description = "Money-back guarantee"
         backgroundImg = "solar-panel.jpg"
         leftBtnText = "Order Now"
         rightBtnText = "Learn More"
      />
      <Section
         title = "Solar for New Roofs"
         description = "Solar Roof Cost Less Than a New Roof Plus Solar Panels"
         backgroundImg = "solar-roof.jpg"
         leftBtnText = "Order Now"
         rightBtnText = "Learn More"
      />
      <Section
         title = "Accessories"
         description = ""
         backgroundImg = "accessories.jpg"
         leftBtnText = "Order Now"
         
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
   height: 100vh;
`
