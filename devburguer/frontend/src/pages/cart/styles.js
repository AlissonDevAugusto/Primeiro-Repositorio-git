import styled from "styled-components";

import bannerHome from '../../assets/backgroundhome.png';
import Texture from '../../assets/texture.png';

export const Container = styled.div`
    background-image: url('${bannerHome}');
    background-color: #eeebeb;
    width: 100%;
    min-height: 100vh;
`

export const Banner = styled.div`
   background-image: url('${Texture}');
   background-position: center;
   background-size: cover;
   height: 190px;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;

   img {
  
    height: 170px;
    width: 189px;
   }
`

export const Title = styled.h2`
    position: relative;
    color: #61A120;
    text-align: center;
    margin-top: 20px;
    padding-bottom: 12px;
    font-size: 32px;
    font-weight: 800;
    
    &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: calc(50% - 28px);
    height: 4px;
    width: 57px;
    background-color: #61A120;
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 30%;
  width: 100%;
  max-width: 1280px;
  padding: 40px;
  gap: 20px;
  margin: 0 auto ;

  @media (max-width: 800px) {
    grid-template-columns: minmax(0, 1fr);
    padding: 28px 20px;
  }
`
