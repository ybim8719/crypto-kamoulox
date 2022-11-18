import React from 'react'
import 'antd/dist/antd.less';
import { IdcardOutlined, CoffeeOutlined, DollarOutlined, FundOutlined, UsbOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import icon from '../../images/logo.png';
import classes from './Navbar.module.css';

const Navbar:React.FC = () => {

  return (
    <div className='nav-container'>
      <div className={classes.navLogo}>
        <img src={icon} alt="main-logo"/>
      </div>
      <div className={classes.menu}>
        <div className={classes.menuLink}>
          <Link to="/about"><IdcardOutlined /><span>LOG IN</span></Link>
        </div>
        <div className={classes.menuLink}>
          <Link to="/about"><CoffeeOutlined/><span>ABOUT</span></Link>
        </div>
        <div className={classes.menuLink}>
          <Link to="/about"><DollarOutlined/><span>EXCHANGES</span></Link>
        </div>
        <div className={classes.menuLink}>
          <Link to="/about"><FundOutlined/><span>CRYPTOS</span></Link>
        </div>
        <div className={classes.menuLink}>
          <Link to="/about"><UsbOutlined /><span>BONUS</span></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;