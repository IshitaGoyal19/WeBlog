import React, {Component} from 'react'
import styled from 'styled-components';

const Buttonn=styled.div
`
.sub-main{
    width: 32%;
    margin:22px;
    float: left;
  }
  
 .button{
    text-align: center;
    cursor: pointer;
    font-size:20px;
    margin: 0 0 0 100px;
  }
  
  .button{
    position: relative;
    background-color: #343A40;
    color: white;
    height: 57px;
    border-radius: 10%;
    border: none;
    padding: 2% 4% 3% 4%;
    width: 152px;
    text-align: center;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
}

.button:hover{
   background:#fff;
   box-shadow:0px 2px 10px 5px #97B1BF;
   color:#000;
}

.button:after {
    content: "";
    background: #f1c40f;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
}

.button:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
}
  
`

class Button extends React.Component {
    render() {
    return (
       <Buttonn>
           <div className="sub-main">
      <button className="button" onClick={this.props.func}>{this.props.name}</button>
    </div>
            
       </Buttonn>
    )
}}

export default Button
