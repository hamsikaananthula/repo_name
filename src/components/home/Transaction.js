import styled from "styled-components";
const Container=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    font-family:Montserrat;
    margin:30px 0 10px;
`;
const Transaction=(props)=>{
    return(
        <div>
            <Container>
                Trasnaction
            </Container>
        </div>
    ) 
}
export default Transaction;