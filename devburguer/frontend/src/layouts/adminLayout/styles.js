import styled from "styled-components";
import backgroundHome from '../../assets/backgroundhome.png';

export const Container = styled.div`
    display: grid;
    grid-template-columns: minmax(280px, 320px) 1fr;

    main{
        display: flex;
        flex-direction: column;
        background: ${props => props.theme.secondWhite} url('${backgroundHome}') center / cover fixed;
        background-size: auto;
        width: 100%;
        min-height: 100vh;
    }

    section {
        margin: 0 auto;
        padding: px 20px;
        max-width: 1200px;
        width: 100%;
        box-sizing: border-box;
    }

    ${({ $fullWidthContent }) => $fullWidthContent && `
        section {
            margin: 0;
            padding: 0;
            max-width: none;
        }
    `}

    @media (max-width: 900px) {
        grid-template-columns: 1fr;

        main {
            min-height: calc(100vh - 70px);
        }

        section {
            padding: 16px;
        }
    }
    
`
