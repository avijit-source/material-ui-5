import { Contacts, Group, Help, Home, Inbox, Login, Logout } from '@mui/icons-material'
import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function Leftbar() {
    return (
        <Container sx={{ pt:3, height:"100vh",position:"fixed",mt:8,color: {xs:"#263238",sm:"black"},background:{sm:"#f5f5f5",xs:'#ffffff',border: "1px solid #999"}}} >
          <Box sx={{mb: { xs:4,sm:3 },display:{sm:"flex"},}}>
            <Home sx={{cursor: 'pointer',mb:1,mr:1}} />
            <Typography sx={{display:{xs:"none",md:"block"}}}>Homepage</Typography>
          </Box>
          <Box sx={{mb: { xs:4,sm:3 },display:{sm:"flex"}}}>
            <Contacts sx={{cursor: 'pointer',mb:1,mr:1}} />
            <Typography sx={{display:{xs:"none",md:"block"}}}>Contact</Typography>
          </Box>
          <Box sx={{mb: { xs:4,sm:3 },display:{sm:"flex"}}}>
            <Group sx={{cursor: 'pointer',mb:1,mr:1}} />
            <Typography sx={{display:{xs:"none",md:"block"}}}>Group</Typography>
          </Box>
          <Box sx={{mb: { xs:4,sm:3 },display:{sm:"flex"}}}>
            <Help sx={{cursor: 'pointer',mb:1,mr:1}} />
            <Typography sx={{display:{xs:"none",md:"block"}}}>Help</Typography>
          </Box>
          <Box sx={{mb: { xs:4,sm:3 },display:{sm:"flex"}}}>
            <Inbox sx={{cursor: 'pointer',mb:1,mr:1}} />
            <Typography sx={{display:{xs:"none",md:"block"}}}>Inbox</Typography>
          </Box>
          <Box sx={{mb: { xs:4,sm:3 },display:{sm:"flex"}}}>
            <Login sx={{cursor: 'pointer',mb:1,mr:1}} />
            <Typography sx={{display:{xs:"none",md:"block"}}}>Login</Typography>
          </Box>
          <Box sx={{mb: { xs:4,sm:3 },display:{sm:"flex"}}}>
            <Logout sx={{cursor: 'pointer',mb:1,mr:1}} />
            <Typography sx={{display:{xs:"none",md:"block"}}}>Logout</Typography>
          </Box>  
          
        </Container>
       
    )
}

export default Leftbar
