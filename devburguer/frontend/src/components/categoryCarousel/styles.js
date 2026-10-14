import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px 80px;

  .carousel-item {
    padding-right: 40px;
    cursor: grab;
  }

  @media (max-width: 700px) {
    padding: 0 24px;

    .carousel-item { padding-right: 16px; }
  }
`;

export const Title = styled.h2`
  position: relative;
  text-align: center;
  font-size: 32px;
  font-weight: 800;
  color: #9758a6;
  padding-bottom: 12px;
  margin-bottom: 40px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: calc(50% - 28px);
    height: 4px;
    width: 57px;
    background-color: #9758a6;
  }
`;

export const ContainerItems = styled.div`
  background-image: url('${(props) => props.imageUrl}');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  height: 250px;
  width: 100%;
  padding: 20px 10px;
  border-radius: 10px;
`;

export const CategoryLink = styled(Link)`
  border-radius: 25px;
  background-color: #0000008a;
  padding: 5px 20px;
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  margin-top: 100px;
  text-decoration: none;

  &:hover {
    background-color: #FF8C05;
  }

`;
