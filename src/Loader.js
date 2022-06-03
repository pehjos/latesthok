import React from 'react'
import { CircularProgress } from '@material-ui/core';
import './loader.css'
function Loader() {
    return (
        <div className="loader">
            <p>hookwall</p>
          
            <div className="loader1"> <CircularProgress/></div>
        
        </div>
    )
}

export default Loader
