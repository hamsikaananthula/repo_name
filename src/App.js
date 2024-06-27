import styled from "styled-components";
import HomeComponent from "./components/home";
const Container=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    font-family:Montserrat;
    margin:30px 0 10px;
`;
const Header=styled.span`
  color:black;
  font-size:25px;
  font-weight:bold;
`;
function App() {
  return (
    <Container>
      <Header>Expense Tracker</Header>
      <HomeComponent/>
    </Container>
    
  );
}

export default App;
