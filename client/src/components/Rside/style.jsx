import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 350px;
  padding-left: 20px;

  & > a {
    width: 100%;

    & > img {
      width: 100%;
    }
  }

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

export const Boxcontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
`;

export const RowBox = styled.div`
  display: flex;
  width:80%;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 100%;
  margin:auto;
`;


export const ColumnBox = styled(RowBox)`
flex-direction:column;

`;
export const RowBox2 = styled(RowBox)`
justify-content:flex-start;
width:100%;

`;
export const TextBox = styled.div`
justify-content:flex-start;
padding:0;
width:80%;
margin:auto;
`;


export const ButtonsContainer = styled.div`
  display: flex;
 
`;

export const IconContainer = styled.div`
  display: flex;
  margin-right:5px;
`;

export const Sidebar = styled.div`
border: 1px solid hsl(210,8%,85%);
background-color: hsl(210,8%,97.5%);
color: #525960;
box-shadow: 0 1px 2px hsla(0,0%,0%,0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05), 0 2px 8px hsla(0, 0%, 0%, 0.05);

header {
  padding: 12px 15px;
  border-bottom: 1px solid (210,8%,85%);
  font-size: 13px;
  font-weight: 700;
}

& > header:nth-child(3) {
  border-top: 1px solid (210,8%,85%);
}

ul {
  padding: 4px 15px;
  background-color: hsl(0, 0%, 100%);


}

li {
  margin: 12px 0;
  font-size: 13px;
  list-style: inside;
  list-style-type: none;
}
`;

export const Sidebaryellow = styled(Sidebar)`
border: 1px solid hsl(47, 65%, 84%);
background-color: hsl(47, 83%, 91%);
color: #525960;
box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
  0 2px 8px hsla(0, 0%, 0%, 0.05);

header {
  padding: 12px 15px;
  border-bottom: 1px solid hsl(47, 65%, 84%);
  font-size: 13px;
  font-weight: 700;
}

& > header:nth-child(3) {
  border-top: 1px solid hsl(47, 65%, 84%);
}

ul {
  padding: 4px 15px;
  background-color: #faf5e6;


}

li {
  margin: 12px 0;
  font-size: 13px;
  list-style: inside;
  list-style-type: none;
}
`;
  
export const collectButton = styled.button`
display: inline-block;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
border-radius: 3px;
border: 1px solid transparent;
padding: 2px 9px;
transition: all 0.4s ease 0s;
font-size: 0.85rem;
border-color:hsl(206, 85%, 57.5%)
color: hsl(206, 100%, 40%);
background-color: transparant;
width: 100%;
height: 35px;
cursor: pointer;
outline: none;
text-align:center;
&:hover {
  background-color: hsl(205, 57%, 81%);
}
`;
  
