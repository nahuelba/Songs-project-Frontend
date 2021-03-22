import { Fragment } from "react";
import { AppBar, Toolbar, Typography } from '@material-ui/core';




const Navbar = () => {


    return ( 
        <Fragment>
            <AppBar color="primary" position="relative">
                <Toolbar>
                <nav>
                <Typography variant="h6" align='center'>
            Song of the day
          </Typography>
                </nav>
                </Toolbar>
            </AppBar>
        </Fragment>


     );
}


 
export default Navbar;