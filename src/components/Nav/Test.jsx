import React from 'react';
import styled from 'styled-components';

const Tesst=styled.div
`
.header {
    width: 280px;
    height: 280px;
    background: #444;
    animation: corner 3s;
    border-radius: 50%;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    position: absolute;
    top: -50%;
    left: 0;
    right: 0;
    bottom: 0;
  
    margin: auto;
  }
  h1
    {
      position: relative;
      //font-size: 400%;
      text-align: center;
      opacity:1;
     }
a {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-transform: uppercase;
	text-decoration: none;
	text-align: center;
	/* line-height: 2; */
	color: #ff0;
	font-size: 30px;
	font-family: 'Lato', sans-serif;;
	letter-spacing: 4px;

	/* use combination of any two */
	/* 1. */
	/* padding: 5px; */

	/* 2. */
	padding-left: 5px;
	/* padding-right: 5px; */
}

a::before,
a::after,
span::before,
span::after {
	content: '';
	position: absolute;
	width: 8px;
	height: 8px;
	background: transparent;
	transition: 1s;
	/* -webkit-mix-blend-mode: hue; */
}

a::before {
	top: -2px;
	left: -2px;
	border-top: 2px solid #ff0;
	border-left: 2px solid #ff0;
}
a::after {
	top: -2px;
	right: -2px;
	border-top: 2px solid #ff0;
	border-right: 2px solid #ff0;
}

span::before {
	bottom: -2px;
	left: -2px;
	border-bottom: 2px solid #ff0;
	border-left: 2px solid #ff0;
}
span::after {
	bottom: -2px;
	right: -2px;
	border-bottom: 2px solid #ff0;
	border-right: 2px solid #ff0;
}


a:hover::before,
a:hover::after,
a:hover span::before,
a:hover span::after  {
	width: calc( 180px / 2);
	height: calc( 50px / 2);
}
`

const test = () => {
    return (
        <Tesst>
            
        <div className="header">
            <a href="#"><span></span><h1>WeBlog</h1></a>
        </div>
        </Tesst>
    )
}

export default test
