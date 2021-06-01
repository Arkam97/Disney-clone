import React from 'react'
import styled from 'styled-components'


export default function Header() {
    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="Disney"/>
              
            </Logo>
            <NAVMenue>
                <a href="/home">
                    <img src="/images/home-icon.svg" alt="Home"/>
                    <span>home</span>
                </a>
                <a href="/home">
                    <img src="/images/search-icon.svg" alt="Home"/>
                    <span>search</span>
                </a>
                <a href="/home">
                    <img src="/images/watchlist-icon.svg" alt="Home"/>
                    <span>watchlist</span>
                </a>
                <a href="/home">
                    <img src="/images/original-icon.svg" alt="Home"/>
                    <span>originals</span>
                </a>
                <a href="/home">
                    <img src="/images/movie-icon.svg" alt="Home"/>
                    <span>movies</span>
                </a>
                <a href="/home">
                    <img src="/images/series-icon.svg" alt="Home"/>
                    <span>series</span>
                </a>
                
            </NAVMenue>
        </Nav>
    )
}

const Nav = styled.nav`
position: fixed;
top : 0;
left : 0;
right: 0;
height : 70px;
background-color:#090b13;
dispaly: flex;
justify-content: space-between;
align-items : center;
padding: 25px 36px;   
letter-spacing: 0.1em;
z-index: 3
`;

const Logo = styled.a`

width: 80px;
top : 10px;
position: absolute;
object-fit: contain;

`;

const NAVMenue = styled.div`
display: flex;
top : 3px;
align-items: center;
height: 100%;
margin-right: auto;
margin-left: 100px;
position: relative;

a {
    display: flex;
    align-items: center;
    padding: 0px 8px;

    img{
        height: 20px;
        min-width: 20px;
        width: 20px;
        z-index: outo;
    }

    span {
        color: rgb(249,249,249);
        font-size: 13px;
        padding: 2px 5px;
        position: relative;
        text-transform: uppercase; 

        &:before{
            border-radius: 0px 0px 4px 4px;
            background-color: rgb(249, 249, 249);
            bottom: -6px;
            content: "";
            height: 2px;
            position: absolute;
            opacity: 0;
            left: 0px;
            right: 0px;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            visibility: hidden;
            width: auto; 
        }
    }

    &:hover{
        span:before{
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
        }
    }
    
}


@media(max-width: 768px)
{
    display: none;
    
}
`;