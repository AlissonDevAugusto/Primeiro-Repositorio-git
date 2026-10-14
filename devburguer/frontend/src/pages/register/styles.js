import styled from 'styled-components';
import BackgroundRegisterLeft from '../../assets/background-left.png';
import BackgroundRegisterRight from '../../assets/background-right.svg';

/* navega pelas page atraves de um link */
import { Link as ReactLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;

  @media (max-width: 760px) {
    min-height: 100vh;
    height: auto;
  }
`;

export const LeftContainer = styled.div`
  background-image: url('${BackgroundRegisterLeft}');
  background-size: cover;
  height: 100%;
  width: 100%;
  max-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 760px) { display: none; }
`;

export const RightContainer = styled.div`
  background-image: url('${BackgroundRegisterRight}');
  background-color: #1e1e1e;
  background-size: cover;
  height: 100%;
  width: 100%;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: #fff;
    font-size: 18px;
    font-weight: 500;

    a {
      text-decoration: underline;
    }

    a:hover {
      color: #9758a6;
    }
  }

  @media (max-width: 760px) {
    min-height: 100vh;
    max-width: 100%;
    padding: 32px 20px;
  }
`;

export const Title = styled.h2`
  font-family: 'Road Rage', sans-serif;
  font-size: 50px;
  font-weight: 400;
  color: #9758a6;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 50px;

  label {
    color: #fff;
    font-size: 18px;
    font-weight: 600;
  }

  input {
    height: 52px;
    width: 350px;
    border-radius: 5px;
    border: none;
    padding: 0 16px;
    font-size: 16px;
  }

  p {
    color: #cf3057;
    font-size: 16px;
    height: 10px;
    font-weight: 500;
  }

  @media (max-width: 420px) {
    width: 100%;

    input { width: 100%; }
  }
`;

export const Link = styled(ReactLink)`
  color: #fff;
  font-weight: 300;
  text-decoration: underline;

  &:hover {
    color: #9758a6;
  }
`;
