import React from 'react'
import classes from './Footer.module.css';


const Footer:React.FC = () => {
  return (
    <div className={classes.footer}>
      <div>
        CryptoChiasse<br/>
        All Rights Reserved.<br/>
        Vous êtes en mode {process.env.NODE_ENV}.
      </div>
      <div>
        <div>
          LINK 1 / LINK 2 / LINK 3
        </div>
      </div>
    </div>
  )
}

export default Footer;