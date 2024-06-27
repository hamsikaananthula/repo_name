import styled from "styled-components";
import Overview from "./overview";
import Transaction from "./Transaction";
const Container=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    font-family:Montserrat;
    margin:30px 0 10px;
`;
const HomeComponent=(props)=>{
    return(
        <div>
            <Container>
              <Overview/>
              <Transaction/>
            </Container>
        </div>
    ) 
}
export default HomeComponent;