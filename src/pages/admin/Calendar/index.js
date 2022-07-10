import React from 'react';
import { CCalendar, PageHeader } from '../../../components';

export default function Calendar() {
  return (
    <div className="Calendar">
      <PageHeader title="Calendar" />
      <br />
      <CCalendar />
    </div>
  );
}
