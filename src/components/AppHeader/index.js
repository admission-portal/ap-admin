/**
 * This component is nothting but the Navbar (Appbar) which will be on the Top section.
 * Being Utilised by the main.js (outermost layout)
 * 
 * Written By : tejas Ladhani
 */
import './style.css'
import {
  LogoutOutlined,
} from '@ant-design/icons';
import { Layout } from 'antd';

function AppHeader() {
  const { Header } = Layout;

  return (
    <Header className="site-layout-background Header">
      <div className="logout"><LogoutOutlined /></div>
    </Header>
  )
}

export default AppHeader;
