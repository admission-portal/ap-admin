/**
 * renders out SideBar for the Application.
 * Being utilised by Profile & outermost layout (`main.js`)
 * @param data -data to be rendered (the content === link to other components)
 * @param haveSubMenu - boolean value , to notify that the caller component need submenu or not.
 * @param isCollapsible - boolean value, is siderbar need to have collapse button & mechanism
 * 
 * Written By : Tejas Ladhani
 */

import React, { useState } from 'react'
import './style.css'
import {
    NotificationOutlined
} from '@ant-design/icons';

import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';

const { Sider } = Layout;
const { SubMenu } = Menu;
function AppSider({ data, haveSubMenu, isCollapsible }) {
    const [collapsed, setcollapsed] = useState(false)
    let keyCounter = 1;
    const onCollapse = collapsed => {
        console.log(collapsed);
        setcollapsed(collapsed);
    };

    return (
        <Sider width={210}
            className="site-layout-background" collapsible={isCollapsible} collapsed={collapsed} onCollapse={() => onCollapse(!collapsed)}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
            >
                {
                    haveSubMenu === true ?
                        <SubMenu key="sub3" icon={<NotificationOutlined />} title="Notifications">
                            <Menu.Item key="9">notice1</Menu.Item>
                            <Menu.Item key="10">notice2</Menu.Item>
                            <Menu.Item key="11">notice3</Menu.Item>
                            <Menu.Item key="12">notice4</Menu.Item>
                        </SubMenu>
                        :
                        <></>
                }

                {

                    data.map((item) => {
                        return (
                            <Menu.Item key={keyCounter++} icon={item.icon}>
                                <span>{item.title}</span>
                                <Link to={item.linkTo} />
                            </Menu.Item>
                        )
                    })
                }

            </Menu>
        </Sider>

    )
}

export default AppSider;
