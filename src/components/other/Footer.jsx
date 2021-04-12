import React from 'react';
import styled from 'styled-components';

const Foot=styled.div
`
.foo
{
    position: relative;
    width:100%;
    margin-top: 10%;
    bottom: 0px;
    text-align: center;
    background: #68B0AB;
    height: 45px;
}
p
{
    padding: 3px;
    font-size: 30px;
	font-family: 'Lato', sans-serif;
}
`

const Footer = () => {
    return (
        <Foot>
            <div className="foo">
            <p>WeBlog :)</p>
        </div>
        </Foot>
    )
}

export default Footer
