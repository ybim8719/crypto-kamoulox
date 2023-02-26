import React, {useContext} from 'react';
import AuthContext from '../../store/auth-context';
import 'antd/dist/antd.less';
import { IdcardOutlined, CoffeeOutlined, DollarOutlined, FundOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import icon from '../../images/logo.png';
import classes from './Navbar.module.css';

const Navbar:React.FC = () => {
  const ctx = useContext(AuthContext);

  return (
    <div className='nav-container'>
      <div className={classes.navLogo}>
        <Link to="/"><img src={icon} alt="main-logo"/></Link>
      </div>
      <div className={classes.menu}>
        {ctx.isAuth &&      
            <div className={classes.menuLink}>
              <Link to="/login"><IdcardOutlined /><span>LOGIN/SIGNIN</span></Link>
            </div>
        }
        <div className={classes.menuLink}>
          <Link to="/university"><IdcardOutlined /><span>UNIVERSITY</span></Link>
        </div>
        <div className={classes.menuLink}>
          <Link to="/articles"><CoffeeOutlined/><span>ARTICLES</span></Link>
        </div>
        <div className={classes.menuLink}>
          <Link to="/exchanges"><DollarOutlined/><span>EXCHANGES</span></Link>
        </div>
        <div className={classes.menuLink}>
          <Link to="/cryptos"><FundOutlined/><span>CRYPTOS</span></Link>
        </div>
        <div className={classes.menuLink}>
          <Link to="/app"><FundOutlined/><span>L'APPLI</span></Link>
        </div>
        <div className={classes.menuLink}>
          <Link to="/memory"><FundOutlined/><span>JEU</span></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;