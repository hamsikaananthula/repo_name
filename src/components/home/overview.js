import { useState } from "react";
import styled from "styled-components";
const Container=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    font-family:Montserrat;
    margin:10px;
    width:100%;
`;
const BalanceBox=styled.div`
   display:flex;
   flex-direction:row;
   justify-content:space-between;
   align-items:Center;
   font-size:15px;
   width:100%;
   font-weight:bold;
`;
// const AddTransaction=styled.button`
//    background:black;
//    color:white;
//    padding:5px 10px;
//    border-radius:4px;
//    cursor:pointer;
//    font-weight:bold;
//    font-size:15px;
// `;
// const AddTransaction=()=>{
//      return(
//         <AddTransactionContainer>
            
//         </AddTransactionContainer>
//      )
// };
const Overview=(props)=>{
    const [isAddTxnVisible,toggleAddTxn]=useState(false);
    return(
        <div>
            <Container>
              <BalanceBox>
                Balance:$10000
                {/* <AddTransaction>{isAddTxnVisible?"cancel":"ADD"}</AddTransaction> */}
              </BalanceBox>
              {/* {isAddTxnVisible&&<AddTransaction/>} */}
            </Container>
        </div>
    ) 
}
export default Overview;