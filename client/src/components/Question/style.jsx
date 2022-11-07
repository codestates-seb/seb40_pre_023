import styled from 'styled-components';

export const QList = styled.div`
  width: 100%;
`;

export const QRightDetail = styled.div`
  width: 100%;
`;
export const QDetail = styled.div`
  padding: 16px;
  box-sizing: border-box;
  background-color: white;
  border-bottom: 1px solid #e3e6e8;
  overflow: hidden;
  height: auto;
  @media screen and (min-width: 981px) {
    display: flex;
  }
`;

export const QHead = styled.div`
  @media screen and (min-width: 981px) {
    display: flex;
    flex-direction: column;
    min-width: 110px;
    box-sizing: border-box;
    width: 108px;
    gap: 8px;
    padding-right: 16px;
  }

  > p {
    display: inline-block;
    color: #2a4255;
    font-size: 0.8em;
    margin-right: 6px;

    @media screen and (min-width: 981px) {
      margin-right: 0;
      margin-left: auto;
    }
  }
  > p:first-child {
    color: #000000;
  }
`;

export const QUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const QTitle = styled.h2`
  word-wrap: break-word;
  word-break: keep-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 4.2px;
  font-size: 14.4px;
  line-height: 18px;
  font-weight: 500;
  letter-spacing: 0.4px;
  cursor: pointer;

  color: #0075cc;
  &:hover {
    color: #0a95ff;
  }

  @media screen and (min-width: 641px) {
    font-size: 17px;
    line-height: 22px;
  }
`;

export const QContent = styled.p`
  word-wrap: break-word;
  word-break: keep-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 11px;
  color: #3b4045;
  letter-spacing: 0.4px;
  line-height: 16px;

  @media screen and (min-width: 641px) {
    font-size: 11px;
  }
`;
export const Avatar = styled.div`
  box-sizing: border-box;
  width: 16px;
  max-width: 16px;
  height: 16px;
  max-height: 16px;
  margin-right: 0.2em;
  box-sizing: border-box;
  background-image: url('https://lh3.googleusercontent.com/a-/AOh14GjIMvLKFfFlxJthiFIfGpUGQdtn-AIdmljC1ZQ5Rg=k-s32');
`;

export const Time = styled.p`
  box-sizing: border-box;
  font-size: 0.8em;
  margin-left: 0.3em;
  margin-top: 0.3em;
  color: #6a737c;
`;

export const QInfo = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 10em;
  align-items: center;
  justify-content: right;

  margin-left: auto;
  margin-top: 0.7em;
  padding-bottom: 0.3em;
`;

export const Nickname = styled.p`
  font-size: 0.9em;
  color: #0074cc;
  margin-top: 0.2em;
  &:hover {
    color: #0a95ff;
  }
`;
export const QTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  box-sizing: border-box;
  margin-top: 0.4em;
  margin-bottom: auto;
`;
export const QTag = styled.div`
  max-width: 85px;
  padding: 0.4em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  color: #0f6c9a;
  background-color: #e2ecf4;
  font-size: 13px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #d0e3f1;
  }
`;
