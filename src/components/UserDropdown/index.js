import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Menu } from 'antd';
import { UserContext } from '../../contexts/user';

export default function UserDropdown() {
  const [visible, setVisible] = useState(false);
  const { user, setUser, logout } = useContext(UserContext);
  const history = useHistory();

  const handleMenuClick = (e) => {
    if (e.key === '2') {
    // logout logic
      logout();
      setUser(undefined);
      setVisible(false);
      history.push('/');
    }
  };

  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };
  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: `Username: ${user.idToken.payload.name}`,
          key: '1',
        },
        {
          label: 'Logout',
          key: '2',
        },
      ]}
    />
  );
  return (
    <Dropdown overlay={menu} onVisibleChange={handleVisibleChange} visible={visible}>
      <Avatar icon={<UserOutlined />} />
    </Dropdown>
  );
}
