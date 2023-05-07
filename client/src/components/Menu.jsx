import React from 'react'
import styled from 'styled-components'
import jami3a from '../img/342000555_551971077089045_2820145375748321387_n.png'
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LightModeIcon from '@mui/icons-material/LightMode';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

const Container =styled.div`
    flex:1;
    background-color: ${({theme})=>theme.bg};
    height: 100vh;
    color: ${({theme})=>theme.text};
    font-size: 14px;
    position: sticky;
    top: 0;
`
const Wrapper =styled.div`
    padding:18px 26px;
`
const Logo =styled.div`
    display:flex;
    align-items: center;
    gap: 5px;
`
const Img = styled.img`
    height: 100px;
`
const Item = styled.div`
    display:flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 17px 0;
`
const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({theme})=>theme.soft};
`

const Menu = ({darkMode, setDarkMode}) => {
  return (
    <Container>
        <Wrapper>
        <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
            <Logo>
                <Img src={jami3a}/>
            </Logo>
        </Link>
        <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
            <Item>
                <HomeIcon/>
                Home
            </Item>
            </Link>
            <Hr/>
            <Link to="/Profile/1" style={{textDecoration:"none", color:"inherit"}}>
            <Item>
                <AccountCircleIcon/>
                Profile
            </Item>
            </Link>
            <Hr/>
            <Item onClick={()=>setDarkMode(!darkMode)}>
                <LightModeIcon/>
                LightMode
            </Item>
            <Hr/>
            <Item>
                <LogoutIcon/>
                Logout
            </Item>
        </Wrapper>
    </Container>
  )
}

export default Menu