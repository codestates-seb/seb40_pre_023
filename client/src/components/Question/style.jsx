import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  padding-top: 60px;
  padding-left: 180px;
  display: flex;
  background-color: grey;
  width: 100%;
  height: 1000px;
`;

export const QList = styled.div`
  display: flex;
  flex-direction: column;
  width: 750px;
  height: 1000px;
  justify-content: baseline;
`;

export const QRightDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  word-break: break-all;
`;
export const QDetail = styled.ul`
  box-sizing: border-box;
  display: flex;
  padding: 0.5em;
  padding-top: 0.5em;
  background-color: white;
  border-bottom: 1px solid #e3e6e8;
  width: 750px;
  overflow: hidden;
  height: auto;
`;

export const QHead = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.4em;
  padding-bottom: 0.3em;
  padding-right: 0.6em;
  min-width: 110px;
  > p {
    color: #2a4255;
    font-size: 0.8em;
    margin-left: auto;
    padding: 0.3em 0.5em 0.7em 0.5em;
  }
  > p:first-child {
    color: #000000;
  }
`;

export const QUser = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const QTitle = styled.h2`
  font-size: 1.1em;
  font-weight: 500;
  letter-spacing: 0.4px;
  line-height: 1.3em;
  padding-top: 0.3em;
  margin-bottom: 0.3em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  color: #0075cc;
  &:hover {
    color: #0a95ff;
  }
`;
export const QContent = styled.p`
  box-sizing: border-box;
  width: 590px;
  height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 0.9em;
  color: #3b4045;
  letter-spacing: 0.4px;
  line-height: 1.1em;
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
  box-sizing: border-box;
  margin-top: 0.4em;
  margin-bottom: auto;
`;
export const QTag = styled.div`
  box-sizing: border-box;
  padding: 0.4em;
  margin-right: 0.4em;
  display: flex;
  text-align: center;
  align-items: center;
  color: #0f6c9a;
  background-color: #e2ecf4;
  font-size: 13px;
  border-radius: 5px;
  height: 23px;
  &:hover {
    background-color: #d0e3f1;
  }
`;
