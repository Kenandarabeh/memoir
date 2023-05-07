import React from 'react'
import styled from 'styled-components'
import teacher1 from '../img/bouziane.png'
import { Link, useLocation } from 'react-router-dom'




const Container = styled.div`
    display: flex;
    gap: 24px;
`


const Content = styled.div`
    flex: 5;
`



// const TeachersWrapper = styled.div`
//     flex: 5;
// `

const Title = styled.h1`
    font-size: 30px;
    font-weight: 400;
    color:${({ theme }) => theme.text};
`



const Recommendation = styled.div`
    flex: 2;
`

const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color:${({ theme }) => theme.textSoft};
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
    border: 1px solid ${({ theme }) => theme.textSoft};
`



const Teachers = () => {
    function useQuery() {
        return new URLSearchParams(useLocation().search);

    }
    let query = useQuery();





    return (
        <Container>
            <Content>
                <Title>
                    {query}
                </Title>
                <Details>
                    {query.find("image")}
                </Details>
                <Hr />
                <Details>
                    I am a professor at the Salehi Ahmed Al Naama Collective Center, <br />
                    specializing in artificial intelligence.  <br />
                    I teach computer science students and many subjects.<br />
                </Details>
                <br />
                <br />
                <Hr />
                <br />
                <br />
                <br />
                <Title>
                    Modules{ }
                </Title>
                <Link to="/Modules/1" style={{ textDecoration: "none" }}>
                    <button type="button" class="btn btn-secondary" style={{ margin: "20px" }}>Theorie de langauge</button>
                </Link>
                <Link to="/Modules2/2" style={{ textDecoration: "none" }}>
                    <button type="button" class="btn btn-secondary" style={{ margin: "20px" }}>Web developement</button>
                </Link>
            </Content>
            <Recommendation><Img src="../img/22.png" /></Recommendation>
        </Container>
    )
}

export default Teachers