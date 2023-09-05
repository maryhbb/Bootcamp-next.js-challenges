import Link from "next/link";
import GlobalStyle from "../styles";
import styled from "styled-components";

const Nav = styled.nav`
  border-bottom: solid 2px grey;
  padding: 1rem;
  background-color: #fff;
  width: 100%;
  align-items: center;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  justify-content: space-around;
  padding: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: bold;
  font-size: larger;
  &:hover {
    text-decoration: underline;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: gradientAnimation 10s linear infinite alternate;
  background: linear-gradient(45deg, #06b6d4, #f6e05e);
  background-size: 400% 400%;
`;

const MainContent = styled.div`
  background-color: #fff;
  padding: 2rem;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 800px;
  text-align: center;
  height: 30vh;
`;

export default function App({ Component, pageProps }) {
  return (
    <AppContainer>
      <GlobalStyle />
      <Nav>
        <StyledList>
          <li>
            <StyledLink href="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink href="/about">About</StyledLink>
          </li>
          <li>
            <StyledLink href="/contact">Contact</StyledLink>
          </li>
        </StyledList>
      </Nav>
      <MainContent>
        <Component {...pageProps} />
      </MainContent>
    </AppContainer>
  );
}
