import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  gap: 15px;
  border-radius: 5px;
  border: grey solid 2px;
  margin-bottom: 10px;
  padding: 10px 20px;
  background-color: #efe5e5;
  align-items: center;
`;
export const Status = styled.span`
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background-color: ${props => {
    return props.isOnline ? '#59aa5a' : '#fd5253';
  }};
`;

export const Avatar = styled.img`
  border-radius: 5px;
  padding: 10px;
  background-color: #5241c4;
`;
export const FriendName = styled.p`
  font-size: 30px;
`;
