import React, {Component}  from 'react';
import styled from 'styled-components';
import Button from './Button'

const Cardd=styled.div
`
.cards {
  display:inline-block;
  align-items: flex-start;
    justify-content: center;
}

.card {
  display: inline-block;
  background: #fff;
  float: left;
  width: 42%;
  left: 5%;
  //height: 80vh;
  border-radius: 0.6em;
  margin:  4% 0  2% 5%;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
  transition: all ease 200ms;
}

.card:hover {
  transform: scale(1.03);
  box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
}

.card img {
  width: 100%;
  height: 75%;
  object-fit: cover;
}

.card h2 {
  color: #222;
  margin-top: -0.2em;
  line-height: 1.4;
  font-size: 1.3em;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  transition: all ease-in 100ms;
}

.card p {
  color: #777;
}

.card h5 {
  color: #bbb;
  font-weight: 700;
  font-size: 0.7em;
  letter-spacing: 0.04em;
  margin: 1.4em 0 0 0;
  text-transform: uppercase;
}

.card-body {
  padding: 1.2em;
}


@media(max-width: 1076px)
{
  .card
  {
    width: 86%;
    margin: 7%;
  }
}
`

class Card extends React.Component {
  render() {
    return (
        <Cardd>
           <div className="card">
          <img src={this.props.img} />
          <div className="card-body">
            <h2>{this.props.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <h5>{this.props.author}</h5>
          </div>
          <Button name="EDIT" /><Button name="DELETE"/>
          </div>
        </Cardd>
    )
}
}

export default Card