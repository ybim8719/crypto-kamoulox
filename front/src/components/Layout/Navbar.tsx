import React from 'react'
import 'antd/dist/antd.less';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
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
          <Link to="/about"><HomeOutlined style={{ color: 'hotpink' }}/> ABOUT</Link>
        </div>
        <div className={classes.menuLink}>
          <Link to="/about"><MoneyCollectOutlined style={{  fontSize: '32px'  }}/> ABOUT</Link>
        </div>
        <div className={classes.menuLink}>
          <Link to="/about"><BulbOutlined style={{ color: 'hotpink' }}/> ABOUT</Link>
        </div>
        <div className={classes.menuLink}>
          <Link to="/about"><FundOutlined style={{ color: 'hotpink' }}/> ABOUT</Link>
        </div>
        <div className={classes.menuLink}>
          <Link to="/about"><MenuOutlined style={{ color: 'hotpink' }}/> ABOUT</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;