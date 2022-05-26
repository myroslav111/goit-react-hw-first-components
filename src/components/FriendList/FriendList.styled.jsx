import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.li`
  width: 500px;
  min-height: 100px;
  padding: 20px;
  border-radius: 3px;
  background-color: white;
  box-shadow: 0px 10px 20px rgb(0 0 0 / 20%);
  overflow: hidden;
  &:last-child {
    margin-bottom: 15px;
  }
`;

export const Indicator = styled.span``;

export const Avatar = styled.img``;

export const Name = styled.p``;
