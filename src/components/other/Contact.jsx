import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from "./Footer";
const Formm=styled.div
`
.form{
	position: relative;
	left: 2vw;
	top: 10vh;
	margin-left: 10vh;
	width: 80%;
	border-radius: 5px;
  	background-color: #f2f2f2;
 	padding: 20px;
}
input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
#review{
	height: 150px;
}
input[type=submit]:hover {
  background-color: #45a049;
}
hr{
	position: absolute;
	//top: 275%;
	//width: 100%;
}
.fcont{
	position: absolute;
	top: 290%;
	right: 2%;
}
.footimg{
	position:absolute;
	left: 2%;
	top: 280%;
}

.arrow img{
	width: 60px;
	height:60px;
	position: fixed;
	right: 50px;
	bottom: 80px;
	z-index: 1;
	box-shadow: 5px 5px grey;
	border-radius: 50%;	
	transition: transform .3s;
}
.arrow img:hover{
	background: radial-gradient(#c5f280,#93c93e,#5c8a13);
	transform: scale(1.2);
}

h2{
  text-align: center;
  font-size: 30px;
	font-family: 'Lato', sans-serif;
	//position: absolute;
	//top: 181vh;
	//left: 45vw;
}
`

const Contact = () => {
    return (
        <Formm>
          <Navbar />
          <div className="form">
            <h2>Feedback Form</h2>
                <label for="name">Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your Name Here" required />

    <label for="email">Email</label>
    <input type="text" id="email" name="email" placeholder="Email Id Here" required />

    <label for="rating">Rating</label>
    <select id="rating" name="rating" class="drop" required="" >
      <option value="NULL">Rate Us Here</option>	
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>

    <label for="review">Review</label>
    <textarea id="review" name="review" placeholder="Your Feedback Here" ></textarea>

    <input type="submit" value="Submit"></input>
        </div>
        <Footer />
        </Formm>
    )
}

export default Contact;
