import React from 'react' 
import styled from 'styled-components'

// adding styles
const StyledExplanation = styled.div`
color: #521405;
line-height: 26px;
width: 70%;
margin: 0 auto;
padding: 10px;

`

// Explanation Function
const Explanation = (props) => {
    console.log(props.explanation)

    return (
        <StyledExplanation>
            <p>{props.explanation}</p>
        </StyledExplanation>
    )
}

export default Explanation 