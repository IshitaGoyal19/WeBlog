import React from 'react';
import styled from 'styled-components'
import { BrowserRouter, Link } from "react-router-dom";
//import {toggleCreateNewPost,  DisplayAllPosts} from "../other/DisplayAllPosts";

const Ul= styled.ul`
  float: right;
  top: 50px;
  right:0;
  position: absolute;
  width: 20%;
  color:white;
  
ul {
  display: flex;
  flex-direction: row;
  align-items: start;
  list-style-type: none;

  li {
    padding: 6px 10px;

    a {
      position: relative;
      display: block;
      padding: 4px 0;
      font-family: Lato, sans-serif;
      color: #ba181b;
      text-decoration: none;
      text-transform: uppercase;
      transition: 0.5s;

      &::after {
        position: absolute;
        content: "";
        top: 100%;
        left: 0;
        width: 100%;
        height: 3px;
        background: #3498db;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.5s;
      }

      &:hover {
        color: #95a5a6;
      }

      &:hover::after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }
}
  @media (max-width: 1076px){
    
    background-color: #0d2538;
    position: fixed;
    transform: ${({open}) => open? 'translateX(0)': 'translateX(100%)'};
    top: -1%;
    right: 0;
    height: 100vh;
    width: 20%;
    padding-top:6.5rem;
    transition: transform 0.3s ease-in;
    color: white;

    li{
      top: 5%;
      color:#fff;
      padding-left: 25px;
      //text-align: center;
    }
    a
    {
      text-color: white;
    }
    ul{
      flex-flow: column nowrap;
      color: white;
    }
    button
    {
      color: white;
    }
  }

  button
  {
    background: none;
	//color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  font-family: Lato, sans-serif;
  color: #ba181b;

  &::after {
    position: absolute;
    content: "";
    top: 100%;
    left: 0;
    width: 100%;
    height: 3px;
    background: #3498db;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s;
  }

  &:hover {
    color: #95a5a6;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
  }
`;


const RightNav = ({open}) => {
  return (
    <Ul open={open}>
    
    <ul>
    <li><Link to = "/">Home</Link></li>
      <li><a href="#"><button>ADD BLOG</button></a></li>
      <li><Link to = "/contact">Contact Us</Link></li>
    </ul>
    </Ul>
  )
}

export default RightNav;