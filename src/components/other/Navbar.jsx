import React from 'react';
import styled from 'styled-components';
import logo from './2.jfif'
import Burger from '../Nav/Burger';
import Header from '../Nav/Header';


const Nav = styled.nav`
  width: 100%;
  height: 100vh;
  top: 5px;
  //border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  
  .Main-Nav-Image
  {
    margin: 5px;
    float: left;
    position: relative;
    //text-align: center;
    height: 180vh;
    width: 100%;
    padding-top: 28px;
  }
  .Main-Nav-Image img
  {
    width: 100%;
    height: 50%;
    //filter: grayscale(100%);
    -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.4));
    border: 2px solid #2a3cad;
    border-radius: 4px;
    box-shadow: 0px 0px 5px #2a3cad;
  }

`
const Navbar = () =>
{
  return (
    <Nav>
      <div className="Main-Nav-Image" >
        <img src={logo} alt="Mainpic" />
        <Burger />
        <Header />
      </div>
      
    </Nav>
  )
}
export default Navbar