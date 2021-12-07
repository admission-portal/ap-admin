import { CustomTable, PageHeader } from '../../components'
import { Row, Col } from 'antd'
// import { Skeleton, Switch, Card, Avatar } from 'antd';
// import { EditOutlined, EllipsisOutlined, DeleteOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'
import { customTableColumnsData } from './data'

export default function ViewNotices() {
    const [Notices, setNotices] = useState([])

    const [idToBeDeleted, setidToBeDeleted] = useState('')    // const [IsLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (Notices.length >= 1)
            document.getElementById("notice_delete_btn").focus();

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
                // console.log(JSON.parse(response.data))
                // after delete behaviour
                let ResponseData = JSON.parse(data)
                setNotices(ResponseData.Items)
            })
            .catch(function (error) {
                console.log(error);
            });
        // console.log("clicked")
    }


    return (
        <div className="ViewNotices">
            <PageHeader title="View Notices" />
            <Row sm={24} md={12} lg={6} xl={6} gutter={24} >
                {Notices.length >= 1 && <div style={{ marginBottom: '2em' }}>
                    <form onSubmit={(e) => { e.preventDefault(); deleteNotice(idToBeDeleted) }}>
                        <input style={{
                            width: '50vw',
                            marginLeft: '0.9em',
                            outline: 'none',
                            border: 'none',
                            background: 'aliceblue',
                            padding: '0.2em',
                            // boxShadow: '0px 1px 1px black',
                            borderRadius: '2px'
                        }}
                            type="text"
                            placeholder="Enter ID of Notice to be deleted "
                            required
                            value={idToBeDeleted}
                            onChange={(e) => { setidToBeDeleted(e.target.value) }} />

                        <input
                            style={{
                                padding: '0.1em',
                                backgroundColor: 'transparent',
                                borderRadius: '3px',
                                marginLeft: '0.3em',
                                border: '0.5px solid black',
                                cursor: 'pointer'
                            }}
                            type="submit"
                            value="Delete"
                            id="notice_delete_btn" />
                    </form>
                </div>}
            </Row>
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
