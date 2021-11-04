import './style.css'
import { Row, Col } from 'antd'
import { ChartContainer, DashboardCardContainer } from '../../../containers'
import { PageHeader } from '../../../components'

export default function Dashboard() {
    return (
        <div className="Dashboard">
            <PageHeader title="Dashboard"/>
            {/* <Row style={{paddingRight:'1.3em'}}>
                <Col span={8}>
                    <ChartContainer />
                </Col>
                <Col span={8}>
                    <ChartContainer />
                </Col>
                <Col span={8}>
                    <ChartContainer />
                </Col>
            </Row> */}
            <DashboardCardContainer />
        </div>
    )
}
