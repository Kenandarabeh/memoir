import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Cards from '../components/Cards'
import axios from 'axios'


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Home = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const type = "informatique"
      const res = await axios.get(`http://localhost:8800/api/users/category?catg=${type}`)
      setUsers(res.data)
    }

    fetchUsers()
  }, [])

  return (
    <Container>
      {users.length > 0 && users.map((user) => (
        <Cards key={user.id} user={user} image={user.image} />
      ))}
    </Container>
  )
}

export default Home
