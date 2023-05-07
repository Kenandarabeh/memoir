import React from 'react'
import styled from 'styled-components'
import user from '../img/22.png'



const Container = styled.div`
    display: flex;
    gap: 24px;
`

const Content = styled.div`
    flex: 5;
`


const Title = styled.h1`
    font-size: 30px;
    font-weight: 400;
    color:${({theme})=>theme.text};
`



const Recommendation = styled.div`
    flex: 2;
`


const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color:${({theme})=>theme.textSoft};
    margin-top: 13px;
`


const Information = styled.p`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color:${({theme})=>theme.text};
    margin-top: 13px;
`




const Img = styled.img`
    max-width: 100%;
    -ms-flex-item-align: start;
    align-self: flex-start;
    border: 8px solid #FF8633;
    border-radius: 40px;

`

const Hr = styled.hr`
    margin: 15px 0px;
    border: 1px solid ${({theme})=>theme.textSoft};
`


const Profile = () => {
  return (
    <Container>
    <Content>
        <Title>
            Et Gheffari Youcef
        </Title>
        <Details>
            Computer Science student in CUN
        </Details>
        <Hr/>
        <Title>
            User's Informations:
        </Title>
        <Details>
        <Information>Full Name:</Information>
        Gheffari Youcef
        </Details>
        <Details>
        <Information>Birthday Date:</Information>
        12 November 2002
        </Details>
        <Details>
        <Information>degree specialty::</Information>
        Computer Science
        </Details>
        <br/>
        <br/>
        <Hr/>
        <br/>
        <br/>
        <br/>
    </Content>
    <Recommendation><Img src={user}/></Recommendation>
</Container>
  )
}

export default Profile