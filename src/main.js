import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Switch } from 'react-router-dom';
import {
  ProfileOutlined,
  PieChartOutlined,
  CalendarOutlined,
  QuestionOutlined,
} from '@ant-design/icons';
import ProtectedRoute from './routes/ProtectedRoute';
import { AppHeader, AppSider, AppFooter } from './components';
import {
  Applications,
  Calendar,
  Dashboard,
  Notices,
  Queries,
} from './pages/admin';
import SingleApplication from './pages/admin/SingleApplication';

const { Content } = Layout;

export default function Main() {
  const studentSiderData = [
    { title: 'Dashboard', linkTo: '/adm/', icon: <PieChartOutlined /> },
    {
      title: 'Applications',
      linkTo: '/adm/applications',
      icon: <ProfileOutlined />,
    },
    { title: 'Calendar', linkTo: '/adm/calendar', icon: <CalendarOutlined /> },
    { title: 'Queries', linkTo: '/adm/queries', icon: <QuestionOutlined /> },
    { title: 'Notices', linkTo: '/adm/notices', icon: <QuestionOutlined /> },
  ];

  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>
        <AppHeader />

        <Layout className="site-layout">
          <AppSider data={studentSiderData} haveSubMenu isCollapsible />
          <Layout style={{ minHeight: '100vh' }}>
            <Content style={{ margin: '0 16px' }}>
              <Switch>
                <ProtectedRoute path="/adm/" component={Dashboard} exact />
                <ProtectedRoute
                  path="/adm/applications"
                  component={Applications}
                  exact
                />
                <ProtectedRoute
                  path="/adm/calendar"
                  component={Calendar}
                  exact
                />
                <ProtectedRoute path="/adm/queries" component={Queries} exact />
                <ProtectedRoute path="/adm/notices" component={Notices} exact />
                <ProtectedRoute
                  path="/adm/applications/:ApplicationId"
                  component={SingleApplication}
                />
                {/* <Redirect to="/" /> */}
              </Switch>
            </Content>
            <AppFooter />
          </Layout>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}
