import './style.css';
import React from 'react';
// import { LogoutOutlined } from '@ant-design/icons';
import { Layout } from 'antd';

/**
 * This function returns a Header component from the Ant Design library, with a className of
 * "site-layout-background Header" and a child component of a div with a className of "logout" and a
 * child component of a LogoutOutlined component from the Ant Design library
 * @returns A Header component with a className of "site-layout-background Header" and a div with a
 * className of "logout" and a LogoutOutlined component.
 */
function AppHeader() {
  const { Header } = Layout;

  return (
    <Header className="site-layout-background Header">
      <div className="logout">
        <span> 👨‍🎓 ad</span>
        <span>MISSION</span>
      </div>
    </Header>
  );
}

export default AppHeader;
