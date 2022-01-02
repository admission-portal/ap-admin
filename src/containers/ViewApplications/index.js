import { ApplicationCard, PageHeader } from "../../components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Row, Col } from 'antd'
export default function ViewApplication() {
    const [Details, setDetails] = useState([])

    useEffect(() => {
        // effect
        var config = {
            method: 'get',
            url: 'https://d4z2bizxa5.execute-api.us-east-1.amazonaws.com/s1/applications',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('id_token')}`
            }
        };

        axios(config)
            .then(function (response) {
                setDetails(response.data.Items)
                // console.log(response.data.Items);
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [])

    console.log(Details);

    return (
        <div className="ViewApplication">
            <PageHeader title="View Applications" />
            <Row>
                <Col span={24}>
                    {
                        Details.length !== 0 &&
                        Details.map((item, index) =>
                            <ApplicationCard
                                key={index}
                                title={item.title}
                                subCardData={
                                    [
                                        { title: "Application ID", subtitle: item.ApplicationID },
                                        { title: "Branch", subtitle: item.branch },
                                        { title: "stream", subtitle: item.stream },
                                        { title: "Fees", subtitle: item.fees },
                                        { title: "Last Date", subtitle: item.lastDate }
                                    ]
                                } />
                        )
                    }
                </Col>
            </Row>

        </div>
    )
}
