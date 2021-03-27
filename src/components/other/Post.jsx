import React from "react";
import Button from './Button'
import styled from 'styled-components';
import food from "./img/food.jpeg";
import fashion from "./img/fashion.jpeg";
import travel from "./img/travel.jpeg";
import lifestyle from "./img/lifestyle.jpeg";
import tech from "./img/tech.jpeg";

const Cardd=styled.div
`
.post-container {
  display:inline-block;
  align-items: flex-start;
    justify-content: center;
}

.post-container {
  display: inline-block;
  background: #fff;
  position: relative;
  float: left;
  width: 45%;
  left: 4%;
  height: auto;
  border-radius: 0.6em;
  margin:  8vh 3vh  4vh 1vh;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
  transition: all ease 200ms;
}

.post-container:hover {
  transform: scale(1.03);
  box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
}

.post-container img {
  width: 100%;
  height: 70vh;
  object-fit: cover;
}

.post-container h2 {
  color: #222;
  margin-top: -0.2em;
  line-height: 1.4;
  font-size: 1.3em;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  transition: all ease-in 100ms;
}

.post-container p {
  color: #777;
}

.post-container h5 {
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
.post-container .card-body .category {
  position: absolute;
  top: 63.6%;
  left: 0;
  z-index:20;
  background: #e74c3c;
  padding: 10px 15px;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
}

@media(max-width: 1076px)
{
  .post-container
  {
    width: 86%;
    margin: 7% 4% 5% 3%;
  }
}
`

const Post = ({ name,cat,title, content, editPost, id, deletePost }) => {
  
  var img;
  if(cat==="food")
  img=food;

  else if(cat==="tech")
  img=tech;

  else if(cat==="lifestyle")
  img=lifestyle;

  else if(cat==="fashion")
  img=fashion;
  else if(cat==="travel")
  img=travel;

  return (
    <>
      <Cardd>
           <div className="post-container">
           <img src={img} />
           
          <div className="card-body">
          <div className="category">{cat}</div>
            <h2>{title}</h2>
            <br />
            <p>{content}</p>
            <br></br>
            <h5> {name}</h5>
          </div>
          <Button name="EDIT" func={() => editPost(id)} /><Button name="DELETE" func={() => deletePost(id)}/>
          </div>
        </Cardd>


    </>
  );
};
export default Post;
