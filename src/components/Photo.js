import React, { useState, useEffect} from 'react' 
import Title from "./Title"
import Date from "./Date"
import Explanation from "./Explanation"
import styled from 'styled-components'

import axios from 'axios'

// Photo Styles
const StyledPhoto = styled.div`

`



// Photo Component
const Photo = () => {

    const [photo, setPhoto] = useState({})

    useEffect (() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(res => {
            console.log(res.data.explanation)
            setPhoto(res.data)
        })
    }, [])

    return (
        // render here
        <StyledPhoto>
            <Title title={photo.title} />
            <img src={photo.url} alt='' />
            <Date date={photo.date} />
            <Explanation explanation={photo.explanation} />
        </StyledPhoto>
    )

}

export default Photo