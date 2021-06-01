import React from 'react';
import styled from 'styled-components'

export default function Login() {
    return (
    <Container>
        <Content>
            <CTA>
                <CTALogone  src="/images/cta-logo-one.svg" alt=""/>
                <SignUp>GET ALL THERE</SignUp>
                <Discription>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ 
                    subscription. As of 03/26/21, the price of Disney+ and Disney Bundle will increase by 1$. 
                </Discription>
                <CTALogTwo  src="/images/cta-logo-two.png" alt="" />
            <BackImage/>
            </CTA>
        </Content>
    </Container>      
    )
}

const Container = styled.section`
overflow : hidden:
diaplay : flex;
felx-direction: column;
text-align: center;
height: 100vh;
`;

const Content = styled.div`
margin-bottom: 10vw;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const BackImage = styled.div`
background-image: url("/images/login-background.jpg");
height: 100%;
background-position: top;
background-size: cover;
position: absolute;
top: 0;
right: 0;
left: 0;
z-index: -1;
`;

const CTA = styled.div`
margin-bottom: 2vw;
max-width: 650px;
flex-wrap: wrap;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 0;
align-items: center;
text-align:  center;
margin-right: auto;
margin-left: auto; 
transition-timing-function: ease-out;
transition: opacity 0.2s;
width: 100%;
`;

const CTALogone= styled.img`
margin-bottom: 12px;
max-width: 600px;
min-height: 1px;
display: block;
width: 100%;
`;

const SignUp = styled.a`
 font-weight: bold;
 color: #f9f9f9;
 background-color : #0063e5;
 margin-bottom: 12px;
 width: 100%;
 letter-spacing: 3px;
 font-size : 18px;
 padding : 16.5px 0 ;
 border : 1px solid transparent;
 border-radius: 4px;

 &:hover {
     background-color: #0483ee
 }
`;

const Discription = styled.p`
color: hsla(0, 0%, 95.3%,1);
font-size: 11px;
margin: 0 0 24px;
line-height : 1.5em;
letter-spacing: 1.5px;
`;

const CTALogTwo = styled.img `
margin-bottom: 20px;
max-width: 600px;
display: inline-block;
verticle-align: bottom;
width: 100%;
`;