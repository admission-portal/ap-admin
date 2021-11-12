/**
 * SUBCARD:
 * tiny Cards , that will be embedded in the containers for example ApplicationCard
 * @param data - object which contains @title and @subtitle
 *  Written By : Tejas ladhani
 */
import { Typography } from 'antd';
import './style.css';

export default function Subcard({ data }) {
    return (
        <div className="Subcard">
            <div>
                <Typography.Text type='secondary'>{data.title}</Typography.Text>
            </div>
            <div>
                <Typography.Text>{data.subtitle}</Typography.Text>
            </div>
        </div>
    )
}
