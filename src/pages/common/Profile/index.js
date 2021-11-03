import { AppSider } from '../../../components';
import {
  EditFilled,
  SafetyCertificateFilled,
  SettingFilled,
  UserOutlined
} from '@ant-design/icons';
import { Layout,Tabs } from 'antd';
import { ProfileDisplay, ProfileEdit, ProfileOther, ProfilePassAndSec } from '../../../containers';
import { Switch, Route, useHistory, BrowserRouter, Redirect } from 'react-router-dom';
import './style.css';
import { useState, useEffect } from 'react';
const { TabPane } = Tabs;
let studentProfileData = [
  { title: 'Profile', component:<ProfileDisplay/> , icon: <UserOutlined /> },
  { title: 'Edit Profile', component:<ProfileEdit/> , icon: <EditFilled /> },
  { title: 'Password & Security', component: <ProfilePassAndSec/>, icon: <SafetyCertificateFilled /> },
  { title: 'Other Settings', component: <ProfileOther/>, icon: <SettingFilled /> },
]

export default function Profile() {

  return (
    <div className="Profile" style={{ marginTop: '2em' }}>
      <BrowserRouter>
        <Layout>
          <Tabs defaultActiveKey="1" tabPosition="left" style={{ minHeight: '80vh'}} type="card">
            {studentProfileData.map(i => (
              <TabPane tab={<span>{i.icon}{i.title}</span>} key={i.title}>
                {i.component}
              </TabPane>
            ))}
          </Tabs>
        </Layout>
      </BrowserRouter>

    </div>
  )
}


