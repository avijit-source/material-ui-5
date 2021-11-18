import { Cancel, Mail, Notifications, Search } from '@mui/icons-material';
import { AppBar, Avatar, Badge, InputBase, Toolbar, Typography } from '@mui/material';
import { alpha, Box } from '@mui/system';
import React,{useState} from 'react';
import './Navbar.css';



function Navbar() {
   const [open, setOpen] = useState(false);
    return (
        <div>
          <AppBar className="appbar-gradient" position="fixed">
              <Toolbar sx={{ display: 'flex' , justifyContent: 'space-between'}}>
                 <Typography variant="h6" sx={{ display:{ xs:"none", md:"block" } }}>
                     Social Media
                 </Typography>
                 <Typography variant="h6" sx={{ display:{ xs:"block", md:"none" } }}>
                     Social
                 </Typography>

                
                 {!open && (
                     <Search sx={{ display:{xs:"flex",md:"none"},'&:hover':{ cursor: 'pointer'}}} onClick={()=>setOpen(c=>!c)} className={`${!open}?"showSearchIcon": "" `} />
                 )}

                {open && (
                     <Box sx={{ display:{xs:"flex",md:"none"} , alignItems:'center' ,borderRadius: 1,justifyContent: 'space-between',
                     backgroundColor: alpha('#fcfaf5', 0.15),'&:hover': {
                      backgroundColor: alpha('#fcfaf5', 0.25) },width:{ xs:"50%",md:"20%"} }}>
                     <Search sx={{'&:hover':{ cursor: 'pointer'}}} />
                      <InputBase placeholder="...search" sx={{ color:'#fcfaf5',ml:2 }} />
                      <Cancel onClick={()=>setOpen(c=>!c)} sx={{'&:hover':{ cursor: 'pointer'}}} />
                      </Box>
            
                )}
                   <Box sx={{ display:{xs:"none",md:"flex"} , alignItems:'center' ,borderRadius: 1,justifyContent: 'space-between',
                     backgroundColor: alpha('#fcfaf5', 0.15),'&:hover': {
                      backgroundColor: alpha('#fcfaf5', 0.25) },width:{ xs:"50%",md:"20%"} }}>
                     <Search sx={{'&:hover':{ cursor: 'pointer'}}} />
                      <InputBase placeholder="...search here" sx={{ color:'#fcfaf5',ml:2 }} />
                      </Box>

                  <Box sx={{ display:{md:"flex",xs:"none"} , alignItems:'center' }}>
                      <Badge badgeContent={4} color="primary">
                         <Mail color="#fcfaf5" />
                      </Badge>
                      <Badge badgeContent={2} color="primary" sx={{ m:{ xs:1,md:2 } }}>
                         <Notifications color="#fcfaf5" />
                      </Badge>
                      <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80" />
                      </Box>

                  {!open && (
                      <Box sx={{ display:{xs:"flex",md:"none"} , alignItems:'center' }}>
                      <Badge badgeContent={4} color="primary" sx={{mr:2}}>
                         <Mail color="#fcfaf5" />
                      </Badge>
                      <Badge badgeContent={2} color="primary" sx={{ mr:{ xs:2,md:2 } }}>
                         <Notifications color="#fcfaf5" />
                      </Badge>
                      <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80" />
                      </Box>
                  )}

              </Toolbar>
          </AppBar>
        </div>
    )
}

export default Navbar
