import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 11em;
  padding-top: 4.5em;

  box-sizing: border-box;
  padding: 1em;
  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 640px) {
    box-sizing: border-box;
    margin-left: 0em;
  }
`;
export const LContent = styled.div`
  display: flex;
  flex: 1;
  @media (max-width: 980px) {
    display: flex;
    flex-grow: 0;
    margin-bottom: 2em;
  }
`;
export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  > .title {
    font-size: 1.5em;
    padding-bottom: 0.3em;
    letter-spacing: -0.03em;
  }
`;
export const StatContainer = styled.div`
  display: flex;
  padding: 1em;
  box-sizing: border-box;

  gap: 1em;
  border: 1px solid #d6d9dc;
  border-radius: 0.3em;
  flex-wrap: wrap;

  @media screen and (max-width: 980px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;
export const StatDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const StatTop = styled.div`
  display: flex;
  flex: 1;
  gap: 1em;
  flex-shrink: 1;
  @media screen and (min-width: 981px) {
    padding-bottom: 0.5em;
  }
`;
export const StatBottom = styled.div`
  display: flex;
  flex: 1;
  gap: 1em;
  flex-shrink: 1;
`;

export const RContent = styled.div`
  flex: 3;
  margin-left: 1.5em;

  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  > .about-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 2em;

    > .title {
      font-size: 1.5em;
      padding-bottom: 0.3em;
      letter-spacing: -0.03em;
    }
    > .about-content {
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      height: 100px;
      padding: 3em;
      border: 1px solid #d6d9dc;
      border-radius: 0.3em;
      background-color: #f8f9f9;

      > .about-txt {
        font-size: 0.9em;
        color: #6a737c;
        text-align: center;
        line-height: 1.2em;
        letter-spacing: -0.01em;
        > .about-link {
          box-sizing: border-box;
          color: #0074cc;
          padding-left: 0.3em;
          &:hover {
            color: #0e95ff;
          }
        }
      }
    }
  }

  > .posts-container {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    max-width: 47em;

    > .title {
      font-size: 1.5em;
      padding-bottom: 0.3em;
      letter-spacing: -0.03em;
    }
    > .posts-content {
      box-sizing: border-box;

      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid #d6d9dc;
      border-radius: 0.3em;
      background-color: #f8f9f9;

      > .post-item {
        box-sizing: border-box;
        padding: 0.5em;
        display: flex;
        background-color: white;
        height: 2.5em;
        align-items: center;
        font-size: 1.1em;
        width: 100%;

        border-bottom: 1px solid #d6d9dc;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        &:first-child:not(:last-child) {
          border-top-left-radius: 0.3em;
          border-top-right-radius: 0.3em;
        }
        &:last-child:not(:first-child) {
          border-bottom-left-radius: 0.3em;
          border-bottom-right-radius: 0.3em;
          border-bottom: 0;
        }
        > .post-idx {
          margin-left: 0.3em;
          margin-right: 0.7em;
        }
        > .post-title .post-link {
          color: #0075cc;
          &:hover {
            color: #0e95ff;
          }
        }
        > .post-data {
          display: flex;
          width: 5em;
          background-color: black;
        }
      }

      > .posts-icon {
        padding-bottom: 2em;
      }
      > .posts-txt {
        width: 420px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        font-size: 0.9em;
        color: #6a737c;
        text-align: center;
        line-height: 1.2em;
        letter-spacing: -0.01em;
        > .posts-txt-top {
          padding-bottom: 1em;
        }
      }
    }
  }
  @media screen and (max-width: 981px) {
    margin-left: 0;
  }
`;

export const StatNum = styled.p`
  font-size: 1.2em;
  padding-bottom: 0.2em;
  @media screen and (max-width: 640px) {
    font-size: 1em;
  }
`;

export const StatMsg = styled.p`
  font-size: 0.9em;
  color: #626a73;
  @media screen and (max-width: 640px) {
    font-size: 0.8em;
  }
`;
