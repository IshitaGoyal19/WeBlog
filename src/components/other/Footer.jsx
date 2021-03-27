import React from 'react';
import styled from 'styled-components';

const Foot=styled.div
`
.foo
{
    width:100%;
    margin-top: 3%;
    bottom: 50px;
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
