import React from 'react' 
//this allows the style components to work
//it's imported into package.json by: npm install --save styled-components
import styled from 'styled-components'


// adding styles
const StyledHeader = styled.div`
background-color: lightblue;
font-family: 'Roboto Mono', monospace;


`

// Header Component
const Header = () => {

    return (
        <StyledHeader>
            <h1>NASA Photo of the Day</h1> 
        </StyledHeader>
    )
}

export default Header