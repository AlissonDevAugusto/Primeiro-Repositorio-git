import styled from "styled-components";

export const Container = styled.div`
    padding-left: 0px 40px;
    padding-bottom: 20px;
    overflow-x: hidden;
   margin: 0 100px;

   @media (max-width: 700px) {
      margin: 0 24px;

      .carousel-item { padding-right: 16px; }
   }

    .react-multi-carousel-list {
        overflow: visible;
    }
    
    .carousel-item {
    padding-right: 40px;
    }
`

export const Title = styled.h2`
    position: relative;
    text-align: center;
    font-size: 32px;
    font-weight: 800;
    color: #61A120;
    padding-bottom: 12px;
    margin: 10px 0px 60px 0px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0px;
        left: calc(50% - 28px);
        height: 4px;
        width: 57px;
        background-color: #61A120;
        
    }

`
