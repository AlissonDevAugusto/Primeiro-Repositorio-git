import styled from "styled-components";

export const Container = styled.div`
    width: 360px;

    @media (max-width: 800px) {
        width: min(100%, 360px);
        justify-self: center;
    }
`

export const ContainerCart = styled.div`
    height: 410px;
    width: 360px;
    background-color: #FFF;
    border-radius: 20px;

    @media (max-width: 420px) {
        width: 100%;
    }
`

export const ContainerHeader = styled.header`
    height: 57px;
    background-color: #333232;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
`

export const ContainerSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 360px;
    
    .divSection1 {
        display: flex;
        justify-content: space-around;
    
        p {
            font-size: 18px;
            font-weight: 400;
            color: #828282;
        }
    }

    .divSection2 {
        display: flex;
        justify-content: space-between;
        padding: 0 35px;

        p {
            font-size: 24px;
            font-weight: 500;
        }
    }

`
