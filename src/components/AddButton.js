import { Add } from '@mui/icons-material'
import { Button, Container, Fab, FormControl, FormControlLabel, FormLabel, MenuItem, Modal, Radio, RadioGroup, TextField, Tooltip } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

function AddButton() {
    const [ open,setOpen ] = useState(false);
    const [openAlert,setOpenAlert] = useState(false);
    const handleClick = () => {
        setOpenAlert(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenAlert(false);
      };
    
    return (
       <>
       <Tooltip title="Add" aria-label="Add" sx={{ position:"fixed", bottom:10 , right:15 }} onClick={()=>setOpen(true)}>
        <Fab color="primary">
            <Add />
        </Fab>
       </Tooltip>
       <Modal open={open}>
           <Container sx={{
              width:{md:500,xs:"100vh"},
              height:{md:550,xs:"100vh"},
              backgroundColor:"whitesmoke",
              position:"absolute",
              top:0,
              bottom:0,
              left:0,
              right:0,
              m:"auto"
           }}>
            <form autoComplete="off" sx={{p:2}}>
                <Box sx={{mr:2}}>
                <TextField id="standard-basic" label="title" variant="standard" size="small" sx={{width:{xs:"75%",md:"100%"},m:2}} />
                </Box>
                <Box sx={{mr:2}}>
                <TextField id="outlined-multiline-static"
                 label="Multiline"
                 multiline
                 rows={4}
                 label="description"
                 size="small"
                 sx={{width:{xs:"75%",md:"100%"},m:2}} />
                </Box>
                <Box sx={{ml:2}}> 
                    <TextField select label="visibility" sx={{width:"30%"}} value="Public">
                        <MenuItem value="Public">Public</MenuItem>
                        <MenuItem value="Private">Private</MenuItem>
                        <MenuItem value="Friends only">Friends only</MenuItem>
                    </TextField>
                </Box>

                <Box sx={{mt:2,ml:2}}>
                <FormControl component="fieldset">
                <FormLabel component="legend">Who can comment</FormLabel>
                 <RadioGroup
                 aria-label="commentselect"
                 defaultValue="select comment"
                 name="radio-buttons-group">
                <FormControlLabel value="anybody" control={<Radio />} label="Anybody" />
                <FormControlLabel value="nobody" control={<Radio />} label="Nobody" />
                <FormControlLabel value="friends only" control={<Radio />} label="Friends only" />
                </RadioGroup>
               </FormControl>
                </Box>
                <Box sx={{mt:1}}>
                    <Button variant="outlined" color="primary" sx={{mr:2,ml:{xs:2}}} onClick={handleClick}>Create post</Button>
                    <Button variant="outlined" color="secondary" onClick={()=>setOpen(false)}>cancel</Button>
                </Box>
            </form>
          </Container>
       </Modal>
       <Snackbar open={openAlert} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: {xs:"50%",md:"100%"} }} onClick={()=>setOpen(false)}>
          This is a success message!
        </Alert>
      </Snackbar>
       </>
    )
}

export default AddButton
