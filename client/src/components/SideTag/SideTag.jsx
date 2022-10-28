import React from "react";
import styled from 'styled-components';


function SideTag(){
    const tags = ["Related Tags", "javascript", "python", "java", "c#", "php", "android", "html", "jquery", "c+ +", "css"]
    const Wrapper = styled.button`
  display: flex;
  margin: 5px;
  padding: 4.8px 6px;
  border: none;
  color: #39739d;
  background-color: #e1ecf4;
  border-radius: 3px;
  font-size: 12px;
  cursor: auto;

  span {
    white-space: nowrap;
  }

  div {
    display: flex;
    align-items: center;
    margin-left: 5px;
  }

  svg {
    font-size: 15px;
    color: rgb(57, 115, 157);
    cursor: pointer;

    &:hover {
      border-radius: 3px;
      background-color: rgb(57, 115, 157);
      color: white;
    }
  }
`;
    return (
      <div>
        {tags.map((tag) => (<Wrapper type="button"><span>{tag}</span></Wrapper>))}
      </div>
    );
  };

export default SideTag;