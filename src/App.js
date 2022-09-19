import Pages from "./Pages/Pages";
import Category from "./Components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./Components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdElderly } from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <MdElderly />
          <Logo to={"/"}>Healthy food page</Logo>
        </Nav>
        <Search />
        <h2 style={{ textAlign: "center" }}>Generate recipes</h2>
        <p style={{ textAlign: "center" }}>
          Click on different icons to show different types of cuisine
        </p>
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 5rem;
  }
  left: 100%;
`;

export default App;
