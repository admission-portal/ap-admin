import { PageHeader } from '../../../components/'
import { Tabs } from 'antd';
import React from 'react'
import './style.css'
import { GenerateNotice, ViewNotices } from '../../../containers';

const { TabPane } = Tabs;

export default function Notices() {
    return (
        <div className="Notices">
            {/* <PageHeader title="Notices" /> */}
            <Tabs defaultActiveKey="1" onChange={() => { }} type="card" tabPosition="left" >
                <TabPane tab="View Notices" key="1">
                    <ViewNotices />
                </TabPane>
                <TabPane tab="Generate Notice" key="2">
                    <GenerateNotice />
                </TabPane>
            </Tabs>
        </div>
    )
}
