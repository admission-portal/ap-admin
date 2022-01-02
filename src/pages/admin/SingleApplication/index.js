import { Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import './style.css'
import { Tabs } from 'antd'
import { useHistory } from 'react-router';
import axios from 'axios';
import { DetailsOfApplication } from '../../../containers';
import ViewSubmittedApplications from '../../../containers/ViewSubmittedApplications';
const { TabPane } = Tabs;

export default function SingleApplication() {
    const [SingleApplicationData, setSingleApplicationData] = useState()

    const history = useHistory();

    //fetching the APPLICATION-ID from URL
    let temp = history.location.pathname;
    temp = temp.split('/')

    useEffect(() => {
        // effect
        var data = JSON.stringify({
            "ApplicationID": temp[temp.length - 1]
        });

        var config = {
            method: 'put',
            url: 'https://d4z2bizxa5.execute-api.us-east-1.amazonaws.com/s1/applications',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('id_token')}`,
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                if (response.data.status == 200) {
                    temp = response.data.response
                    setSingleApplicationData(response.data.response)
                }
                console.log(response.data.response);
            })
            .catch(function (error) {
                console.log(error);
            });


    }, [])

    return (
        <div className="SingleApplication">
            <Row>
                <Col span={24}>
                    <Tabs defaultActiveKey="1" onChange={() => { }} type="card" tabPosition="top" >
                        <TabPane tab="Details" key="1">
                            {SingleApplicationData &&<DetailsOfApplication detailsData={SingleApplicationData} />}
                        </TabPane>

                        <TabPane tab="Submitted Application" key="2">
                            <ViewSubmittedApplications />
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>
        </div>
    )
}
