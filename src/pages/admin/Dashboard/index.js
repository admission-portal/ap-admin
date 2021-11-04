import './style.css'
import { DashboardCardContainer } from '../../../containers'
import { CustomTable, PageHeader } from '../../../components'
import { Row, Col, Typography } from 'antd'

export default function Dashboard() {
    return (
        <div className="Dashboard">
            <PageHeader title="Dashboard" />
            <DashboardCardContainer />
            <Row>
                <Col span={12}>
                    <div className="TABLE_Container" style={{margin:'1.2em 1.4em'}}>
                      <Typography.Title level={5} style={{marginBottom:'1.1em'}}>Recent Applicants</Typography.Title>
                        <CustomTable />
                    </div>
                </Col>
            </Row>
        </div>
    )
}
