import React from "react";
import Button from './Button';
import styled from "styled-components";

const Createe= styled.div
`
.create-post
{
  height: 105vh;
  background-color: white;
  padding: 5%;
  margin: 5%;
  border-radius: 1px;
  position: relative;
}

.create-post::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
  -webkit-transform: scale(0.98);
          transform: scale(0.98);
  -webkit-transition: -webkit-transform 0.28s ease-in-out;
  transition: -webkit-transform 0.28s ease-in-out;
  transition: transform 0.28s ease-in-out;
  transition: transform 0.28s ease-in-out, -webkit-transform 0.28s ease-in-out;
  z-index: -1;
}
.create-post:hover::before {
  -webkit-transform: scale(1);
          transform: scale(1);
}


h1
{
  text-align: center;
  font-family: Lato, sans-serif;
}

textarea {
  height: 200px;
}
input[type="text"],
textarea {
  display: block;
  padding: 1rem 0.5rem;
  border: 0;
  outline: none;
  color: rgba(0, 0, 0, 0.7);
  white-space: pre-wrap;
  font-family: "roboto-regular", sans-serif;
  font-size: 1.4rem;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  border: none;
}

body::after, body::before,
input::after,
input::before,
select::after,
select::before,
textarea::after,
textarea::before,
body *::after,
body *::before {
  box-sizing: border-box;
}
.form-group {
  position: relative;
  margin-top: 2.25rem;
  margin-bottom: 2.25rem;
}
.form-inline > .form-group
{
  display: inline-block;
  margin-bottom: 0;
}
.form-group select {
  width: 100%;
  font-size: 1rem;
  height: 1.6rem;
  padding: 0.125rem 0.125rem 0.0625rem;
  background: none;
  border: none;
  line-height: 1.6;
  box-shadow: none;
}
.form-group .control-label {
  position: absolute;
  top: 122.5vh;
  pointer-events: none;
  padding-left: 0.125rem;
  z-index: 1;
  
  font-family: Lato, sans-serif;
  color: #b3b3b3;
  font-size: 1rem;
  font-weight: normal;
  -webkit-transition: all 0.28s ease;
  transition: all 0.28s ease;
}
.form-group .bar {
  position: relative;
  border-bottom: 0.0625rem solid #999;
  display: block;
}
.form-group .bar::before {
  content: '';
  height: 0.125rem;
  width: 0;
  left: 50%;
  bottom: -0.0625rem;
  position: absolute;
  background: #337ab7;
  -webkit-transition: left 0.28s ease, width 0.28s ease;
  transition: left 0.28s ease, width 0.28s ease;
  z-index: 2;
}
.form-group select
{
  color: #333;
}
.form-group select ~ .control-label
{
  font-size: 0.8rem;
  color: gray;
  top: -1rem;
  left: 0;
}

.form-group select:focus
{
  outline: none;
}

.form-group select:focus ~ .control-label
{
  color: #337ab7;
}

.form-group select:focus ~ .bar::before
{
  width: 100%;
  left: 0;
}

.button-wrapperr
{
  padding: 1% 37%;
}

@media (max-width: 1076px)
{
  .create-post
  {
    height: 110vh;
    margin: 11%;
  }
  
.button-wrapperr
{
  height: 20vh;
  padding: 4% 7%;
}
}

`
const CreateNewPost = props => {
  return (
    <Createe>
    <section className="create-post">
    <form onSubmit={props.savePost}>
    <h1>Create New Blog</h1>
    <br />
      <div className="form-group">  
         <select name="cat" id="cat"   type="text"
          onChange={props.savePostCatToState}
          required
          ref={props.getCat}>
          <option value="food">Food</option>
          <option value="fashion">Fashion</option>
          <option value="tech">Tech</option>
          <option value="travel">Travel</option>
          <option value="lifestyle">LifeStyle</option>
        </select>
        <label for="cat" className="control-label">Choose a category:</label>
        <i class="bar"></i>
        <br />
        <br />
        <input
          type="text"
          onChange={props.savePostNameToState}
          placeholder="Name"
          size="39"
          required
          ref={props.getName}
        ></input>
        <br />
        <br />
        <input
          type="text"
          onChange={props.savePostTitleToState}
          placeholder="Title"
          size="39"
          required
          ref={props.getTitle}
        ></input>
        <br />
        <br />
        <textarea
          onChange={props.savePostContentToState}
          placeholder="Content"
          rows="8"
          cols="41"
          required
          ref={props.getContent}
        ></textarea>
        <br />
        <br />
        <section className="button-wrapperr">
        <Button name="SAVE POST"/></section>
      </div>
      </form>
      </section>
    </Createe>
  );
};
export default CreateNewPost;
