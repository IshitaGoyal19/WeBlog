import React, { useState, useRef } from "react";
import CreateNewPost from "./CreateNewPost";
import Post from "./Post";
import ModifyPost from "./ModifyPost"
import Button from "./Button";
import ToggleCreateNewPost from "./ToggleCreateNewPost";
import styled from "styled-components";
//import "./style.css";

const Displayy=styled.div
`
.no-post {
  border:2px dashed black;
  text-align: center;
  height: 44vh;
  background-color: #C8D5B9; 
  margin: 5%;
  padding: 5%;
}

.headds {
  text-transform: uppercase;
  text-align: center;
  font-size: 2.8rem;
}
.headds2 {
  text-transform: uppercase;
  text-align: center;
  font-size: 2.3rem;
  padding: 0;
  margin: 0;
}
h3 {
  text-transform: uppercase;
  text-align: center;
  font-size: 1.5rem;
  padding: 0;
  margin: 0;
}
.button-wrapper {
  /*text-align: center;*/
  margin: -2vh 56vh;
}

.button-wrapper2
{
  align-items: center;
  position: relative;
  height: 50vh;
  padding-top: 22%;
  padding-left: 47%;
}

@media(max-width: 1076px)
{
  .button-wrapper
  {
    margin: -1vh 15vh;
  }
  .button-wrapper2
  {
    padding-left:172px;
  }
}


/*html {
	height: 100%;
}*/

body {
	align-items: center;
	justify-content: center;
	font-family: 'Bungee Shade', cursive;
	 background: #ffed94; 
}

//$size: 20px;

.data-heading {
	display: flex;
	align-items: center;
	justify-content: center;
	align-content: center;
	text-align: center;
	font-weight: normal;
	width: 100%;
	text-align: center;
	
	font-size: 550%;
	background: linear-gradient(
		-45deg, 
		#4bc0c8 25%, 
		#feac5e 25%, 
		#feac5e 50%, 
		#4bc0c8 50%, 
		#4bc0c8 75%, 
		#feac5e 75%, 
		#feac5e);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-size: 20px 20px;
	background-position: 0 0;
	animation: stripes 1s linear infinite;
}	

@keyframes stripes {
	100% { 
		background-position: 20px 0, 20px 0, 20px 0;
	}
}

`

const DisplayAllPosts = () => {
  const [name, setName] = useState("");
  const [cat, setCat] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [isCreateNewPost, setIsCreateNewPost] = useState(false);
  const [isModifyPost, setIsModifyPost] = useState(false);
  const [editPostId, setEditPostId] = useState("");

  // Initialize useRef
  const getName=useRef();
  const getCat=useRef();
  const getTitle = useRef();
  const getContent = useRef();

  const savePostTitleToState = event => {
    setTitle(event.target.value);
  };
  const savePostNameToState = event => {
    setName(event.target.value);
  };

  const savePostCatToState = event => {
    setCat(event.target.value);
  };

  const savePostContentToState = event => {
    setContent(event.target.value);
  };
  const toggleCreateNewPost = () => {
    setIsCreateNewPost(!isCreateNewPost);
  };
  const toggleModifyPostComponent = () => {
    setIsModifyPost(!isModifyPost)
  }
  const editPost = id => {
    setEditPostId(id);
    console.log(id)
    toggleModifyPostComponent();
  };
  const deletePost = id => {
    const modifiedPost = allPosts.filter(eachPost => {
      return eachPost.id !== id;
    });
    setAllPosts(modifiedPost);
  };
  const updatePost = (event) => {
    event.preventDefault();
    const updatedPost = allPosts.map(eachPost => {
      if (eachPost.id === editPostId) {
        console.log([eachPost.id, editPostId] )
        return {
          ...eachPost,
          name:name ||eachPost.name,
          cat:cat ||eachPost.cat,
          title: title || eachPost.title,
          content: content || eachPost.content
        };
      }
      console.log(eachPost)
      return eachPost;
    });
    setAllPosts(updatedPost);
    toggleModifyPostComponent();
  };
  const savePost = event => {
    event.preventDefault();
    const id = Date.now();
    setAllPosts([...allPosts, { name,cat,title, content, id }]);
    console.log(allPosts);
    setName("");
    setCat("");
    setTitle("");
    setContent("");
    getName.current.value = "";
    getCat.current.value = "";
    getTitle.current.value = "";
    getContent.current.value = "";
    toggleCreateNewPost();
  };
  if (isCreateNewPost) {
    return (
      <>
        <CreateNewPost
           savePostNameToState={savePostNameToState}
           savePostCatToState={savePostCatToState}
          savePostTitleToState={savePostTitleToState}
          savePostContentToState={savePostContentToState}
          getName={getName}
          getCat={getCat}
          getTitle={getTitle}
          getContent={getContent}
          savePost={savePost}
          deletePost={deletePost}
        />
      </>
    );
  }
  else if (isModifyPost) {
    const post = allPosts.find(post => {
      return post.id === editPostId;
    });
    return (
      <ModifyPost
      name={post.name}
        cat={post.cat}
        title={post.title}
        content={post.content}
        updatePost={updatePost}
        savePostNameToState={savePostNameToState}
        savePostCatToState={savePostCatToState}
        savePostTitleToState={savePostTitleToState}
        savePostContentToState={savePostContentToState}
      />
    );
  }
  return (
    <>
      {!allPosts.length ? (
        <Displayy>
          <section className="no-post">
          <h1 class="data-heading" data-heading="No post found">No Post Found!</h1>
          <h3>There is nothing to see here.</h3>
          <br />
      <br />
          <section className="button-wrapper">
            <Button name="ADD BLOG" func={toggleCreateNewPost} />
      </section>
        </section>
        </Displayy>
        
      ) : (
      
      <Displayy>
        <div><h1 class="headds">All Posts</h1>
        <section className="all-post">
        {allPosts.map(eachPost => {
          return (
            <Post
              id={eachPost.id}
              key={eachPost.id}
              name={eachPost.name}
              cat={eachPost.cat}
              title={eachPost.title}
              content={eachPost.content}
              editPost={editPost}
              deletePost={deletePost}
            />
          );
        })}
      <section className="button-wrapper2">
      <Button name="ADD BLOG" func={toggleCreateNewPost}/>
      </section>
        </section>
        
        </div>
      </Displayy>
      )}
      
    </>
  );
};

//module.exports={toggleCreateNewPost, DisplayAllPosts};
export default DisplayAllPosts;