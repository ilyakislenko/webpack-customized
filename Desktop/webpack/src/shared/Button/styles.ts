import { styled } from "@linaria/react";

export const Button = styled.button`
width:150px;
height:40px;
border:none;
border-radius:5px;
background:#EB8235;
color:white;
margin: 24px auto 24px auto;
cursor:pointer;
&:active{
background: #EB8885;
}
`