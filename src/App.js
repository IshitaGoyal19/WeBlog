import React from 'react';
import Navbar  from './components/other/Navbar';
import DisplayAllPosts from './components/other/DisplayAllPosts';
import styled from 'styled-components';

const Appp=styled.div
`
.rowC{position:absolute; flex-direction:row;}
`

function App() {
  return (
    <Appp>
      <div className="App">
      <Navbar />
      <br />
      <DisplayAllPosts />
    </div>
    </Appp>
  );
}

export default App;