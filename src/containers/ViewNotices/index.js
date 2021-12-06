import { CustomTable, PageHeader } from '../../components'
import { Row, Col } from 'antd'
// import { Skeleton, Switch, Card, Avatar } from 'antd';
// import { EditOutlined, EllipsisOutlined, DeleteOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'
import { customTableColumnsData } from './data'

export default function ViewNotices() {
    const [Notices, setNotices] = useState()
    const [stateDelete, setStateDelete] = useState(false)
    // const [IsLoading, setIsLoading] = useState(true)

    useEffect(() => {

        var config = {
            method: 'get',
            url: 'https://9qj3u7alhc.execute-api.us-east-1.amazonaws.com/s1/notices',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('id_token')}`
            }
        };

        axios(config)
            .then(function (response) {
                let result = JSON.parse(response.data)
                if (result.ResponseMetadata.HTTPStatusCode == 200)
                    setNotices(result.Items)
                else
                    console.log("Error!")
                console.log(result);
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [])
    // Onclick Function for Notice Delete
    const deleteNotice = (id) => {
        var data = JSON.stringify({
            "id": id
        });

        var config = {
            method: 'delete',
            url: 'https://9qj3u7alhc.execute-api.us-east-1.amazonaws.com/s1/notices',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('id_token')}`,
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                if (response.ResponseMetadata.HTTPStatusCode === 200) {
                    // after delete behaviour
                    setStateDelete(!stateDelete)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        // console.log("clicked")
    }

    return (
        <div className="ViewNotices">
            <PageHeader title="View Notices" />
            <Row sm={24} md={12} lg={6} xl={6} gutter={24}>
                <Col>
                    {Notices != undefined &&
                        <CustomTable data={Notices} customTableColumnsData={customTableColumnsData} />
                    }
                </Col>
            </Row>
        </div>
    )
}
