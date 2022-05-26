import styled from '@emotion/styled';

export const StatisticList = styled.ul`
  display: flex;
  border-radius: 2rem;
  box-shadow: 0px 1rem 1.5rem rgb(0 0 0 / 50%);
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  height: 100px;
  justify-content: space-around;
  transform: translateY(5%);
  transition: transform 200ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
  @media (min-width: 600px) {
    &:hover {
      transform: translateY(5%) scale(1.1);
      z-index: 1;
    }
  }

  &:nth-of-type(1) {
    background-color: orange;
    border-bottom-left-radius: 20px;
  }
  &:nth-of-type(2) {
    background-color: blue;
  }
  &:nth-of-type(3) {
    background-color: red;
  }
  &:nth-of-type(4) {
    background-color: grey;
  }
  &:nth-of-type(5) {
    background-color: pink;
    border-bottom-right-radius: 20px;
  }
`;

export const Label = styled.span`
  font-size: 20px;
`;

export const Percentage = styled.span`
  font-size: 25px;
  font-weight: bold;
`;

export const SectionCommon = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 35px;
  font-weight: bold;
  padding-top: 20px;
  background-color: white;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Title = styled.h5`
  margin-bottom: 15px;
`;
