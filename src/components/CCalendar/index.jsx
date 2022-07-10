/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-bind */
/**
 * -Utilises the Claendar of ant-d
 *
 * - Returns the data bind with the date [Similar to do]
 *   this will be dynamically allocated from the DB or server.
 *   for now its static
 *
 * Written by: Tejas ladhani
 */
import React from 'react';
import { Calendar, Badge } from 'antd';
import './style.css';

export default function CCalendar() {
  function getListData(value) {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'warning', content: 'Due Date Passed!' },
          { type: 'success', content: 'Successfully Submitted the BTECH Application' },
        ];
        break;
      case 10:
        listData = [
          { type: 'warning', content: 'Payment Remaining' },
          { type: 'success', content: 'Marksheet Uploaded in MBA application' },
        ];
        break;
      case 15:
        listData = [
          { type: 'warning', content: 'BSc Application is out now !' },
          { type: 'warning', content: 'Something New in Notices' },

        ];
        break;
      default:
    }
    return listData || [];
  }

  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }

  function getMonthData(value) {
    if (value.month() === 8) {
      return 1;
    }
  }

  function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }
  return (
    <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
  );
}

// here dateCellRender and MonthCelRender is built in in the calendar module of ant-d.
// we need to define its behavior only.
// date and its value will be passed by the Calendar component only
//  (which it will get from the UI button present on the right-top)
