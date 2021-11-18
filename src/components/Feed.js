import { Container } from '@mui/material'
import React from 'react'
import Post from './Post'

function Feed() {
    return (
        <Container sx={{ paddingTop:5 }}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </Container>
    )
}

export default Feed
