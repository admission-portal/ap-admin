/**
 * @param object - which contains @title ,@subcardData
 * Written By : Tejas Ladhani
 */

import { Typography } from 'antd';
import { Subcard } from '..';
import { Link } from 'react-router-dom';
import './style.css';

export default function ApplicationCard({ title, subCardData }) {
    return (
        <div className="ApplicationCard">
            <div className="ApplicationCard_inner">
                <div className="ApplicationCard_Title">
                    <Link to={`/adm/applications/${subCardData[0].subtitle}`}>
                        <Typography.Title level={4}>{title}</Typography.Title>
                    </Link>
                </div>
                <div className="ApplicationCard_Details_SubCards_Container">
                    {
                        subCardData.map((data) => <Subcard data={data} />)
                    }
                </div>
            </div>
        </div>
    )
}
