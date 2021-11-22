import React from "react";
import AcUnitIcon from '@mui/icons-material/AcUnit';

function Navbar({onClick}){
   
        return(
            <div className="topnav">
                <a href="https://letsgrowmore.in/" target="_blank" rel="noopener noreferrer">LETSGROWMORE</a>
                <AcUnitIcon  style={{color:"lightblue"}} sx={{ fontSize:80 }} />
                 <a className="getuser" onClick={onClick}> GET USERS</a>
            </div>
        )
}

export default Navbar;