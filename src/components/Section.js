import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({title, desc, backImg, leftBtnText, rightBtnText}) {
  return (
    <Wrap bgImage={backImg}>
        <Fade bottom>
            <ItemText>
                <h1>{ title }</h1>
                <p>{ desc }</p>
            </ItemText>
        </Fade>

        <Buttons>
            <ButtonGroup>
                <Fade left><LeftButton>{ leftBtnText }</LeftButton></Fade>
                {
                    rightBtnText &&  <Fade right><RightButton>{ rightBtnText }</RightButton></Fade>
                }                
            </ButtonGroup>
            <DownArrow src="./images/down-arrow.svg" />
        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    z-index: 10;    
    width: 100vw;
    height: 100vh;    
    background-image: ${props => `url('./images/${props.bgImage}')`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;    
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    z-index: 10;
`

const ButtonGroup = styled.div`
    display: flex;        
    justify-content: center;    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const Buttons = styled.div``

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 13px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`    
    height: 40px;
    animation: animateDown infinite 1.5s;    
`