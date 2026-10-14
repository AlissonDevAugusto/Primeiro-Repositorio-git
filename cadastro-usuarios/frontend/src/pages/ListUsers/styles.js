import styled from "styled-components";

export const Container = styled.div`
    background-color: #181f36;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px
    
`

export const ContainerUsers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr ;
    gap: 30px;

    @media (max-width: 750px) {
        grid-template-columns: 1fr;
    }
    
`

export const CardUsers = styled.div`
    background-color: #252d48;
    border-radius: 15px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 380px;
    

    h3 {
        color: #fff;
        font-size: 25px;
        margin-bottom: 5px;
    }
    
    p {
        color: #ffffffb0;
        font-weight: 400;
    }
    

`

export const TrashIcon = styled.img`
    cursor: pointer;
    border-radius: 5px;
   

    &:active {
       transition: 0.2s;
        box-shadow:
            0 0 10px #c21717,
             0 0 25px #c43636;
  
    }

`
export const AvatarUser = styled.img`
    width: 90px;
`

