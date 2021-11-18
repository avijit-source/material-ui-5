// import * as React from 'react';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Button from '@mui/material/Button';


// const outerTheme = createTheme({
//   palette: {
//     primary: {
//       main: "#111",
//     },
//   },
// });


// export default function ThemeNesting() {
//   return (
//     <ThemeProvider theme={outerTheme}>
//       <Button color="primary">Text</Button>
//     </ThemeProvider>
//   );
// }
import { Grid } from '@mui/material';
import * as React from 'react';
import AddButton from './components/AddButton';
import Feed from './components/Feed';
import Leftbar from './components/Leftbar';
import Navbar from './components/Navbar';


export default function App() {
  return (
      <div>
        <Navbar />
        <Grid container>
          <Grid item sm={2} xs={2}>
            <Leftbar />
          </Grid>
          <Grid item sm={7} xs={10}>
            <Feed />
            </Grid>
        </Grid>
        <AddButton />
      </div>
  );
}


