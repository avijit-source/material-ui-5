import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

function Post() {
    return (
       <Card sx={{mb:3,mt:5,border: 1}}>
           <CardActionArea>
               <CardMedia
               component="img"
               height="200"
               image="https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1854&q=80"
               title="my post"
               />
               <CardContent>
                   <Typography variant="h5" gutterBottom>amazing tigers</Typography>
                   <Typography variant="body2">Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Laudantium, magnam vel? Sit voluptatibus nihil,
                    minus libero nemo tempora molestias ut aliquam voluptatem, dolorem
                     optio nisi nam molestiae magni. Ipsam, illum Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Laudantium, magnam vel? Sit
                    voluptatibus nihil, minus libero nemo tempora molestias ut aliquam voluptatem
                    ,doloremoptio nisi nam molestiae magni. Ipsam, illum!
                     </Typography>
               </CardContent>
           </CardActionArea>
           <CardActions>
               <Button variant="outlined">learn more</Button>
               <Button variant="outlined">share</Button>
           </CardActions>
       </Card>
    )
}

export default Post
