import './style.css';
import { DashboardCard } from '../../components';
import {Row} from 'antd'
/**
 * Dashboard Card Container, contains the Dashboard-Card component, & is utilized by Dashboard page component
 * @returns JSX component
 */

export default function DashboardCardContainer() {
  const cards_data = [
    { title: 'Applications', value: '30', data: [15, 19, 12, 5, 2, 3, 15] },
    { title: 'Payments', value: '11', data: [15, 12, 13, 5, 7, 3, 10] },
    { title: 'Queries', value: '15', data: [6, 20, 13, 15, 10, 7, 2] },
  ];

  return (
    <Row className="DashboardCardContainer">
      {cards_data.map((value, index) => (
        <DashboardCard value={value} key={`card-${index}`} />
      ))}
    </Row>
  );
}
