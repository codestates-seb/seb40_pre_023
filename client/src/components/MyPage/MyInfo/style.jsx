import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  padding: 1em;
  width: auto; // 임시 값
  margin-left: 11em;
  padding-top: 4.5em;
  display: flex;
  justify-content: space-between;
  > .profile-name {
    display: flex;
  }
  @media screen and (max-width: 981px) {
    box-sizing: border-box;
  }
  @media screen and (max-width: 817px) {
    > .profile-name {
      display: flex;
      flex-direction: column;
    }
  }
  @media screen and (max-width: 640px) {
    box-sizing: border-box;
    margin-left: 0em;
    padding-top: 4em;
    > .profile-name {
      display: flex;
      flex-direction: row;
    }
  }
  @media screen and (max-width: 565px) {
    > .profile-name {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const ProfileImg = styled.div`
  min-width: 128px;
  min-height: 128px;
  margin-right: 1em;
  border-radius: 5%;
  box-shadow: rgb(0 0 0 / 5%) 0px 10px 24px, rgb(0 0 0 / 5%) 0px 20px 48px,
    rgb(0 0 0 / 10%) 0px 1px 4px;
  background-image: ${(props) =>
    props.img
      ? `url(${props.img})`
      : `url('https://www.gravatar.com/avatar/0249d66b9fc83450ea56f0c9794e12cc?s=256&d=identicon&r=PG')`};
  @media screen and (max-width: 981px) {
    min-width: 96px;
    max-width: 96px;
    min-height: 96px;
    max-height: 96px;
  }
  @media screen and (max-width: 640px) {
    min-width: 64px;
    max-width: 64px;
    min-height: 64px;
    max-height: 64px;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: auto;

  > .nickname {
    font-size: 2.2em;
    font-weight: medium;
    @media screen and (max-width: 640px) {
      font-size: 1.6em;
    }
  }

  @media screen and (max-width: 817px) {
    padding-top: 1em;
  }
  @media screen and (max-width: 640px) {
    padding-top: 0;
  }
  @media screen and (max-width: 565px) {
    padding-top: 1em;
  }
`;

export const ProfileDay = styled.div`
  display: flex;
  padding-top: 0.5em;
  > .since {
    padding-right: 0.5em;
    color: #9198a1;
    display: flex;
    align-items: center;
    > .since-msg {
      font-size: 0.8em;
      font-weight: 500;
      padding-top: 0.2em;
      padding-left: 0.4em;
    }
    > .icon-since {
      fill: #9198a1;
    }
  }
`;
export const EditMenu = styled.div`
  display: flex;
  white-space: nowrap;
  margin-left: auto;
  cursor: pointer;
  > .Edit {
    margin-right: 0.5em;
  }
  > .Edit,
  .Network {
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    font-size: 0.8em;
    border: 1px solid #9fa6ad;
    border-radius: 0.4em;
    color: #6a737c;
    outline: none;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
    box-sizing: border-box;

    &:hover {
      background-color: #f8f9f9;
    }

    > .edit-msg,
    .network-msg {
      padding-top: 0.2em;
    }

    > .icon-edit,
    .icon-network {
      padding-right: 0.3em;
    }
  }
`;
