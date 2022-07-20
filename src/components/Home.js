import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        desc="Order Online For Touchless Delivery"
        backImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Exisitng inventory"
      />      
      <Section 
        title="Model Y"
        desc="Order Online For Touchless Delivery"
        backImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Exisitng inventory"
      />
      <Section 
        title="Model 3"
        desc="Order Online For Touchless Delivery"
        backImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Exisitng inventory"
      />  
      <Section 
        title="Model X"
        desc="Order Online For Touchless Delivery"
        backImg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Exisitng inventory"
      />  
      <Section 
        title="Lower Cost Solar Panels in America"
        desc="Money-back guarantee"
        backImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />  
      <Section 
        title="Solar For New Roofs"
        desc="Solar Roofs Costs Less Than A New Roof Plus Solar Panels"
        backImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />  
      <Section 
        title="Accesories"
        desc=""
        backImg="accessories.jpg"
        leftBtnText="Shop Now"        
      />  
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
