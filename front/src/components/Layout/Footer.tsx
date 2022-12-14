import React from 'react'
import { Fragment } from 'react'

const Footer:React.FC = () => {
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default Footer;