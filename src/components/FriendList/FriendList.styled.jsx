import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1em;
  padding-bottom: 1em;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Item = styled.li`
  background: linear-gradient(137deg, #a3a0a3 10%, transparent 36%);
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 100px;
  padding: 1.25em;
  border-radius: 3px;
  background-color: white;
  box-shadow: 0px 10px 20px rgb(0 0 0 / 20%);
  overflow: hidden;
  transform: translateY(5%);
  transition: transform 200ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
  @media (min-width: 600px) {
    &:hover {
      transform: translateY(5%) scale(1.1);
    }
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const setBgColor = props => {
  switch (props.isOnline) {
    case true:
      return 'red';
    case false:
      return 'green';
    default:
      return 'red';
  }
};

export const Chip = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 0.625em;
  background-color: ${setBgColor};
`;

export const Avatar = styled.img`
  width: 100px;
  background-color: #c8ddde;
  border-radius: 10%;
  margin-right: 2.188em;
`;

export const Name = styled.p`
  font-size: 2em;
  font-weight: 600;
`;
