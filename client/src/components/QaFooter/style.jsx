import styled from 'styled-components';
import DefaultAvatar from '../../assets/default-avatar.svg';

export const Tail = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* border: 1px solid pink; */
  margin-top: 24px;
`;

export const PostController = styled.div`
  display: inline-block;
  flex-grow: 1;
  margin-bottom: 12px;

  > ul {
    font-size: 13px;

    li {
      display: inline-block;
      margin: 4px 6px;
      cursor: pointer;
      color: #6a737c;

      &:hover {
        color: #838c95;
      }
    }
  }
`;

export const Modified = styled.div`
  font-size: 12px;
  color: #0074cc;
  flex-grow: 1;
  margin-bottom: 12px;
  padding: 4px 14px 0 8px;
  span {
    margin-left: 3px;
  }
`;

export const ProfileCard = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: 147px;
  padding: 5px 6px 7px 7px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.type === 'question' ? '#D9EAF7' : 'none'};
`;

export const ProfilePicture = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 3px;
  background-image: ${(props) =>
    props.avatar ? `url(${props.avatar})` : `url(${DefaultAvatar})`};
`;

export const Timestamp = styled.p`
  color: #6a737c;
  font-size: 12px;

  span {
    margin-left: 3px;
  }
`;

export const Name = styled.p`
  font-size: 13px;
  color: #0074cc;
`;
