import React from 'react' 

// Explanation Function
const Explanation = (props) => {
    console.log(props.explanation)

    return (
        <div>
            <p>{props.explanation}</p>
        </div>
    )
}

export default Explanation 