import styled, { ThemeProvider } from "styled-components"
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useState } from "react";
import {
  BrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Teachers from "./pages/Teachers";
import Modules from "./pages/Modules";
import Modules2 from "./pages/Modules2";
import Profile from "./pages/Profile";

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background-color: ${({theme})=>theme.soft};
`
const Wrapper = styled.div`
  padding: 22px 96px;
`


function App() {

  const [darkMode, setDarkMode] = useState(true)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Container>
      <BrowserRouter>
      <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Main>
        <Navbar/>
        <Wrapper>
          <Routes>
            <Route path="/">
              <Route index element={<Home/>}/>
              <Route path="Teachers">
                <Route path=":id" element={<Teachers/>}/>
              </Route>
              <Route path="Modules">
                <Route path=":id" element={<Modules/>}/>
              </Route>
              <Route path="Modules2">
                <Route path=":id" element={<Modules2/>}/>
              </Route>
              <Route path="Profile">
                <Route path=":id" element={<Profile/>}/>
              </Route>
            </Route>
          </Routes>
        </Wrapper>
      </Main>
      </BrowserRouter>
    </Container>
    </ThemeProvider>
  );
}

export default App;
