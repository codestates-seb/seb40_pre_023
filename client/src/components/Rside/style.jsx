import styled from 'styled-components';

export const Container = styled.aside`
display: none;
box-sizing: border-box;
border: 3px solid yellow;
width: 298px;
@media screen and (min-width: 981px) {
  display: block;
}
`;

export const Boxcontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  padding-bottom:16px;
  padding-top:16px;
  border-top:1px solid hsl(210,8%,90%);
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
font-size:13px;
`;


export const ButtonsContainer = styled.div`
  display: flex;
 
`;

export const IconContainer = styled.div`
  display: flex;
  margin-right:7px;
`;

export const TagContainer = styled.div`
display:block;
text-align: left;
header {
  padding: 18px 0 18px 0;
  font-size: 1.2rem;
  font-weight: 300;
}
`;

export const Sidebar = styled.div`
border: 1px solid hsl(210,8%,85%);
background-color: hsl(210,8%,97.5%);
color: #525960;
box-shadow: 0 1px 2px hsla(0,0%,0%,0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05), 0 2px 8px hsla(0, 0%, 0%, 0.05);

header {
  padding: 12px 15px;
  border-bottom: 1px solid (210,8%,85%);
  font-size: 15px;
  font-weight: 500;
}

& > header:nth-child(3) {
  border-top: 1px solid (210,8%,85%);
}

header:last-child{
  font-size:15px;
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
margin:20px 0;
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
    padding: 0.8em;
    color: hsl(206,100%,40%);
    border: 1px solid hsl(206,85%,57.5%);
    border-radius: 3px;
    background-color: transparent;
    outline:none;
    font-family: inherit;
    font-size: 13px;
    font-weight: normal;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    user-select: none;
`;
  
export const SideHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; 
  padding:12px;
`;
