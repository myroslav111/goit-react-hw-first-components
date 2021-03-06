import styled from '@emotion/styled';

export const CardProfile = styled.div`
  max-height: 500px;
  width: 430px;
  background: linear-gradient(60deg, #a3a0a3 20%, transparent 40%);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: 0px 1rem 1.5rem rgb(0 0 0 / 50%);
  margin-bottom: 20px;
  @media (max-width: 768px) {
    height: 90%;
    width: 100%;
  }
`;

export const UserDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`;

export const Img = styled.img`
  width: 8rem;
  height: 8rem;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 30%);
  border-radius: 50%;
  transform: translateY(50%);
  transition: transform 200ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
  margin-bottom: 100px;
  &:hover {
    transform: translateY(50%) scale(1.3);
  }
`;

export const Name = styled.p`
  font-size: 35px;
  font-weight: bolder;
  margin-bottom: 15px;
`;

export const Tag = styled.p`
  color: #a0a0a0;
  font-size: 25px;
  margin-bottom: 15px;
`;

export const Location = styled.p`
  color: #a0a0a0;
  font-size: 25px;
  font-weight: bold;
`;

export const Stats = styled.ul`
  // background-image: linear-gradient(
  //   to right,
  //   #c64f4f 33.3%,
  //   #09792b 33.3%,
  //   #09792b 33.3%,
  //   #00b9ff 33.3%,
  //   #00b9ff 65%,
  //   #ffb800 65%
  // );
  display: flex;
  justify-content: space-around;
  height: 125px;
  align-items: center;
  background-color: #f7fcf9;
`;

export const ItemStats = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.span`
  font-size: 20px;
  color: #a0a0a0;
  margin-bottom: 10px;
`;

export const Quantity = styled.span`
  font-weight: bolder;
  font-size: 25px;
`;
