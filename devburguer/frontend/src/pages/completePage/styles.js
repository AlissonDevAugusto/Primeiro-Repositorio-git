import styled, { keyframes } from 'styled-components';

import backgroundHome from '../../assets/backgroundhome.png';

const appear = keyframes`
  from { opacity: 0; transform: translateY(18px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const Container = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 48px 20px;
  background-color: #eeebeb;
  background-image: linear-gradient(135deg, #fff8 0%, #eeebebdd 100%), url('${backgroundHome}');
  background-size: cover, auto;
`;

export const Card = styled.section`
  width: min(100%, 560px);
  padding: 48px 52px 30px;
  text-align: center;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 24px 60px #5c266933;
  animation: ${appear} 500ms ease both;

  @media (max-width: 560px) {
    padding: 38px 22px 24px;
  }
`;

export const IconBadge = styled.div`
  width: 92px;
  height: 92px;
  margin: 0 auto 24px;
  display: grid;
  place-items: center;
  color: ${({ $success }) => ($success ? '#61a120' : '#9758a6')};
  background: ${({ $success }) => ($success ? '#eef8e6' : '#f4eaf6')};
  border-radius: 50%;
`;

export const Title = styled.h1`
  color: #333232;
  font-family: 'Road Rage', sans-serif;
  font-size: clamp(42px, 8vw, 60px);
  font-weight: 400;
  line-height: 0.95;
`;

export const Subtitle = styled.p`
  max-width: 390px;
  margin: 16px auto 0;
  color: #686868;
  font-size: 15px;
  line-height: 1.6;
`;

export const Details = styled.div`
  margin-top: 30px;
  padding: 18px 20px;
  text-align: left;
  background: #faf8fa;
  border: 1px solid #eee6f0;
  border-radius: 14px;
`;

export const DetailItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  color: #777;
  font-size: 13px;

  & + & {
    margin-top: 14px;
    padding-top: 14px;
    border-top: 1px solid #e9e1eb;
  }

  strong {
    max-width: 250px;
    overflow: hidden;
    color: #333232;
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (max-width: 420px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 6px;
  }
`;

export const StatusBadge = styled.strong`
  padding: 5px 10px;
  color: ${({ $success }) => ($success ? '#4d8615' : '#7b4a85')};
  background: ${({ $success }) => ($success ? '#e6f4d9' : '#f0e5f3')};
  border-radius: 999px;
  font-size: 11px;
  white-space: nowrap;
`;

export const CardFooter = styled.footer`
  margin-top: 30px;
  padding-top: 24px;
  border-top: 1px solid #eee;

  .complete-button {
    min-height: 52px;
    margin-top: 18px;
    text-decoration: none;
  }
`;

export const Message = styled.p`
  color: #777;
  font-size: 13px;
`;

export const LoadingState = styled.div`
  display: grid;
  justify-items: center;
  gap: 14px;
  color: #6f357c;
  font-size: 16px;
  font-weight: 600;

  svg { animation: ${spin} 900ms linear infinite; }
`;
